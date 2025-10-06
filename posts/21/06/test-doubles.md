---
title: En mock är inte en mock
date: 2021-06-03 08:47
type: fragment
original: https://twitter.com/plindberg/status/1400343460960407555
lang: sv
---
Det är vanligt att kalla alla slags test doubles för mocks. Jag upplever att man nästan uteslutande menar stubs. En mock är en stub som dessutom har förväntningar om hur andra entiteter ska interagera med den, som alltså kan faila testet om dessa inte uppfylls.

Mock, stub och fake har förvisso som ord inga nyanser som hjälper en att avgöra vad som är vad. Spy och eventuellt även dummy har lite mer ”metaforisk höjd”. ”Att mocka” kanske ligger bättre i munnen.

Men det är synd att inte ha alla orden till hands i diskussion. Att säga mock om en dummy förlorar aspekten att det är något som inte har betydelse för testet, utan bara för att alls kunna sätta upp testet.

Att säga mock om stub är väl egentligen inte så farligt i ett sammanhang där man aldrig använder mock-tekniken, vilket ofta är fallet.
