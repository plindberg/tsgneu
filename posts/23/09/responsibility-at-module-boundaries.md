---
date: 2023-09-02 13:38
type: fragment
title: Responsibility at module boundaries
original: https://twitter.com/plindberg/status/1697937106159481258
---
A module can either accept or reject an input.

If it accepts it, that means accepting responsibility for it.

By rejecting it, that signals to the sending party that it is their responsibility to prepare the input in some other way, before sending it.

If the module accepts it, it is then responsible for transforming the input such that it can be processed.

The API should make clear what things will be accepted or rejected.

Anything that is not clear from inspecting the API will be left to exploration. And then there’s the risk that some variations aren’t found before release into the world. Then things will turn out to be rejected when they were expected to be accepted.

A module can choose to be very strict, which reduces the likelihood that such unexpected rejections happen in the wild.
