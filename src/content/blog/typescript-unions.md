---
title: What are Unions in Typescript?
description: Unions, in TypeScript, refer to a type that can represent values of different types. It allows us to combine multiple types into one, providing flexibility in variable assignments and function parameters.
date: Jun 1, 2023
image: ''
tags: ['Typescript', 'Fundamentals']
---

Unions, in TypeScript, refer to a type that can represent values of different types. It allows us to combine multiple types into one, providing flexibility in variable assignments and function parameters. With unions, we can define a type that can hold various possibilities, catering to a range of scenarios and enabling type-safe operations on different types.

Let's illustrate the concept of unions with a simple example. Consider a function that takes either a string or a number as its parameter:

```tsx
function displayResult(result: string | number): void {
	console.log('Result:', result);
}

displayResult('Hello, TypeScript!'); // Result: Hello, TypeScript!
displayResult(42); // Result: 42
```

Unions find practical use in scenarios where a variable or a function parameter can accept multiple types. One such application is handling different data types in data processing or validation. For instance, let's imagine a function that formats and displays a user's name, which can be either a string or an array of strings:

```tsx
function formatAndDisplayUserName(name: string | string[]): void {
	if (typeof name === 'string') {
		console.log('User Name:', name);
	} else {
		const formattedName = name.join(' ');
		console.log('User Name:', formattedName);
	}
}

formatAndDisplayUserName('John Doe'); // User Name: John Doe
formatAndDisplayUserName(['John', 'Doe']); // User Name: John Doe
```

Here, the function **`formatAndDisplayUserName`** can handle both a single string and an array of strings for the **`name`** parameter. It uses conditional logic to adapt its behavior based on the provided type.
