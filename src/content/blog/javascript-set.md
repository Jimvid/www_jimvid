---
title: Javascript Sets
description: The Set object is an unordered collection of unique values. It allows you to store any type of value, whether it be primitive data types or object references.
date: Jun 4, 2023
image: ''
tags: ['Javascript', 'Fundamentals']
---

The **`Set`** object is an unordered collection of unique values. It allows you to store any type of value, whether it be primitive data types or object references. Unlike arrays, **`Set`** does not maintain any particular order, and each value can occur only once within a **`Set`** instance.

To create a **`Set`**, we simply invoke the **`Set`** constructor without any arguments. Here's an example:

```tsx
const mySet = new Set();

// Add to the Set
mySet.add(1);
mySet.add('Hello');
mySet.add({ name: 'John', age: 25 });

// Remove from the Set
mySet.delete('Hello');

// Remove all values
mySet.clear();

// Check if it contains a value
mySet.has(1); // returns true
mySet.has('Hello'); // returns false (after deletion)

// Length of the Set
mySet.size;
```

One of the advantages of the **`Set`** object is its iterable nature. You can easily iterate through the values using loops or iterable methods, such as **`forEach`**, `**filter**`, and **`map.`** Here's an example:

```tsx
mySet.add(1);
mySet.add(2);
mySet.add(3);

mySet.forEach((value) => {
	console.log(value);
});

// Output:
// 1
// 2
// 3
```

The **`Set`** object has various applications in JavaScript. Here are a few common scenarios where it proves beneficial:

With **`Set`**, you can effortlessly remove duplicate values from an array by converting it into a **`Set`** and then back into an array.

It is efficient to check if a value exists in a **`Set`** without the need for additional looping or complex logic.

The **`Set`** object can be utilized to implement custom data structures such as stacks, queues, or linked lists.
