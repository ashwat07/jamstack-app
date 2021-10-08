import { css } from '@emotion/react'

export const globalStyles = css`
  :root {
    --page-background: #222222;
    --page-text: #dddddd;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: var(---page-background);
    color: var(---page-text);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`
