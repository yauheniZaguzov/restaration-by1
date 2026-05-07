# Articles Restore Plan

Project: restoration.by static site.

Goal: restore important article pages from the old WordPress site and fix `/stati/` so every article card opens its own URL.

## Progress Log

- Done: checked `/stati/` in the static project.
- Done: found that many article cards currently link back to `/stati/` instead of their own article pages.
- Done: checked the live `restoration.by` article section and found old working URLs.
- Done: confirmed the old WordPress database `restora3_wp6.sql` contains these article URLs.
- Done: user confirmed the article text source is the live page `https://restoration.by/stati/` and the linked article pages.
- Done: restored 12 missing article pages from the old WordPress database/export.
- Done: updated `/stati/` links to point to restored article pages.
- Done: checked restored article pages: files exist, H1 exists, canonical URLs are present.
- Done: fixed `/stati/` card/image links so restored article pages open in the same tab.
- Done: added a clean article-link block at the top of `/stati/` with 15 direct working links, bypassing old Elementor click-layer issues.
- Done: updated restored article pages with site-style menu, callback button, breadcrumbs, Open Graph and Twitter SEO fields.
- To do: check restored article pages on mobile after Vercel deploy.

## Important Article URLs To Restore

- `/zhidkij-akril-ecomix-obzor/`
- `/zhidkiy-mramor-ecovanna-premium/`
- `/vosstanovlenie-vanny-bez-snyatiya-sifona/`
- `/zachistka-vanny-bez-shlifmashiny/`
- `/ecovanna-lux-24/`
- `/zhidkiy-maramor/`
- `/nazdachka-dly-vann/`
- `/kak-pravilno-shlifovat-vannu/`
- `/kakovy-plyusy-i-minusy-restavraczii-vann/`
- `/restavraciya-vann-svoimi-rukami/`
- `/emalirovka-vann-svoimi-rukami/`
- `/restavracziya-vanny-bez-demontozha-sifona/`

## Already Present Static Article Pages

- `/nalivnaya-vanna-svoimi-rukami/`
- `/remont-skvoznyh-proboin-na-vannah-s-akrilovoj-poverhnostyu/`

## Notes

- Do not delete or hide these articles. They are important for SEO.
- The static project currently has article cards, but most cards do not have matching local pages yet.
- The old WordPress database is available at `C:\Users\Ivan\Documents\New project 5\restora3_wp6.sql`.
