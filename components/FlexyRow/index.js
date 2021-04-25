import styled from 'styled-components'

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 20px;
  font-weight: bold;

  a {
    margin: 1em 0 0;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: ${(p) => p.justify};
    
    a {
      margin: 0 0 0 1em;
      :first-child {
        margin: 0;
      }
    }
  }
`

export default function FlexyRow({ children, justify = 'space-between' }) {
  return (
    <StyledRow justify={justify}>
      {children}
    </StyledRow>
  )
}
