---
title: Agentic coding and the inevitable detail of making software
date: 2025-09-05 12:24
type: fragment
---
I grapple with how to transition from doing hands-on dev (what I’ve done so far), via using an agentic LLM as an assistant responding to very specific instructions, but still being one in charge (what I’m currently doing), to merely providing specs and tests.

There’s just so much detail in making software. And I see no way around that. This means we need very detailed specs and very detailed tests.

With human devs, the details surface as we implement things – some of which can be resolved on our own, but many requiring discussion and collaboration to figure out and decide how things should work.

Also with human devs, there’s a tradeoff in the level of detail. It’s usually faster (at least I believe so) to not try to get every detail right, but to begin implementation and uncover which details matter enough to decide collaboratively. It pays off to start early and let the design evolve – both the internal (code/architecture) and external (UI/UX).

In the future, when we’ll spec and test and let LLMs do much of the work, we’ll be able to iterate on functioning code. So maybe there’s some kind of tradeoff here as well – where we let specs be at a lower level of detail, and figure things out along the way.

But I can’t yet quite see for myself what that will look like.

As for tests, they have needed to be quite detailed – of course depending on context – but I have a sense that this will change as well. And I can’t yet imagine how.
