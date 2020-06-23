---
layout: base
title: Welcome
markdownTemplateEngine: 'njk'
---

_DevTools by Example_ is an interactive course for learning your browser's developer tools.

## Examples
<ol>
{% for example in collections.examples %}
<li>
    <a href="{{ example.url | url }}">{{ example.data.title }}</a> {% for tag in example.data.tags | tags %}<a class="tag" href="/tag/{{tag}}">{{ tag }}</a>{% endfor %}
</li>
{% endfor %}
</ol>