import styled from 'styled-components'
import Layout from '@c/Layout'
import { Title } from '@c/Title'
import { getSchemaByName } from '@l/graphcms'
import { sortByProperty } from '@l/utils'

const Table = styled.table`
  border: 1px solid white;
  border-radius: 5px;
  margin-bottom: 2em;

  thead,
  tr:nth-child(even) {
    background: rgba(255, 255, 255, 0.25);
  }
  thead > tr > th {
    text-align: left;
    border: 0;
  }

  th,
  td {
    padding: 0.5em;
  }
`

export default function Shows({ schema }) {
  return (
    <Layout title={`Schema / ${schema.name}`} maxWidth="900px" padding="0 2em">
      <Title>Schema: {schema.name}</Title>
      <Table cellPadding="0" cellSpacing="0" border="0">
        <thead>
          <tr>
            <th>Field name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {schema.fields.sort(sortByProperty('name')).map(field => {
            if (field.description) {
              return (
                <tr key={field.name}>
                  <td>{field.name}</td>
                  <td>{field.description}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </Table>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const { name } = params
  const schema = (await getSchemaByName(name))

  if (schema) {
    return {
      props: { schema },
    }
  } else {
    // Throw a 404
    return {
      notFound: true,
    }
  }
}
