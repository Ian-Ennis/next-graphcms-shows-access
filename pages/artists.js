import Layout from '@c/Layout'
import { Grid, Card } from '@c/Grid'
import { Title } from '@c/Title'
import { getAllArtists }from "@l/graphcms";

export default function Artists({ data }) {
  return (
    <Layout title="next-graphcms-artists / Artists">
      <Title>Artists</Title>
      <Grid>
        {data.map((artist) => (
          <Card href={`/artist/${artist.slug}`} header={artist.fullName} key={artist.id}>
          </Card>
        ))}
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps() {
    const data = (await getAllArtists()) || [];
    return {
        props: { data} ,
    }
}