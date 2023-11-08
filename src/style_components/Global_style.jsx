import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
/* 전역 스타일 컴포넌트 */
  ${reset}
  /* other styles */
  body {
    max-width: 1280px;
    min-width: 769px;
    margin: 0 auto;
  }
`



export default GlobalStyle;