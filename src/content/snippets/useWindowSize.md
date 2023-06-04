---
title: useWindowSize
date: Nov 9, 2021
description: Returns the size of the window (on load and resize)
tags: ['React', 'Typescript']
image: ''
---

This hook adds a resize event listener that then returns the width of the window.
Useful when we cannot achieve certain responsive layouts with CSS.

Not included in this snippet is the debounce function, you'll have to provide that yourself.

```javascript
import { useState, useEffect } from 'react';
import { debounce } from 'some/debounce/function';

// Hook
export function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined
	});

	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
			const vh = (window.top || window).innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}
		const debouncedHandleResize = debounce(handleResize, 300);

		// Add event listener
		window.addEventListener('resize', debouncedHandleResize);

		// Call handler right away so state gets updated with initial window size
		debouncedHandleResize();

		// Remove event listener on cleanup
		return () => window.removeEventListener('resize', debouncedHandleResize);
	}, []);

	return windowSize;
}
```
