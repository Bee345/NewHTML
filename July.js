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




// Looping Backwards and looping In loop
1. Looping Backwards

Looping backwards means iterating through an array, list, or data structure from the last element to the first instead of the usual forward loop.

✅ Syntax Example (JavaScript)
const fruits = ["Apple", "Banana", "Mango", "Orange"];

// Looping backwards
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}

🔑 Why Loop Backwards?

Deleting elements from arrays: If you remove elements while looping forward, indices shift and you might skip elements. Looping backwards avoids that problem.

Reverse iteration: When you need data in reverse order (like showing the last messages first).

Performance in some cases: In some older environments, backward loops were slightly faster, though modern engines optimize both directions well.

📌 Real-Life Use Cases:

To-do list app → When deleting tasks dynamically from the list.

Game development → Iterating through enemies/objects from the last to the first for collision detection and deletion.

Chat application → Displaying messages in reverse chronological order.

Pagination → Showing newest posts first.

🔹 2. Looping in Loop (Nested Loops)

Nested loops mean placing one loop inside another. This allows you to work with multi-dimensional data structures or perform repetitive operations within other repetitions.

✅ Syntax Example (JavaScript)
// Multiplication table using nested loops
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

🔑 Why Nested Loops?

Multi-dimensional arrays: Useful when working with matrices (grids, tables, chess boards, pixels).

Comparisons: Compare every element with every other element.

Patterns and Shapes: Create stars, pyramids, or designs in programming.

Data processing: Useful in algorithms (sorting, searching, etc.).

📌 Real-Life Use Cases:

Matrix operations → Adding, multiplying, or transposing matrices in math-heavy apps.

Tic-tac-toe / Chess → Representing board games where rows & columns matter.

Pixel manipulation → Image editing apps where you loop over rows and columns of pixels.

Sorting & searching algorithms → Example: Bubble sort uses nested loops.

Pattern generation → Like generating tables, triangle patterns, calendars.

🔹 3. Combining Both

Sometimes you can use looping backwards with nested loops:

let numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Looping backwards through a 2D array
for (let i = numbers.length - 1; i >= 0; i--) {
    for (let j = numbers[i].length - 1; j >= 0; j--) {
        console.log(numbers[i][j]);
    }
}

🔹 4. Project Ideas to Practice

Here are some projects where these looping concepts shine:

📂 Looping Backwards:

Undo history app → Rewind user actions in reverse order.

Chat clone → Displaying messages starting from the latest.

Gallery viewer → Showing the last uploaded image first.

📂 Nested Loops:

Multiplication table generator.

Maze/Board generator → A random 2D map for a game.

Pixel art drawer → Using nested loops to color grids.

Sudoku solver/validator → Checking rows and columns.

Calendar generator → Displaying days in weeks and months.

📂 Combo Projects (Backward + Nested):

Reverse spiral matrix traversal (useful in puzzles).

Reversing a 2D leaderboard list → Show latest scores first, but per row.

File system viewer → Traversing folders and files in reverse order.
 */