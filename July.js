// This Below Is For The Continuation Of Our Classes
/** 
 * Looping Arrays, Breaking and Continuing

When working with arrays in JavaScript, looping is one of the most important concepts because it allows you to access, modify, or process each item inside an array. Sometimes, you may also need to skip certain iterations or stop a loop early. That’s where break and continue come in.

🔹 1. Looping Through Arrays

There are several ways to loop through arrays in JavaScript:

(a) for loop

The traditional for loop gives you full control over the iteration (starting point, condition, and step).

let fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // prints each fruit
}


👉 Here:

i = 0 → start index

i < fruits.length → condition to keep looping

i++ → increment by 1 after each iteration

(b) for…of loop

Simpler syntax for iterating directly over values of an array.

for (let fruit of fruits) {
  console.log(fruit);
}


👉 No need to deal with indexes.

(c) forEach() method

Built-in array method that runs a callback for each element.

fruits.forEach(function(fruit, index) {
  console.log(index, fruit);
});


👉 Pros: clean syntax
👉 Cons: you cannot use break or continue with forEach.

(d) while loop

Useful when the number of iterations is not fixed.

let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

🔹 2. Breaking Out of Loops

The break statement stops the loop entirely when a certain condition is met.

Example:
let numbers = [1, 2, 3, 4, 5, 6];

for (let num of numbers) {
  if (num === 4) {
    console.log("Found 4, stopping loop.");
    break; // exits the loop immediately
  }
  console.log(num);
}


👉 Output:

1
2
3
Found 4, stopping loop.


⚡ break is powerful when searching for something — once found, you don’t need to continue looping.

🔹 3. Continuing in Loops

The continue statement skips the current iteration and moves to the next one.

Example:
let numbers = [1, 2, 3, 4, 5, 6];

for (let num of numbers) {
  if (num % 2 === 0) {
    continue; // skip even numbers
  }
  console.log(num);
}


👉 Output:

1
3
5


⚡ continue is useful when you want to ignore some elements but still finish the loop.

🔹 4. Combining Looping, Break, and Continue

You can combine these to make loops very powerful:

let scores = [45, 60, 85, 90, 30, 100];

for (let score of scores) {
  if (score < 50) {
    console.log("Skipping score:", score);
    continue; // ignore scores below 50
  }
  if (score === 100) {
    console.log("Perfect score found! Stopping.");
    break; // stop after finding 100
  }
  console.log("Valid score:", score);
}


👉 Output:

Skipping score: 45
Valid score: 60
Valid score: 85
Valid score: 90
Skipping score: 30
Perfect score found! Stopping.

🔹 5. When to Use Each

✅ Use for when you need indexes or want full control over iteration.

✅ Use for…of when you just need values in a simple way.

✅ Use forEach() when you want concise iteration and don’t need to break/continue.

✅ Use break when you want to stop looping entirely once a condition is met.

✅ Use continue when you want to skip some elements but still loop through the rest.

🎯 Quick Summary

Looping arrays → lets you process each element.

break → stops the loop completely.

continue → skips the current iteration and moves to the next.

for, for…of, while, forEach → different looping techniques for different use cases.
 */