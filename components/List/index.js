import Link from 'next/link'
import styled, { css } from 'styled-components'
import { truncateText } from '@l/utils'

const RowStyle = css`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  transition: 150ms ease;
  width: 90%;

  :hover,
  :focus,
  :active {
    color: #000;
  }

  h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`

const StyledList = styled.ul`
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
    width: 70%;
  }
`

export function Row({ children, header, href, title }) {
  return href ? (
    <Link href={href} passHref>
      <a css={RowStyle} title={title}>
        <h3>{header} &rarr;</h3>
        {children}
      </a>
    </Link>
  ) : (
    <div title={title}>
      <li title={header}>{truncateText(header, 22)} &rarr;</li>
      {children}
    </div>
  )
}

export function List({ children }) {
  return (
    <StyledList>
      {children}
    </StyledList>
  )
}
