---
title: "HTML 📝"
layout: archive
permalink: categories/html
---


{% assign posts = site.categories.["HTML"] %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}