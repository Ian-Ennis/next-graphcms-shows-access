import styled from 'styled-components'

const H1 = styled.h1`
  margin: 0.5em 0;
  line-height: 1.15;
  font-size: 3rem;
  text-align: ${(p) => p.textAlign};

  @media (min-width: 500px) {
    font-size: 4rem;
  }
`

const P = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: ${(p) => p.textAlign};
`

export const Title = ({ children, textAlign = 'center' }) =>
  <H1 textAlign={textAlign}>
    {children}
  </H1>

export const SubTitle = ({ children, textAlign = 'center' }) =>
  <P textAlign={textAlign}>
    {children}
  </P>
