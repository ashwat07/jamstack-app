import { css } from '@emotion/react'

const SR_ONLY = `
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const container = css`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 0 0.5rem;
  /* background-color: var(--background-accent); */
`
// const title = css`
//   ${SR_ONLY}
// `

const title = css`
  font-size: 4.5rem;
  text-align: center;
  /* padding: 0 1ch;
  color: var(--white); */
`

export { container, title }
