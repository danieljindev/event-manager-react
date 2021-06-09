import React from 'react'
import { Interpolation, Theme } from '@emotion/react'
import { GlobalStyles } from '@material-ui/core'

const styles: Interpolation<Theme> = {
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  html: {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    height: '100%',
    width: '100%',
  },
  body: {
    backgroundColor: '#f4f6f8',
    height: '100%',
    width: '100%',
  },
  a: {
    textDecoration: 'none',
  },
  '#root': {
    height: '100%',
    width: '100%',
  },
}

const AppGlobalStyle = () => {
  return <GlobalStyles styles={styles} />
}

export default AppGlobalStyle
