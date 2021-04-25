import ReactMarkdown from 'react-markdown'
import Layout from '@c/Layout'

export default function ReadMe({ markdown }) {
  return (
    <Layout title="Codeval / README" background="white" color="black" maxWidth="600px" alignItems="flex-start">
      <ReactMarkdown source={markdown} />
    </Layout>
  )
}

export async function getStaticProps() {
  const md = await import('../README.md');

  return {
    props: {
      markdown: md.default
    }
  }
}