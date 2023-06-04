---
title: Introduction to Sass & SCSS
date: Feb 14, 2020
description: Sass is a superset of CSS that makes it possible to use variables, nesting, operators, inheritance and mixing among other things to style your websites and apps.
tags: ['CSS']
image: ''
---

What is Sass? Sass is a superset of CSS that makes it possible to use variables, nesting,
operators, inheritance and mixins among other things to style your websites and apps.

Sass support two different types of syntaxes. Each one can load the other so it is
up to you to decide what to use. The first is known as SCSS (.scss), it's an extension of the CSS syntax.
This means that every single line of CSS is supported in the SCSS filetype.

SCSS syntax looks like this:

```css
.container {
	background: red;
}
```

```css
.container {
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		display: inline-block;
	}

	a {
		display: block;
		padding: 6px 12px;
		text-decoration: none;
	}
}
```

The second type of syntax is the older of the two and is called SASS (.sass).
This syntaxes uses indentation rather then brackets to indicate nesting of
selectors and new lines rather then semicolons to separate properties.

SASS syntax looks like this:

```sass
.container
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    padding: 6px 12px
    text-decoration: none
```

Before we head in to the coding part I want to make sure you don’t get confused by the different
filetypes, they are two different ways to write the same code. It all compiles down to plain CSS.
I prefer SCSS over Sass and I will be using the .scss syntax in this tutorial.

## Variables

Variables is a powerful way to change and write code quickly. When we define a variable we store a certain value in it, for example a hex code for a background-color or a border width. Accepted values for variables include numbers, strings, colors, null, lists and maps.

To declare a variable in sass you type $ followed by the name of the variable followed by a colon and then the value of that variable. Like this:

```css
$blue: #5452e3;
$padding: 8px 16px;

.primary-button {
	background-color: $blue;
	padding: $padding;
}
```

## Nesting

Nesting is one of my favourite feature of sass. Sass allow us to use css rules nested within one another. It is an amazing way to organize your code and contain all code for one component or element. Let’s look at an example of how powerful nesting can be:

```css
.primary-nav {
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	a {
		font-size: 14px;

		span {
			color: red;
		}
	}
}
```

## Extend/Inheritence

Inheritance is such an amazing and useful feature within sass, using **@extend** let’s us share sets of CSS properties from one to another. This is very useful when we need similar styled elements that still need to differ in some small detail. For example if you need one primary and one secondary button. They have the same core CSS but the secondary might have a different background color. Let us dive into an example:

```css
.button {
	box-sizing: border-box;
	color: #ffffff;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
	padding: 12px 40px;
	cursor: pointer;
}

.primary-button {
	@extend .button;
	background-color: #87bae1;
}

.secondary-button {
	@extend .button;
	background-color: #e4749e;
}
```

## Mixins

Mixins is another feature that reminds a little of inheritence/extension. With the use of **@include** mixins allow us to make groups of CSS declarations that we want to reuse for our website. A big difference is that we can pass down values to mixins. A great usage for mixins is if a property requires prefixes to work in all browsers.

```css
@mixin border-radius($property) {
	-webkit-border-radius: $property;
	-ms-border-radius: $property;
	border-radius: $property;
}

.primary-button {
	@include border-radius(20px);
}
```

## Conclusion

Thats a basic introduction to Sass! Sass in an incredible tool and helps us do some really amazing things and to make it a lot faster. The best part, it’s really easy to get going! Since it all compiles down to plain CSS, you can start with just using one feature at the time and then move on to the next. You don’t need to know everything about Sass to start out. Take it slow and learn in your own pace.

If you made it this far, thank you for reading!
