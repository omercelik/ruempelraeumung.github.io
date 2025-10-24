# Rümpel Räumung – Jekyll Site

Dieses Projekt enthält die relaunchte Website von ruempelraeumung.at auf Basis von [Jekyll](https://jekyllrb.com/) und dem `github-pages` Gem. Das Setup folgt der Blueprint-Strategie für Marktführerschaft in Wien: Fixpreisgarantie, Wertausgleich und maximale Professionalität.

## Lokale Entwicklung

```bash
bundle install      # installiert github-pages + Plugins
bundle exec jekyll serve --livereload
```

> Hinweis: Passen Sie `url` und `baseurl` in `_config.yml` an (z. B. `baseurl: "/repo-name"` für Projektseiten auf GitHub Pages).

## Struktur

- `_layouts/` – Basistemplates (`home`, `page`, `service`, `guide`)
- `_includes/` – Header, Footer, Sticky-CTA, Anfrageformular & Structured Data
- `_data/` – Navigationspunkte, Services, Trust-Bar, FAQ, Testimonials usw.
- `_services/`, `_districts/`, `_guides/` – Collections für Leistungen, Bezirke und Ratgeberartikel
- `assets/` – Custom CSS/JS (Tailwind kommt via CDN für schnelles Prototyping)
- `robots.txt`, `sitemap.xml`, `feed.xml` – werden automatisch generiert (Plugins)

## Inhalte pflegen

Neue Leistungen, Bezirke oder Ratgeber lassen sich als Markdown-Dateien in den jeweiligen Collections anlegen. Front-Matter Felder wie `highlights`, `checklist`, `process` und `faqs` sorgen dafür, dass alle Seiten automatisch strukturierte Daten und SEO-relevante Elemente erhalten.

### Ratgeber-Beiträge (`_guides/`)

1. Legen Sie eine Datei nach dem Schema `_guides/YYYY-MM-DD-slug.md` an.
2. Pflichtfelder im Front Matter: `title`, `description`, `category`, `tags`, sowie optional `faqs` oder `takeaways`.
3. Die Übersicht unter `/ratgeber/` zieht automatisch alle Beiträge; kein manueller Linklisten-Pflegeaufwand.

### Leistungen (`_services/`) & Bezirke (`_districts/`)

1. Jeder Service/District erhält eine eigene Markdown-Datei mit `kicker` (Kategorie), `description`, `highlights`, `checklist`, `process` und `faqs` nach Bedarf.
2. Die Seite `/leistungen/` gruppiert Services anhand des `kicker`-Werts (`Privat`, `Gewerblich`, `Spezialfall`). Neue Dateien erscheinen dort automatisch.
3. Bezirksseiten nutzen denselben `service`-Layout-Typ, damit Quote-Formular, Prozess und Schema-Auszeichnung konsistent bleiben.

### Datenquellen

- Navigationspunkte, Testimonials, Trust-Bar und Icons liegen in `_data/`. Änderungen dort wirken global.
- Kontaktinformationen (Telefon, Adresse, Öffnungszeiten) werden über `_config.yml` gepflegt und landen automatisch in Kopf-/Fußbereich sowie im Structured Data.

## LLM / AI Nutzung

- `llms.txt` – hierarchische Inhaltsübersicht + Nutzungsrichtlinien für KI-/LLM-Crawler. Wird automatisch bei jedem Build generiert.
- `llms-all.txt` – Plain-Text-Export aller Markdown-Seiten (Pfad, Aktualisierungsdatum, kompletter Inhalt). Ideal für Crawler, die Rohtext benötigen.
- `llms-sources.md` – alternative Markdown-Ausgabe derselben Inhalte.
- `robots.txt` verlinkt auf beide Dateien, damit Crawler sie automatisch entdecken.
- Wenn Sie neue Guides oder Services veröffentlichen, passen Sie das Änderungsdatum in `llms-all.txt` an, damit LLM-Anbieter wissen, dass die Inhalte aktuell sind.

## Deployment

1. Repository auf GitHub pushen.
2. Unter *Settings → Pages* `GitHub Actions` oder `Deploy from branch` aktivieren.
3. Sicherstellen, dass `github-pages` Gem regelmäßig aktualisiert wird (`bundle update github-pages`).
4. Optional: Custom Domain + SSL konfigurieren.

Viel Erfolg beim Relaunch!
