---
layout: default
title: "Entrümpelung in allen Wiener Bezirken"
description: "Alle Standortseiten von Rümpel Räumung auf einen Blick – inklusive direkter Links zu den jeweiligen Leistungen in Ihrem Bezirk."
permalink: /bezirke/
kicker: "Bezirke"
---
<section class="bg-white py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-primary-accent">{{ page.kicker }}</p>
      <h1 class="mt-3 text-4xl font-black text-primary">Alle Wiener Bezirke im Überblick</h1>
      <p class="mt-4 text-lg text-text-light">
        Jeder Bezirk stellt eigene Anforderungen – vom Halteverbot in der Inneren Stadt bis zu Hanglagen in Döbling. Auf dieser Seite finden Sie sämtliche
        Standortseiten mit lokalen Besonderheiten, Preisen und FAQ. Wählen Sie Ihren Bezirk und holen Sie sich direkt ein maßgeschneidertes Angebot.
      </p>
      <div class="mt-6 flex flex-col gap-3 sm:flex-row">
        <a href="{{ '/angebot/' | relative_url }}" class="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-light">
          Kostenloses Angebot anfordern
        </a>
        <a href="tel:{{ site.phone | replace: ' ', '' }}" class="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-base font-semibold text-primary hover:bg-primary/5">
          <span class="material-symbols-outlined mr-2 text-base">call</span>
          {{ site.phone }}
        </a>
      </div>
    </div>
  </div>
</section>
<section class="bg-background-light py-16">
  <div class="container mx-auto px-4">
    <div class="flex flex-col gap-3 text-center">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-primary-accent">Bezirk auswählen</p>
      <h2 class="text-3xl font-extrabold text-primary">Direkt zur passenden Entrümpelung</h2>
      <p class="text-base text-text-light">Sortiert nach Bezirksnummer – jede Karte führt auf eine eigene Landing Page mit Ablauf, Checkliste und FAQ.</p>
    </div>
    <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {% assign districts = site.districts | sort: 'title' %}
      {% for district in districts %}
      <a href="{{ district.url | relative_url }}" class="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-primary">
        <span>
          <span class="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{{ district.kicker }}</span>
          <span class="mt-2 block text-lg font-bold text-primary">{{ district.title }}</span>
        </span>
        <span class="material-symbols-outlined text-base text-primary">north_east</span>
      </a>
      {% endfor %}
    </div>
  </div>
</section>
<section class="bg-white py-16">
  <div class="container mx-auto px-4">
    <div class="grid gap-8 lg:grid-cols-2">
      <div class="space-y-4">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-primary-accent">Serviceversprechen</p>
        <h2 class="text-3xl font-extrabold text-primary">Fixpreis + Wertausgleich für jeden Bezirk</h2>
        <p class="text-base text-text-light">
          Egal ob Dachgeschoss am Spittelberg, Atelier in der Neubaugasse oder Villa in Grinzing – wir kombinieren lokale Logistik mit transparenten Preisen,
          kümmern uns um Halteverbotszonen und rechnen verwertbare Gegenstände an.
        </p>
        <ul class="space-y-2 text-sm text-text-light">
          <li>✔️ Kostenlose Besichtigung & schriftliches Angebot vor Ort</li>
          <li>✔️ Behördenwege & Halteverbotszonen inklusive</li>
          <li>✔️ Wertanrechnung für Antiquitäten, Technik oder Sammlungen</li>
          <li>✔️ Besenreine Übergabe mit Protokoll für Hausverwaltungen</li>
        </ul>
      </div>
      <div class="rounded-3xl bg-background-light p-8 shadow-xl">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-primary-accent">Schnelle Anfrage</p>
        <h3 class="mt-3 text-2xl font-extrabold text-primary">Noch nicht sicher, welcher Bezirk passt?</h3>
        <p class="mt-2 text-sm text-text-light">
          Beschreiben Sie kurz Ihr Objekt – wir ordnen es zu und melden uns mit einem Terminvorschlag.
        </p>
        <div class="mt-6">
          {% include quote-form.html %}
        </div>
      </div>
    </div>
  </div>
</section>
