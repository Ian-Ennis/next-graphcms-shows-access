## Welcome
This website describes a code assessment encapsulated in a realistic project. The aim of this website is to convey your assignment, help you get started with the project, and identify the work you can choose from to complete the exercise.

### next-graphcms-shows
The [project] is built with [Next.js] and utilizes a [GraphCMS] database to display fictional live music shows and artists. The project uses [styled-components] for styling the DOM. And it has a handful of [bugs and missing features](#issues), quite like real projects you'd find in the wild. Unlike most coding asssessments that test your ability to solve obtuse brain-teasers within a time limit, the aim of this assessment is to evaluate your approach to, prioritization of, and solving of these realistic issues in the context of a production application.

## The assignment
Nine [issues](#issues) within the project are documented on this website. To complete this code assessment, you're asked to mirror the base project (details in [Getting Started](#getting-started)), resolve at least two of the [issues](#issues) documented here, and then provide access to your mirrored (not forked or cloned) repo containing your work.

Completing the minimum required work (mirroring the repo, resolving two issues, and sharing the finished work) is estimated to require 1-2 hours. Please complete the assignment within 48 hours of receiving it.

## Getting Started
To get started, you're asked to duplicate the project without forking the base repository. This is to ensure that your work is protected from the eyes of others working on this assessment. One way to mirror the repo in your own account (shown below as `your-github-user`):

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

## Issues
Issues are documented on the [Issues](https://codevalapp.github.io/next-graphcms-shows/issues/) page. Each issue includes a type (`Bug` or `Feature`), a numerical rating for effort (1 to 3), a description, and a set of acceptance criteria.

[duplicating a repository]: https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/duplicating-a-repository
[project]: https://github.com/CodevalApp/next-graphcms-shows/
[Next.js]: https://nextjs.org/
[GraphCMS]: https://graphcms.com/
[styled-components]: https://styled-components.com/

