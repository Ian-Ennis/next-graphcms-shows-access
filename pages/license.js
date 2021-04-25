import ReactMarkdown from 'react-markdown'
import Layout from '@c/Layout'

export default function License({ markdown }) {
  return (
    <Layout title="Codeval / License" maxWidth="800px">
      <ReactMarkdown source={markdown} />
    </Layout>
  )
}

export async function getStaticProps() {
  const md = await import('../LICENSE.md');

  return {
    props: {
      markdown: md.default
    }
  }
}