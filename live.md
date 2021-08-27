---
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

## Welcome
This website describes a code assessment encapsulated in a realistic project. The aim of this website is to convey your assignment, identify the work you can choose from to complete the exercise, and help you get started with the project.

### next-graphcms-shows
The [project] is built with [Next.js] and utilizes a [GraphCMS] database to display fictional live music shows and artists. The project uses [styled-components] for styling the DOM. And it has a handful of [bugs and missing features](#issues), quite like real projects you'd find in the wild. Unlike most coding asssessments that test your ability to solve obtuse brain-teasers within a time limit, the aim of this assessment is to evaluate your approach to, prioritization of, and solving of these realistic issues in the context of a production application.

## The assignment
Nine [issues](#issues) within the project are documented on this website. In the live coding exercise, you'll be asked to work on one or more of these tasks as time allows.

Prior to the scheduled live coding session, we suggest that you mirror the base project (details in [Getting Started](#getting-started)) and review the [issues](#issues) documented here.

## Getting started
To get started, you're asked to duplicate the project without forking the base repository. This is to ensure that your work is protected from the eyes of others working on this assessment. Please have this mirrored repository ready before the scheduled live coding session. One way to mirror the repo in your own account (shown below as `your-github-user`):

1. Open a terminal
2. Create a temporary, bare clone of the base repository:
   ```
   $ git clone --bare https://github.com/CodevalApp/next-graphcms-shows.git
   ```
3. Create a new repository on your GitHub account, or within 
   an Organization you administer, e.g.:
   `https://github.com/your-github-user/next-graphcms-shows`
4. Back in terminal, mirror-push to the new repository:
   ```
   $ cd next-graphcms-shows
   $ git push --mirror https://github.com/your-github-user/next-graphcms-shows.git
   ```
5. Remove the temporary local repository you created in Step 2:
   ```
   $ cd ..
   $ rm -rf next-graphcms-shows
   ```
6. Clone your new, mirrored version of the repo, created in Step 3:
   ```
   $ git clone https://github.com/your-github-user/next-graphcms-shows.git
   ```

There are other means of mirroring a repo without your project being directly connected to the base. See GitHub's documentation on [duplicating a repository].

## Live coding session
Prior to the live coding session, please mirror the base repository, as documented in [Getting Started](#getting-started). We also recommend reviewing the issues below. You may familiarize yourself with the codebase, but we ask that you refrain from beginning any work before the session.

When the session begins, you'll be asked to configure the project, assigned a task, and given time to complete the task. The party who invited you to complete this assessment will be available to answer questions and, if needed, hints. If time allows, you're free to complete more than one task. Commit and push your work as you would under real-world conditions. When the live session is complete, please share your work with the assessor.

Some time will be reserved for final questions and comments.

## Issues
Below is a collection of issues for the project. Visit the issue pages for details, relevant screenshots, and acceptance criteria.

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

## Submitting completed work
When you've finished the live coding exercise, you should have a fresh repository (created in Step 3 [above](#getting-started)) with one or more resolved issues. That project should be one or more commits ahead of the base repo you mirrored (in Step 4 [above](#getting-started)). You'll need to share that repository with the party who invited you to complete this assessment.

### If your new repo is public
The simplest way! Just send a URL to your new GitHub repository to the individual/group who requested you complete this assignment.

### If your new repo is private 🔐
If it's private, the URL to your repo won't be enough. In that case, you'll need to invite the engineers who're assessing your work as collaborators. Obtain those engineers' GitHub usernames, and see GitHub documentation on [inviting collaborators to private repos](https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository).

[duplicating a repository]: https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/duplicating-a-repository
[project]: https://github.com/CodevalApp/next-graphcms-shows/
[Next.js]: https://nextjs.org/
[GraphCMS]: https://graphcms.com/
[styled-components]: https://styled-components.com/
