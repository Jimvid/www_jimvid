---
title: useFontsLoaded
date: April 28, 2022
description: Check when font files has been loaded
tags: ['React', 'Typescript']
image: ''
---

```javascript
import { useEffect, useState } from "react"

// Returns true if all fonts have been loaded, otherwise false.
export const useFontsLoaded = () => {
  const [isFontsLoaded, setIsFontsLoaded] = useState(false)

  useEffect(() => {
    // Need to set document as type any otherwise ts-lint will freak out,
    // it does not recognize the 'fonts' property.
    const fontFaceSet = (document as any).fonts
    fontFaceSet.onloadingdone = () => {
      setIsFontsLoaded(true)
    }
  }, [])

  return isFontsLoaded
}
```
