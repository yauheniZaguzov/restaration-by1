# City Pages Work Plan

Project: restoration.by static site.

Goal: improve only newly created city pages so they are not thin duplicate pages for Google. Existing indexed pages with restored old SEO must not be rewritten unless explicitly requested.

## Progress Log

- Done: created this working plan file.
- Done: identified indexed pages with old Rank Math SEO that should not be rewritten.
- Done: listed newly created city pages that need improvement.
- Done: added 35 additional city pages from `https://tmaster.by/goroda/`.
- Done: added links to the new cities on `/filialy/`.
- Done: checked `/filialy/` for duplicate city names and duplicate city URLs: no duplicates found.
- Done: checked `/filialy/` for broken city links: none found.
- Done: improved `/filialy/` city-link layout with `assets/css/filialy-page.css`.
- Done: extracted inline CSS into files under `assets/css/extracted/`.
- Done: added a unique first-screen city hero to priority pages: `/pinsk/`, `/novopolock/`, `/polock/`, `/slonim/`, `/smorgon/`, `/rechica/`, `/rogachev/`, `/pruzhany/`, `/postavy/`, `/fanipol/`.
- To do: improve priority city pages with FAQ and deeper internal linking.
- To do: decide whether weak template-like city pages should temporarily use `noindex`.

## Do Not Rewrite SEO

These pages had old Rank Math SEO in the WordPress database. Keep their old title, description, canonical, og and twitter SEO fields:

- `/molodechno/`
- `/gorki/`
- `/drogichin/`
- `/zhlobin/`
- `/kirovsk/`
- `/lepel/`
- `/mozyr/`
- `/svisloch/`
- `/slutsk/`

## New Pages To Improve

### First Batch

- Pinsk: `/pinsk/`
- Luninec: `/luninec/`
- Pruzhany: `/pruzhany/`
- Malorita: `/malorita/`
- Stolin: `/stolin/`
- Kopyl: `/kopyl/`
- Novopolock: `/novopolock/`
- Polock: `/polock/`
- Glubokoe: `/glubokoe/`
- Postavy: `/postavy/`
- Baran: `/baran/`
- Chashniki: `/chashniki/`
- Miory: `/miory/`
- Ostrovec: `/ostrovec/`
- Slonim: `/slonim/`
- Smorgon: `/smorgon/`
- Shchuchin: `/shchuchin/`
- Berezovka: `/berezovka/`
- Rechica: `/rechica/`
- Kalinkovichi: `/kalinkovichi/`
- Dobrush: `/dobrush/`
- Hoyniki: `/hoyniki/`
- Rogachev: `/rogachev/`
- Zhitkovichi: `/zhitkovichi/`
- Petrikov: `/petrikov/`
- Elsk: `/elsk/`
- Turov: `/turov/`
- Krichev: `/krichev/`
- Kostyukovichi: `/kostyukovichi/`
- Slavgorod: `/slavgorod/`
- Chausy: `/chausy/`
- Cherven: `/cherven/`
- Shklov: `/shklov/`

### Added From tmaster.by/goroda

- Beloozersk: `/beloozersk/`
- Belynichi: `/belynichi/`
- Braslav: `/braslav/`
- Buda-Koshelevo: `/buda-koshelevo/`
- Byhov: `/byhov/`
- Verhnedvinsk: `/verhnedvinsk/`
- Volozhin: `/volozhin/`
- Vysokoe: `/vysokoe/`
- Gancevichi: `/gancevichi/`
- Gorodok: `/gorodok/`
- David-Gorodok: `/david-gorodok/`
- Dzerzhinsk: `/dzerzhinsk/`
- Dubrovno: `/dubrovno/`
- Dyatlovo: `/dyatlovo/`
- Zelva: `/zelva/`
- Ivanovo: `/ivanovo/`
- Ive: `/ive/`
- Kamenec: `/kamenec/`
- Krasnopole: `/krasnopole/`
- Krugloe: `/krugloe/`
- Logoysk: `/logoysk/`
- Loev: `/loev/`
- Lyuban: `/lyuban/`
- Mikashevichi: `/mikashevichi/`
- Mstislavl: `/mstislavl/`
- Narovlya: `/narovlya/`
- Nesvizh: `/nesvizh/`
- Novolukoml: `/novolukoml/`
- Oshmyany: `/oshmyany/`
- Senno: `/senno/`
- Skidel: `/skidel/`
- Tolochin: `/tolochin/`
- Fanipol: `/fanipol/`
- Cherikov: `/cherikov/`
- Chechersk: `/chechersk/`

## Priority Start List

Start improving these first:

1. `/pinsk/`
2. `/novopolock/`
3. `/polock/`
4. `/slonim/`
5. `/smorgon/`
6. `/rechica/`
7. `/rogachev/`
8. `/pruzhany/`
9. `/postavy/`
10. `/fanipol/`

## Improvement Rules

For every new city page:

- Keep the page design based on the home page.
- Make the first screen text unique for the city.
- Keep title, description and keywords unique with the city name.
- Add a local block: "Работаем в городе и рядом" with nearby towns.
- Add 2-3 city-specific FAQ questions.
- Link to nearby city pages and core service pages.
- Do not claim city-specific photos unless real photos are available.
- If a page remains template-like, consider adding `noindex` until improved.

## Current Technical Notes

- `/filialy/` has links to all city pages.
- No duplicate city names or duplicate city URLs were found on `/filialy/`.
- No broken city links were found on `/filialy/`.
- Inline CSS was extracted into `assets/css/extracted/`.
- `/filialy/` has its own styling in `assets/css/filialy-page.css`.
