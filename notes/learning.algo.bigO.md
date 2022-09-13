---
id: j9jpiepog4v2wpio08om6ng
title: Big O Notation
desc: ''
updated: 1650870764685
created: 1650870508413
---

- Numeric representation of performance of a code.
- helps us to generalise a code so that we can compare between 2 approaches and conclude which one is the best fit.(bad analogy but just like ritcher scale is for earthquake)

## Example

### Sum of a numbers till n
Approach 1: O(n)
```js
total =0;
for (i=0;i<=n;i++>){
 total +=n;
}
```
Better approach: O(1)
```js
const total = n * (n+1)/2;
```