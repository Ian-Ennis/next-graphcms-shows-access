import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import Layout from '@c/Layout'
import FlexyRow from '@c/FlexyRow'
import { Title } from '@c/Title'
import { getShowBySlug } from '@l/graphcms'
import { formatUSD, formatDate } from '@l/utils'

const Markdown = styled(ReactMarkdown)`
  img {
    width: 100%;
    border-radius: 20px;
    border: 4px solid currentColor;
  }
`

const ArtistName = styled.h2`
  text-align: center;
`

const ArtistPhoto = styled.div`
  background-image: url(${(p) => p.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 4px solid currentColor;
  margin: 0 auto;
`

const Portrait = ({ images = [] }) => {
  if (images.length > 0) {
    const img = images[0]
    return (
      <ArtistPhoto imageUrl={img.url} />
    )
  }
  return null
}


export default function Shows({ show }) {

  console.log("show:", show)
  
  let webURL = show.artists[0].webUrl;

  // Fixed bug: Artist website URL's without http(s) are broken
  if (!webURL.includes('https://')) {
    webURL = `https://${show.artists[0].webUrl}`
  }

  // Fixed bug: Conditionally show artist URLs
  const facebookURL = show.artists[0].facebookUrl;
  const instagramURL = show.artists[0].instagramUrl;
  const youTubeURL = show.artists[0].youTubeUrl;

  // Fixed bug: Add 'spotifyUrl' to list of Artist links (see graphcms.js)
  const spotifyURL = show.artists[0].spotifyUrl;
  
  return (
    <Layout title={`${show.title} / next-graphcms-shows`} maxWidth="900px" padding="0 2em">
      <Title>{show.title}</Title>

      <FlexyRow>
        <span>Price: {formatUSD(show.ticketPrice)}</span>
        <span>{formatDate(show.scheduledStartTime)}</span>
      </FlexyRow>

      <Markdown source={show.description} />

      {show.artists.map(artist => (
        <div key={artist.id}>
          <ArtistName>{artist.fullName}</ArtistName>

          <Portrait images={artist.images} />

          <FlexyRow justify="flex-start">
            {webURL ? <a href={webURL} onClick={console.log(webURL)}target="_blank">Website</a> : null}
            {facebookURL ? <a href={facebookURL} target="_blank">Facebook</a> : null}
            {instagramURL ? <a href={instagramURL} target="_blank">Instagram</a> : null}
            {youTubeURL ? <a href={youTubeURL} target="_blank">YouTube</a> : null}
            {spotifyURL ? <a href={spotifyURL} target="_blank">Spotify</a> : null}
          </FlexyRow>

          <Markdown source={artist.bio} />
        </div>
      ))}
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const { slug } = params
  const show = (await getShowBySlug(slug))

  //  Fixed bug: Page / 404 page for shows (see 404.js)

  if (!show) {
    return {
      notFound: true,
    }
  }

  return {
    props: { show },
  }
}
