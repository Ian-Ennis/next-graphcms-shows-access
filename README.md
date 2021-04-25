# next-graphcms-shows
This is a [Next.js] project utilizing a [GraphCMS] database to display fictional live shows and artists. The project uses [styled-components] for styling the DOM.

## Getting Started

First, configure environment variables. Copy the contents of `.env.local.example` into a new file `.env.local`. These keys are for your use only.

The development server is configured to run on port `3001` by default. This can be changed in `package.json` by altering the `dev` script. To run the development server:

```bash
yarn dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`, for instance. The page auto-updates when you save the file.

## Data
The fictional data for this project is stored in [GraphCMS], a headless GraphQL-based content management system. An up-to-date listing of the important schemas, retrieved live via GraphQL introspection, is visible on the [Schemas](http://localhost:3001/schemas) page.

## Contributing
Issues are documented in the repository on GitHub. Each issue is tagged with a label such as `bug` or `feature`, along with a tag indicating estimated effort, such as `effort 3` for high effort.

## Project structure
The project follows typical [Next.js] structure. Reusable React components reside in the `./components` directory. Next.js [pages](https://nextjs.org/docs/basic-features/pages) are located in the `./pages` directory.

```bash
./
┣ components/
┃ ┣ Description
┃ ┣ Grid
┃ ┣ Layout
┃ ┗ Title
┣ lib/
┃ ┣ graphcms.js // Data retrieval functions
┃ ┗ utils.js // Utility functions
┣ pages/
┃ ┣ schema/
┃ ┃ ┗ [name].js // Dynamic route for individual schemas
┃ ┣ show/
┃ ┃ ┗ [slug].js // Dynamic route for individual shows
┃ ┣ _app.js
┃ ┣ _document.js
┃ ┣ index.js
┃ ┣ license.js
┃ ┣ readme.js
┃ ┣ schemas.js // List of important schemas
┃ ┗ shows.js // List of all shows
┗ public/
  ┗ favicon.ico
```

[Next.js]: https://nextjs.org/
[GraphCMS]: https://graphcms.com/
[styled-components]: https://styled-components.com/
