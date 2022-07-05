import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import Layout from '@c/Layout'
import FlexyRow from '@c/FlexyRow'
import { Title } from '@c/Title'
import { getArtistBySlug } from '@l/graphcms'

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
    const img = images
    return (
      <ArtistPhoto imageUrl={img} />
    )
  }
  return null
}

export default function Artists({ artist }) {
  let webURL = artist.webUrl;

  if (!webURL.includes('https://')) {
    webURL = `https://${artist.webUrl}`
  }
  const facebookURL = artist.facebookUrl;
  const instagramURL = artist.instagramUrl;
  const youTubeURL = artist.youTubeUrl;
  const spotifyURL = artist.spotifyUrl;
  
  return (
    <Layout title={`${artist.fullName} / next-graphcms-artists`} maxWidth="900px" padding="0 2em">
      <Title>{artist.fullName}</Title>

          <Portrait images={artist.images[0].url} />

          <FlexyRow justify="flex-start">
            {webURL ? <a href={webURL} onClick={console.log(webURL)}target="_blank">Website</a> : null}
            {facebookURL ? <a href={facebookURL} target="_blank">Facebook</a> : null}
            {instagramURL ? <a href={instagramURL} target="_blank">Instagram</a> : null}
            {youTubeURL ? <a href={youTubeURL} target="_blank">YouTube</a> : null}
            {spotifyURL ? <a href={spotifyURL} target="_blank">Spotify</a> : null}
          </FlexyRow>

          <Markdown source={artist.bio} />
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
    const { slug } = params
    const artist = (await getArtistBySlug(slug))
    
    if (!artist) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { artist },
    }
  }