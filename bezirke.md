---
layout: default
title: "Entrümpelung in Wien & Umgebung"
description: "Alle Standortseiten von Rümpel Räumung – mit Fokus auf Wien und zusätzlichen Hubs in Niederösterreich & Burgenland."
permalink: /bezirke/
kicker: "Standorte"
---
<section class="bg-white py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-primary-accent">{{ page.kicker }}</p>
      <h1 class="mt-3 text-4xl font-black text-primary">Wien bleibt Kerngebiet – wir erweitern für Sie</h1>
      <p class="mt-4 text-lg text-text-light">
        Über 80&nbsp;% unserer Einsätze finden in Wien statt – deshalb bleiben dort Teams, Lager und Halteverbotsmaterialien stationiert. Für Kund:innen mit
        Objekten in Niederösterreich oder dem nördlichen Burgenland fahren dieselben Profis hinaus, damit Sie keine neuen Dienstleister suchen müssen. Wählen Sie
        Ihr Bundesland, entdecken Sie die jeweiligen Bezirksseiten und fordern Sie ein maßgeschneidertes Angebot an.
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
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-primary-accent">Bundesland wählen</p>
      <h2 class="text-3xl font-extrabold text-primary">Standort auswählen & Details öffnen</h2>
      <p class="text-base text-text-light">Zuerst Wien, dann Niederösterreich und Burgenland – innerhalb jedes Bundeslands finden Sie unsere Bezirks- und Regionsseiten.</p>
    </div>
    {% assign states = site.states | default: site.collections.states.docs %}
    {% if states == nil %}
    {% assign states = '' | split: '' %}
    {% endif %}
    {% assign states = states | sort: 'order' %}
    <div class="mt-10 grid gap-6 lg:grid-cols-3">
      {% for state in states %}
      {% assign locations = site.districts | where: 'state', state.slug | sort: 'title' %}
      <article class="flex h-full flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{{ state.kicker | default: 'Bundesland' }}</p>
          <h3 class="mt-2 text-xl font-bold text-primary">Entrümpelung in {{ state.title }}</h3>
          <p class="mt-2 text-sm text-text-light">{{ state.description }}</p>
          <ul class="mt-4 space-y-1 text-sm text-primary">
            {% for location in locations limit:3 %}
            <li>
              <a href="{{ location.url | relative_url }}" class="inline-flex items-center gap-1 hover:underline">
                <span>{{ location.title }}</span>
                <span class="material-symbols-outlined text-base">north_east</span>
              </a>
            </li>
            {% endfor %}
            {% if locations.size > 3 %}
            <li class="text-text-light">+ {{ locations.size | minus: 3 }} weitere Standorte</li>
            {% endif %}
          </ul>
        </div>
        <a href="{{ state.url | relative_url }}" class="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
          Bundesland-Seite öffnen
        </a>
      </article>
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
