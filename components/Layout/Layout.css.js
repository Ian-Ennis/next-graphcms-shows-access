import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ background, theme }) => background ? background : theme.background};
  color: ${(p) => p.color};
  padding: ${(p) => p.padding};
`

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(p) => p.alignItems};
  max-width: ${(p) => p.maxWidth};
`

export const Footer = styled.footer`
  width: 100%;
  max-width: 700px;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    margin-left: 4px;
    text-decoration: underline;
  }
`
