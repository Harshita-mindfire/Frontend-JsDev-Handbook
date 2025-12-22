---
id: kcih4pnhbb795924pnidwra
title: Basics
desc: ''
updated: 1766143567731
created: 1766143567731
---

## Basics
Go through this codebase:

https://github.com/krishnaik06/Complete-Python-Bootcamp/tree/main/1-Python%20Basics


**Some Notes**: 

- **/ is true division**. In Python, / always returns a float, even when the math result is a whole number.

```py
4 / 2
```
>➡️ 2.0

Why?
Python 3 defines / as true division.

Result is always **float**.

- **// is floor division**

// returns the quotient rounded down.
```py
4 // 2
```
>➡️ 2

Why is it an int here?

Both operands are integers. Result is an integer

But watch this:
```py
4.0 // 2
```
>➡️ 2.0

and:
```py
4 // 2.0
```
>➡️ 2.0

So again:

**If any operand is float → result is float**

## input 
```py
age=int(input("Enter your age:"))
print(age,type(age))
```

## common errors
```py
result="Hello" + 5
 
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
Cell In[12], line 3
      1 ## common errors
----> 3 result="Hello" + 5

TypeError: can only concatenate str (not "int") to str

```
```py
result="Hello" + str(5)
print(result) #Hello5
```
## string formating 

```py
name = "JO"
lname= "JO"
print("HI "+ name + " " + lname) #HI JO JO
print(f"HI {name} {lname}, I hope you are learning.") #HI JO JO, I hope you are learning.

##-2
sentence = "HI {} {}, I hope you are learning."
print(sentence.format(name, lname)) #HI JO JO, I hope you are learning.
```

## Lists
```py
int_list = [1,2,3,4]
print(len(int_list)) #4
print(int_list[2]) #3

int_list.append(7) # append 7 to the last
print(int_list) #[1, 2, 3, 4, 7]

int_list.pop(3) #pop at index 3
print(int_list) #[1, 2, 3, 7]

int_list.remove(2) #removes the value 2
print(int_list) #[1, 3, 7]
```