---
title: Insikt om git rebase
date: 2021-09-08 13:32
type: fragment
original: https://twitter.com/plindberg/status/1435566797722374145
lang: sv
---
Så git rebase är inget annat än en anonym branch skapad på toppen av det du vill rebasa din branch ovanpå, och därefter bara ett antal cherrypicks från nämnda branch – där din branch sedan resettas till den anonyma?

Insåg det när jag i en rebase av en lång branch klantade mig i mitten när jag löste konflikter: bara att göra git rebase --edit-todo och lägga tillbaka den tillklantade som en pick överst och resetta till HEAD^ och göra git rebase --continue.
