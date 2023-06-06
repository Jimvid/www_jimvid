---
title: Javascript Maps
description: JavaScript Map is an ordered collection of key-value pairs, where each key is unique. Unlike plain objects Maps allow any value, including objects, as keys and provide built-in methods for efficient data manipulation.
date: Jun 1, 2023
image: ''
tags: ['Javascript', 'Fundamentals']
---

JavaScript Map is an ordered collection of key-value pairs, where each key is unique. Unlike plain objects, Maps allow any value, including objects, as keys and provide built-in methods for efficient data manipulation. With Maps, we can associate values with specific keys, ensuring fast and reliable access to data. Let's look at an example:

```typescript
const fruitPrices = new Map();
fruitPrices.set('apple', 0.99);
fruitPrices.set('banana', 0.49);
fruitPrices.set('orange', 0.79);

console.log(fruitPrices.get('banana')); // 0.49

fruitPrices.delete('apple');
console.log(fruitPrices.has('apple')); // false

console.log(fruitPrices.size); // 2

fruitPrices.clear();
console.log(fruitPrices.size); // 0
```

So Maps are cool and all, but when should you use them? Let's explore some practical use cases where Maps shine:

Storing and retrieving data based on keys. They are ideal for handling complex data structures, dictionaries, or lookup tables, where key-value relationships play a crucial role.

Uniqueness guarantees that each key occurs only once, making them suitable for tracking unique items or ensuring data integrity.

They preserve the order of key-value pairs, making them useful for scenarios that require maintaining a specific order during iteration, such as maintaining the sequence of actions in an application.
