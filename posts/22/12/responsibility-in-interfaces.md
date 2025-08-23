---
date: 2022-12-08 22:03
type: fragment
title: Responsibility in interfaces
original: https://twitter.com/plindberg/status/1600959232366419968
---
If you create an interface, be it a function or an API endpoint, you have two options for the inputs it takes. You can be strict, and then it’s the callers’ responsibility to prepare the inputs in an exact way. Or you can be loose, and then it is your responsibility to normalise.

Being strict means it’s your responsibility to reject every incorrect input. You can still reject things if you are loose, but for that which you don’t reject you have to be strict about shaping the input in the way the caller would have done if you had been strict.
