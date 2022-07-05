async function fetchAPI(query, variables = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
  const json = await res.json()

  if (json.errors) {
    console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID)
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

/**
 * Retrieve all artists via GraphQL
 */
export async function getAllArtists() {
  const data = await fetchAPI(
    `{
      artists(orderBy: fullName_DESC) {
        id
        fullName
        slug
      }

    }`
  )

  return data.artists
}

/**
 * Retrieve specific artist via GraphQL
 */
export async function getArtistBySlug(slug) {
  const data = await fetchAPI(
    `query ($slug: String!) {
      artist(where: {slug: $slug}) {
        id
        fullName
        images {
          url
        }
        webUrl
        facebookUrl
        instagramUrl
        youTubeUrl
        spotifyUrl
        bio
        slug
      }
    }`,
    { slug }
  )

  return data.artist
}

/**
 * Retrieve all shows via GraphQL
 */

/* Added feature: UI allows user to choose sort order. 
    I did this server-side, and used getServerSideProps to call 
    the respective fetch request functions that make their respective API calls below. 
    I'm still learning a couple of things about Next.js, and this was by brute-force approach
    just to get things functional. There are probably DRYer, more efficient ways to 
    accomplish this with fewer requests to the server. Ideally I could modify the orderBy: 
    method dynamically within the original getAllShows() function.
*/

export async function getAllShowsByStartTimeAsc() {
  const data = await fetchAPI(
    `{
      shows(orderBy: scheduledStartTime_ASC) {
        id
        title
        scheduledStartTime
        ticketPrice
        slug
        artists {
          fullName
          slug
        }
      }
    }`
  )

  return data.shows
}

export async function getAllShowsByStartTimeDesc() {
  const data = await fetchAPI(
    `{
      shows(orderBy: scheduledStartTime_DESC) {
        id
        title
        scheduledStartTime,
        ticketPrice
        slug
        artists {
          fullName
          slug
        }
      }
    }`
  )

  return data.shows
}

export async function getAllShowsByTitleAsc() {
  const data = await fetchAPI(
    `{
      shows(orderBy: title_ASC) {
        id
        title
        scheduledStartTime
        ticketPrice
        slug
        artists {
          fullName
          slug
        }
      }
    }`
  )

  return data.shows
}

export async function getAllShowsByTitleDesc() {
  const data = await fetchAPI(
    `{
      shows(orderBy: title_DESC) {
        id
        title
        scheduledStartTime
        ticketPrice
        slug
        artists {
          fullName
          slug
        }
      }
    }`
  )

  return data.shows
}

/**
 * Retrieve a specific show via GraphQL query
 */

// Added spotifyUrl 
export async function getShowBySlug(slug) {
  const data = await fetchAPI(
    `query ($slug: String!) {
      show(where: {slug: $slug}) {
        id
        title
        ticketPrice
        artists {
          id
          bio
          fullName
          facebookUrl
          instagramUrl
          youTubeUrl
          webUrl
          spotifyUrl
          images {
            url
          }
          slug
        }
        description
        genre
        scheduledStartTime
      }
    }`,
    { slug }
  )
  return data.show
}

/**
 * Retrieve certain schema by GraphQL query
 */
export async function getSchemaByName(name) {
  const data = await fetchAPI(
    `query ($name: String!) {
      __type(name: $name) {
        name
        fields {
          name
          description
          type {
            name
            kind
          }
        }
      }
    }`,
    { name }
  )
  return data['__type']
}
