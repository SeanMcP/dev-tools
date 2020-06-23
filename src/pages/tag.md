---
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - all
    - examples
layout: base
renderData:
  title: Tagged “{{ tag }}”
permalink: /tag/{{ tag }}/
---

{% set examples = collections[tag] %}

{% for example in examples %}
- [{{ example.data.title }}]({{ example.url }})
{% endfor %}