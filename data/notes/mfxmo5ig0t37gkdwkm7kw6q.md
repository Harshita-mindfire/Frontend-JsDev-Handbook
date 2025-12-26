
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

## Dictionaries

```py
user_dict = {
    'username': 'iamjojo',
    'name': 'Jojo',
    'age': 28
}
print(user_dict) #{'username': 'iamjojo', 'name': 'Jojo', 'age': 28}
print(user_dict['name']) #Jojo

for x in user_dict:
    print(x)

'''
username
name
age
'''

for x in user_dict:
    print(user_dict[x])

'''
iamjojo
Jojo
28
'''

for x,y in user_dict.items():
    print(f"{x} : {y}")

'''
username : iamjojo
name : Jojo
age : 28
'''
```
### To make a clone(not sharing reference)
```py
user_dict2 = user_dict.copy()

user_dict2.pop("age") # pop the supplied key
print(user_dict2) #{'username': 'iamjojo', 'name': 'Jojo'}
print(user_dict) #{'username': 'iamjojo', 'name': 'Jojo', 'age': 28}

```

## functions
```py
def print_myname(name):
    print(name) #Jojo

print_myname("Jojo")

def add(a,b):
    return a+b

sol = add(12,3)
print(sol) #15

sol2=add(a=12,b=3) #different way of passing args
print(sol2) #15


def add10ToTheSum(a,b): 
    return 10+add(a,b)

print(add10ToTheSum(18,2)) #30
```