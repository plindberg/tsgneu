---
name: maigret-ledger
description: Add a finished Georges Simenon Maigret novel to the Maigret dossier at dossiers/maigret-novels-read.html. Use when the user says they've finished or read a Maigret novel, or asks to update the Maigret ledger, dossier, or reading list.
---

# Updating the Maigret ledger

The ledger is the `<ul>` in `dossiers/maigret-novels-read.html`. One `<li>` per novel,
sorted by original French publication year.

## What you need

Five facts per entry: Swedish title, translator, Swedish publication year, French title,
French publication year. The user usually supplies them in roughly that order, e.g.
"Maigret på hotell Majestic, tr Kerstin Hallén 1978; Les caves du Majestic 1942".

If a fact is missing, ask rather than guess — these are bibliographic details, and a wrong
translator or year is worse than a delayed entry. (One entry, *Pietr the Latvian*, was read in
English instead; there the "Swedish" fields hold the English title and translator. Same shape.)

## Steps

1. **Check it isn't already listed.** Grep the file for the French title — an entry that was
   already there has been asked for before. If it's present, say so and stop; don't restate or
   reformat the line.

2. **Insert the `<li>`** in the right place, indented two spaces:

   ```html
     <li><cite class="not-italic">SWEDISH TITLE</cite> (tr. TRANSLATOR, SWEDISH YEAR; <cite class="not-italic">FRENCH TITLE</cite>, FRENCH YEAR)
   ```

   No closing `</li>` — the file omits them throughout. Use curly apostrophes (`’`, U+2019)
   in titles: `Maigret au Picratt’s`, not `Picratt's`.

3. **Sort by French year**, ascending — the last field on each line, not the Swedish year.
   Within a shared year, use the novels' actual original publication order; if you can't
   establish it, place the new entry after the existing ones for that year.

4. **Translator name:** full name on that translator's first appearance in the list,
   surname alone afterwards — "tr. Gunnel Vallquist, 1953" then "tr. Vallquist, 1952".
   A couple of existing lines repeat the full name instead; leave them as they are rather
   than tidying up unrelated entries.

5. **Bump the front-matter `date:`** to now, which resurfaces the dossier in the site's
   chronological collection. Format is `yyyy-MM-dd HH:mm` in **Europe/Stockholm** — the
   container clock is UTC, so get it with:

   ```
   TZ=Europe/Stockholm date "+%Y-%m-%d %H:%M"
   ```

6. **Verify the build** with `npm run build`. It should complete without errors.

7. **Commit** as `Add SWEDISH TITLE to Maigret ledger`. Push only to the branch the session
   designates, and only open a PR if the user asks.

## Out of scope

Quote posts under `posts/` (front matter with `type: quote` and a `sourceWork:`) are a
separate thing — finishing a novel doesn't imply one. Add a quote post only when asked.
