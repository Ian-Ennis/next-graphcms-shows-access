import Head from 'next/head'
import Link from 'next/link'
import { Container, Main, Footer } from './Layout.css'

export default function Layout({
  title,
  background,
  children,
  color = '#fff',
  maxWidth = '100%',
  padding = '5rem 0',
  alignItems = 'center'
}) {
  return (
    <Container
      background={background}
      color={color}
      padding={padding}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main
        maxWidth={maxWidth}
        alignItems={alignItems}>
        {children}
      </Main>

      <Footer>
        <span>
          &copy; 2021 Codeval. Content is available under
          <Link href="/license"><a>this license</a></Link>.
        </span>
      </Footer>
    </Container>
  )
}
