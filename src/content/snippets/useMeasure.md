---
title: useMeasure
date: Sep 4, 2022
description: Measure an elements position and size.
tags: ['React', 'Typescript']
image: ''
---

A hook that creates a resize observer and then returning the bounds of the element.

```javascript
import React from "react"

interface UseMeasure {
  ref: any
  bounds: Bounds
}

interface Bounds {
  left: number
  top: number
  width: number
  height: number
}

export const useMeasure: () => UseMeasure = () => {
  const ref = React.useRef() as React.MutableRefObject<undefined>
  const [bounds, setBounds] = React.useState<IBounds>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  })

  const [resizeObserver] = React.useState(() => {
    return new ResizeObserver(([entry]) => {
      return setBounds(entry.contentRect)
    })
  })

  React.useEffect(() => {
    if (ref.current) resizeObserver.observe(ref.current!)
    return () => resizeObserver.disconnect()
  }, [resizeObserver, ref])

  return { ref, bounds }
}
```
