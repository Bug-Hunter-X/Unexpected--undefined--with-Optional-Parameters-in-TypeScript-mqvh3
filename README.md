# Unexpected 'undefined' with Optional Parameters in TypeScript

This example demonstrates a subtle difference in how TypeScript handles optional parameters. When an optional parameter is omitted, it's automatically assigned the value `undefined`, which might not always align with the intended behavior.

## Bug

The `printName` function accepts an optional string parameter. When calling the function without an argument, the output is `undefined`.  Surprisingly, even explicitly passing `undefined` yields the same result. This might be unexpected for developers coming from other languages where omitting a parameter might produce different results.

## Solution

One approach is to use default parameters instead of optional ones.  Another is to check for undefined specifically.  In both cases, it is essential to understand the difference between an absent parameter and a parameter explicitly set to undefined.

## Additional Notes

Understanding the subtleties of optional parameters is critical when working with TypeScript. Be mindful of how the `undefined` value affects your function's behavior.