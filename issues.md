---
title: "Issues"
permalink: /issues/
issues:
  - id: 1
    title: Create show list (not grid) view
    type: Feature
    effort: 3
  - id: 2
    title: Page / 404 page for `shows`
    type: Bug
    effort: 2
  - id: 3
    title: Add ability to sort shows
    type: Feature
    effort: 2
  - id: 4
    title: Artist website URLs without http(s) are broken
    type: Bug
    effort: 1
  - id: 5
    title: Conditionally show artist URLs
    type: Bug
    effort: 1
  - id: 6
    title: Add `spotifyUrl` to list of Artist links
    type: Feature
    effort: 1
  - id: 7
    title: Add Artist route
    type: Feature
    effort: 3
  - id: 8
    title: Shows uniform display on mobile
    type: Bug
    effort: 1
  - id: 9
    title: Shows page is stupid-wide, not centered
    type: Bug
    effort: 1
---

### [Home]({{ site.baseurl }}) > Issues

Below is a collection of issues for the project. Visit the issue page for details, relevant screenshots, and acceptance criteria. Choose 2 or more to work on in your fork.

<div class="header-row">
  <div>Title</div>
  <div>Type</div>
  <div>Effort (Fibonacci)</div>
</div>

<ul class="issues-list">
{% for issue in page.issues %}
    <li>
      <a href="{{ site.baseurl }}/issues/{{ issue.id }}" class="flex-row">
        <div>
          {{ issue.title }}
        </div>
        <div>
          {{ issue.type }}
        </div>
        <div>
          {{ issue.effort }}
        </div>
      </a>
    </li>
{% endfor %}
</ul>
