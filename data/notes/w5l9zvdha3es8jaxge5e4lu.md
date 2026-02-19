

## React with Typescript Cheatsheet
- https://react-typescript-cheatsheet.netlify.app/docs/basic/setup

## TS

- superset of javascript.
- can't be executed by JS environment (browsers, nodejs)

## Creating nodejs application with typescript config

1. npm init -y
1. save typescript as dev dependency: `npm i -D typescript`
1. Create tsconfig.json: `npx tsc --init`.
1. Mark `"esModuleInterop": true` in tsconfig.json to support import syntax
1. `tsc` will compile typescript files to js, you can configure tsconfig.json's `outDir` property to provide path for transpiled files.
1. `tsc -w` will watch for changes.
1. use [[ts-node|learning.typescript#ts-node]] and nodemon in dev environment.

## ts-node

The ts-node library is a TypeScript execution and REPL (Read-Eval-Print Loop) for Node.js. It allows you to directly run TypeScript code without explicitly compiling it to JavaScript.

When you run a TypeScript file using the ts-node library, it dynamically compiles the TypeScript code on-the-fly and executes it in the Node.js runtime environment. This eliminates the need to manually compile the TypeScript code before running it with Node.js.


## Types

```js
//array

let arr:number[]=[1,2]

//fixed length array is called tuple in ts

let tuple:[number,number]=[1,2]

//rest parameter any number of parameters to a function
function sum(...values:number[]){
    return values.reduce((acc,currentVal)=>acc+currentVal)
}

//structural typing : duck typing 
type Point2D={x:number,y:number}
type Point3D={x:number,y:number,z:number}

let a:Point2D={x:0,y:2}
let b:Point3D={x:0,y:2,z:3}

a=b

//Generics
class Queue<T>{
data:T[]=[];

push(item:T){this.data.push(item);}
pop():T|undefined{return this.data.shift();}
}

const queue=new Queue<number>()

//any unknown unknown is a type safe version of any


const delay=(ms:number)=> new Promise(res=>setTimeout(res,ms))

const mainAsync=async()=>{
    await delay(1000)
    console.log(1);
    await delay(1000)
    console.log(2);
    await delay(1000);
    console.log(3);
}

//literal types
let direction: 'North'|'South'|'East'|'West'

//typeof for primitive, instanceof for class object , in for property in object without new

//discriminated unions

type Square={
    kind:'square',
    size:number
}
type Rectangle={
    kind:'rectangle',
    height:number,
    width:number
}

//never
type Shape=Square|Rectangle

function area(s:Shape){
    if(s.kind==='square'){
        return  s.size*s.size
    }
    if(s.kind==='rectangle'){
        return s.height*s.width
    }
    const _ensureAllCasesAreHandled:never=s
    return _ensureAllCasesAreHandled
}

//assert function
function assert(condition:unknown,message:string): asserts condition{
    if(!condition) throw new Error(message)
}

function assertDate(value:unknown): asserts value is Date{
    if(value instanceof Date)return
    else throw new TypeError('value is not a date')
}



//read-only 
function sortReverse(input : readonly number[]){
    return input.slice().sort().reverse()
}
const start=[1,2,3,4,5]
const end=sortReverse(start)

type Point= readonly [number,number]

function movePoint(point:Point,x:number,y:number):Point{
    return [point[0]+x,point[1]+y]
}

//const assertion
function layout(settings:{
    align:'left'|'center'|'right',
    padding:number
}){
console.log('performing layout', settings);
}

const example={
    align:'left'as const,
    padding:10
}

layout(example)

//lookup types
type nestedJson={
    prop1:{
        prop2:string
        prop3:number
    }
    prop4:boolean
}

type lookupProp=nestedJson["prop1"]

//conditional types 
export type TypeName<T>= 
T extends string?"string":
T extends number?"number":
T extends boolean?"boolean":
T extends undefined?"undefined":
T extends symbol?"symbol":
T extends bigint?"bigint":
T extends Function?"function":
T extends null?"null":
"object"

function typeName<T>(t:T):TypeName<T>{
    return typeof t as TypeName<T>
}

const str=typeName("hello")

//infer
type isArray<T>=T extends Array<T>?"array":"object"

type MemberOfArray<T>= T extends Array<infer M>?M:T

type UnboxArray=MemberOfArray<string[]>
type Anything=MemberOfArray<string>

//Return typeof when output of one function is the input of another
function createPerson(firstName:string,lastName:string){
return{
    firstName,
    lastName,
    fullName:`${firstName} ${lastName}`
}
}

function logPerson(person: ReturnType<typeof createPerson>){
    console.log("Person", person.firstName,person.lastName,person.fullName);
    
}

//Mapped types loop over union of keys
type Point1={
    x:number
    y:number
    z:number
}

type ReadOnlyPoint<T>={
    readonly [item in keyof T]:T[item]
}

const center:ReadOnlyPoint<Point1>={
    x:0,
    y:0,
    z:0
}

//template literal

let templateLiteral:`example ${string}`

templateLiteral='example hello'

type CSSValue=number| `${number}px`|`${number}rem`|`${number}em`

let height:CSSValue='12px'

function size(value:CSSValue){
    return typeof value==='number'?value+'px':value
}

size(1)
size('1rem')
size('1px')

//Partial make all members optional
type PartialPoint=Partial<Point1>

//Required make all members required
type RequiredConfig=Required<Point3D>

//Readonly makes all members read only
type ReadonlyPoint=Readonly<Point2D>

const example1={
    x:0
}

function makeReadonly<T>(t:T):Readonly<T>{
    return Object.freeze({...t})
}

example1.x=2

const example2=makeReadonly(example1)
//example2.x=2

//Record

type PageInfo={
    id:number
    title:string
}

type PageVerbose={
    home:PageInfo
    services:PageInfo
    about:PageInfo
    contact:PageInfo
}
type Pages=Record<'page'|'services'|'about'|'contact',PageInfo>


//Mapped type as clauses
type State={
    name:string
    age:number
}

type Setter<T>={
    [k in keyof T & string as `set${Capitalize<k>}`]:(value: T[k])=>void
}

type Getter<T>={
    [k in keyof T & string as `get${Capitalize<k>}`]:()=>T[k]
}
```