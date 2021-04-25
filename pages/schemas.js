import Layout from '@c/Layout'
import { Grid, Card } from '@c/Grid'
import { Title } from '@c/Title'

export default function Schemas() {
  return (
    <Layout title="next-graphcms-shows / Schemas" maxWidth="800px">
        <Title>Schemas</Title>

        <Grid>
          <Card href="/schema/Artist" header="Artist">
            <p>Table describing the schema for the Artist type.</p>
          </Card>
          <Card href="/schema/Show" header="Show">
            <p>Table describing the schema for the Show type.</p>
          </Card>
        </Grid>
    </Layout>
  )
}
