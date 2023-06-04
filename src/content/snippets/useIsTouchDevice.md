---
title: useIsTouchDevice
date: Jun 5, 2022
description: Check if the user is on a touch device or not.
tags: ['React', 'Typescript']
image: ''
---

A simple hook that check if the device has touch or not.

```javascript
import { useState, useEffect } from 'react';

export const useIsTouchDevice = () => {
	const [isTouchDevice, setIsTouchDevice] = useState(false);

	useEffect(() => {
		let hasTouchScreen = false;

		if ('maxTouchPoints' in navigator) {
			hasTouchScreen = navigator.maxTouchPoints > 0;
		} else {
			const mediaQueryList = window.matchMedia('(pointer:coarse)');
			if (mediaQueryList && mediaQueryList.media === '(pointer:coarse)') {
				hasTouchScreen = !!mediaQueryList.matches;
			} else {
				// Fall back to user agent
				const UA = window.navigator.userAgent;
				hasTouchScreen =
					/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
					/\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
			}
		}
		if (hasTouchScreen) {
			setIsTouchDevice(true);
		} else {
			setIsTouchDevice(false);
		}
	}, []);

	return isTouchDevice;
};
```
