---
title: My simple CSS styleguide
date: Dec 29, 2022
description: This is the styleguide I use when i write CSS. It's something I put together as a way too comfortably write modular, scalable and maintainable CSS.
tags: ['CSS']
image: ''
---

This is the styleguide I use when i write CSS. It's something I put together as a way too
comfortably write modular, scalable and maintainable CSS. I have taken a lot of inspiration from other
methodologies like SMACSS, BEM and OOCSS but is striving to be simpler and a bit more general.

You can find the repo on [github](https://github.com/Jimvid/css-style-guide) or read it here.

## Base rules

Base rules are styles applied using an element, decendant or child selector along with any psuedo-classes.
It should not include any class or id selectors. Base rules include setting heading sizes, default link and
styles and body background.

Example of a base rule:

```css
button {
	min-width: 120px;
	font-size: 1.25rem;
}
```

## CSS resets

A CSS reset is a set of base styles designed to remove and level the playfield so that all browsers
act the same (within reason ofcourse). I usually make use of [modern normalize](https://github.com/sindresorhus/modern-normalize)
but there are a lot of other alternatives.

## Layouts

For convention, the css styles **only** used for layout purposes must use the `.layout-*` or `.l-*` namespace.
Layout class names should also use camelCase. Layouts can also be divided into smaller pieces based on reuse.

Example of a large layout of a blogpost with two properties, sidebar and content:

```css
.layout-blogPost {
	display: grid;
	grid-template-areas: 'content sidebar';
	grid-template-columns: 1fr 375px;
}

.layout-blogPost-sidebar {
	grid-area: sidebar;
}

.layout-blogPost-content {
	grid-area: content;
}
```

```html
<section class="layout-simple">
	<nav class="layout-simple-navigation">...</nav>
	<main class="layout-simple-content">...</main>
</section>
```

Reusable example would look something like this:

```css
.layout-column {
	display: flex;
	flex-direction: column;
}
```

## Modules

A module is more of a minor or descrete component compared to layouts. An exmaple of this is cards, carousels,
progressbars and so on. Modules sits inside of layouts and make up the bulk of the page. Modules are defined with
classes, never IDs. Modules names must be written in with camelCase and should try to avoid styling element selectors.

Module example:

```css
/* Module name with single word */
.article {
	/* module styles */
}

/* Module name with multiple words */
.articleCarousel {
	/* module styles */
}
```

The module may have any number of properties and subproperties. The properties are
joined together with a `-` and must also be written in camelCase.

```css
.article {
	/* module styles */
}

.article-header {
	/* module property styles */
}

.article-header-title {
	/* module sub property styles */
}
```

A real world example of this would look something like this:

```html
<article class="article">
	<header class="article-header">
		<h1 class="article-header-title">Article title</h1>
	</header>
</article>
```

## Modifiers

A module or module property may have different kind of modifiers. Modifiers are used to change styles under
some context or status. Modifiers should as a rule of thumb never be used as standalone classes, they should always
be combined with a module or module property class name. Though some exceptions can be made if they
act the same for every module and module property.

Modifier classes must start with either `is-*` or `has-*`.

`is-*` modifier example:

```css
/* BAD */
.is-hidden {
	display: none;
}

/* GOOD */
.article.is-hidden {
	display: none;
}
```

`has-*` modifier example:

```css
/* BAD */
.has-video {
	width: 900px;
}

/* GOOD */
.article.has-video {
	width: 900;
}
```

## CSS & JS

The css classes can be used by javascript to select elements. To prevent conflict between css and js, the classes
used by javascript should not be used by css, and viceversa. Because that, there's the .js-\* namespace:

In all or most projects CSS classes will be used by JS to select elements. To avoid conflicts between CSS and JS the `js-*`
namsspace should be used. Classes with the `js-*` namespace should never be styled by CSS and JS should not change styles of any
CSS class.

```html
<article class="article js-popup">
	<h1>Hello world</h1>
</article>

<div class="js-popup">Other popup</div>
```

```javascript
document.querySelector('.js-popup').toggle();
```

However this does not mean JS can not use styling classes at all. It can for example be used to toggle different classes like modifiers:

```javascript
document.querySelector('.article').classList.add('has-sidebar');
```

## !important

This should be avoided at all costs. If nothing can be done about it and it has to be used a inline comment on
the same line explaining why it's there so it hopefully can be removed later on.

An example of this would look like this:

```css
.button {
	font-size: 12px !important; /* Overwrite default font-style from bootstrap button */
}
```

## Imports

In order to avoid problems with the selectors priority, the main css file should import the nested
css files in the following order:

- normalize
- variables
- base
- layouts
- modules
- global modifiers
