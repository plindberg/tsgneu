---
date: 2023-09-23 09:33
type: fragment
title: Modules all the way down
original: https://twitter.com/plindberg/status/1704760690790080708
---
I think in some sense that the categories <em>front</em> and <em>back end</em> obscure the fact that it’s (or should be) modules all the way down.

Every part (module!) of the system should have boundaries as strong as those between front and back end. (For a moment ignoring that front and back ends don’t have strong enough boundaries.)

Every module should have integrity. Every module should keep some things to itself, thereby freeing other modules from having to concern themselves with those things.

It should be very clear which the responsibilities of a modules are, and which aren’t.

Are there really categories of responsibilities are wholly belong to either the front or back end?
