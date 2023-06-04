---
title: REM and EM - What is it anyway?
date: Sep 20, 2021
description: Both rem and em are flexible and scalable units of measurement unlike the px unit. Both em and rem are translated by the browser into pixel values, depending on the font size you set for your design.
tags: ['CSS']
---

Both rem and em are flexible and scalable units of measurement unlike the px unit. Both em and rem are translated by the browser into pixel values, depending on the font size you set for your design. The difference between em and rem is how the browser translate the unit into pixels. Understanding this difference is key to determining when to use each unit.

## How rem works

When the browser translate rem into pixel it depends on the font size of the page’s root element, the html element. That font size is multiplied by whatever number you’re using with your rem unit.
For example, with a root element font size of 20px, 10 rem would equal 200px (10 x 20 = 200).

```
html {
  font-size: 20px;
}

.rem {
  padding: 10rem; /* this equals 200px (10 x 20 = 200) */
}
```

## How em works

When using em units, the pixel value you end up with is the font-size of the element you are styling. For example, if a div has the font size of 20px, 10em would equate to 200px (10 x 20 = 200).

```
.em {
  font-size: 20px;
  padding: 10em; /* this equals 200px (10 x 20 = 200) */
}
```

## Em and the effect of inheritance.

It is a somewhat widespread misconception that em units are relative to its parent although the element can inherit font size which in turn affect the em value. This happens solely because of inheritance.

Working with em can be somewhat tricky when it comes to inheritance because every element inherits the font size of the parent which can only be overridden by explicitly setting a font size with either px or vw/vh.

Important to know:
The root html element inherits its font size from the browser settings unless it’s overridden with explicitly set value. This means that the browser settings can effect the value of every rem used in a design as well as any em unit via inheritance.

## Why you should use rem

The great thing with rem is that it offers consistent sizing regardless of element inheritance. Rem give us a way to use the font size settings in the browser to influence every single aspect of a site’s layout. For this reason the primary purpose for using rem units is to ensure that whatever default font size a user has their browser set to, the layout will adjust to accommodate the size of the text within it.

## Why you should use em

The key value of the em unit is that they allow sizing values to be determined by a font size other then that of a html element. Therefore the primary purpose of em units is to allow for scalability within the context of a specific element or component. It is very important to not let the em units get out of hand, for this reason I think that the em unit only should be used if you can identify a clear need for them.

I would not recommend to use em on font sizes, it can easily get out of hand and display different sizes when it should not. More often than not we would not want our font sizes to scale based on any other element then the root.

## Conclusion

So, should you use rem or em? I think that they both have their strengths and weaknesses. The best balance in my opinion is to use them together to make simple, modular components that scale easily
