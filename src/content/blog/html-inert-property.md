---
title: Html inert property
description: The 'inert' property is a boolean value that can be quite nifty for managing accessibility and user interactions.
date: Nov 17, 2023
image: ''
tags: ['Html', 'Fundamentals']
---

As of 2023, we finally have the 'inert' property fully supported in all major browsers (hurray!).
The 'inert' property is a boolean value that can be quite nifty for managing accessibility and user
interactions.

So, what exactly does the 'inert' property do? When you set an element to 'inert', you're
essentially making it non-interactive. This means that the browser will put an invisibility cloak over the element and its children. Users won't be able to click on, focus, or interact with any 'inert' elements,
they are also ignored by assistive technologies, like screen readers.

The 'inert' property is ideal for modals, as it disables interaction with background content and helps manage focus during keyboard navigation.

How do you use it? It's easy as pie! Simply slap an 'inert' attribute on the element, and both it and its children will be ignored.

```html
<div inert>
	<p>You cant select this text</p>
	<label>
		Nope! Can't edit me
		<input />
	</label>
	<button onclick="alert('Sup!')">Can't touch this!</button>
</div>
```

You can even style it in css!

```css
[inert] > * {
	opacity: 0.5;
}
```

Pretty cool huh? This addition to HTML is such a powerful tool!
