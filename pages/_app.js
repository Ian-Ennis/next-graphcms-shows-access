  
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    /* COLORS */
    --alizarin-crimson: #de3244;
    --dodger-blue: #2871fa;
    --gallery-grey: #eaeaea;
    /* GRADIENTS */
    --gradient-crimson-blue: linear-gradient(127deg, var(--alizarin-crimson), var(--dodger-blue));
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
  }

  code {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    padding: 2px;

    &.language-bash {
      line-height: 1.5em;
    }
  }

  * {
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
  background: 'var(--gradient-crimson-blue)',
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
