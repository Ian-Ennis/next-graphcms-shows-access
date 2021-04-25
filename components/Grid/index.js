import Link from 'next/link'
import styled, { css } from 'styled-components'
import { truncateText } from '@l/utils'

const CardStyle = css`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid var(--gallery-grey);
  border-radius: 10px;
  transition: 150ms ease;

  :hover,
  :focus,
  :active {
    color: #000;
    background-color: var(--gallery-grey);
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

const StyledGrid = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 1rem;
  width: 100%;

  @media (min-width: 600px) {
    width: auto;
    flex-direction: row;
  }
`

export function Card({ children, header, href, title }) {
  return href ? (
    <Link href={href} passHref>
      <a css={CardStyle} title={title}>
        <h3>{header} &rarr;</h3>
        {children}
      </a>
    </Link>
  ) : (
    <div css={CardStyle} title={title}>
      <h3 title={header}>{truncateText(header, 22)} &rarr;</h3>
      {children}
    </div>
  )
}

export function Grid({ children }) {
  return (
    <StyledGrid>
      {children}
    </StyledGrid>
  )
}
