---
id: 3vzqyyohwbs653l4ua3rmyz
title: Type Coercion
desc: ""
updated: 1679656251652
created: 1679656251652
---

# Type coersion for primitive type

## To number

Here is how primitive values are converted to numbers:

```
Number(null)                   // 0
Number(undefined)              // NaN
Number(true)                   // 1
Number(false)                  // 0
Number(" 12 ")                 // 12
Number("-12.34")               // -12.34
Number("\n")                   // 0
Number(" 12s ")                // NaN
Number(123)                    // 123
```

- null and undefined are handled differently: null becomes 0, whereas undefined becomes NaN.

### Triggered via

- comparison operators (>, <, <=,>=)
- bitwise operators ( | & ^ ~)
- arithmetic operators (- + \* / % ). Note, that binary + does not trigger numeric conversion, when any operand is a string.
- unary + operator
- loose equality operator == (incl. !=).
- Note that == does not trigger numeric conversion when both operands are strings.

There are two special rules to remember:

1. When applying == to null or undefined, numeric conversion does not happen. null equals only to null or undefined, and does not equal to anything else.

```
null == 0               // false, null is not converted to 0
null == null            // true
undefined == undefined  // true
null == undefined       // true
```

2.
3. NaN does not equal to anything even itself:

```
if (value !== value) { console.log("we're dealing with NaN here") }
```

## To string

Implicit coercion is triggered by the binary + operator, when any operand is a string:

```
String({})   // '[object Object]'
```

## To Boolean

```
Boolean('')           // false
Boolean(0)            // false
Boolean(-0)           // false
Boolean(NaN)          // false
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(false)        // false
```

- Any value that is not in the list is converted to true, including object, function, Array, Date, user-defined type, and so on.
  eg :

```
Boolean({})             // true
Boolean([])             // true
Boolean(Symbol())       // true
!!Symbol()              // true
Boolean(function() {})  // true
```

### Triggered via

Implicit conversion happens in logical context, or is triggered by logical operators ( || && !) .

# Type coercion for objects

- When it comes to objects and engine encounters expression like [1] + [2,3], first it needs to convert an object to a primitive value, which is then converted to the final type. And still there are only three types of conversion: numeric, string and boolean.

Both numeric and string conversion make use of two methods of the input object: valueOf and toString . Both methods are declared on Object.prototype and thus available for any derived types, such as Date, Array, etc

Numeric conversion first calls valueOf with a fallback to toString.
String conversion does the opposite: toString followed by valueOf

In general the algorithm is as follows:

1. If input is already a primitive, do nothing and return it.

2. Call input.toString(), if the result is primitive, return it.

3. Call input.valueOf(), if the result is primitive, return it.

4. If neither input.toString() nor input.valueOf() yields primitive, throw TypeError.
