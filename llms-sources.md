---
permalink: /llms-sources.md
layout: null
llm_exclude: true
---
# LLM Source Export for {{ site.title }}
_Generated {{ site.time | date: '%Y-%m-%d %H:%M:%S %z' }}_

{% assign resources = site.pages | concat: site.services | concat: site.districts | concat: site.guides %}
{% assign filtered = resources | where_exp: 'item', "item.llm_exclude != true" %}
{% assign sorted = filtered | sort: 'url' %}
{% for resource in sorted %}
## {{ resource.title | default: resource.url }}
**Path:** {{ resource.url | relative_url }}
**Updated:** {{ resource.date | default: site.time | date: '%Y-%m-%d' }}

{{ resource.content | strip_html | strip_newlines | replace: '  ', ' ' }}

---
{% endfor %}
