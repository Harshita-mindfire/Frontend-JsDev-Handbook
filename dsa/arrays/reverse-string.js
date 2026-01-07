function reverseStr(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== "string") return "error";

  const revStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    revStr.push(str[i]);
  }
  return revStr.join("");
}
const result = reverseStr("My Name is Jojo");
console.log(result);

// Time complexity: O(n)
// Space complexity: O(n)

// By JS predefined methods

/**
 
Each step processes all characters:
Time Complexity
- split(""): Iterates over the string to create an array of characters = O(n)
- reverse(): Reverses the array in place = O(n)
- join(""): Iterates over the array to build a new string = O(n)
Total time complexity: O(n)

Space Complexity
- Array from split("") → O(n)
- New string from join("") → O(n)
- reverse() is in-place → O(1) extra
Auxiliary space complexity: O(n)

| Aspect | Complexity |
| ------ | ---------- |
| Time   | **O(n)**   |
| Space  | **O(n)**   |

 */
function reverseStr1(str) {
  return str.split("").reverse().join("");
}
const result1 = reverseStr1("My Name is Jojo");
console.log(result1);

const reverseOneLineFn = (str) => [...str].reverse().join("");
console.log(reverseOneLineFn("Helloo My name is Jojo"));

