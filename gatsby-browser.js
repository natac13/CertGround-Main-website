/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './src/themes'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        {element}
      </>
    </ThemeProvider>
  )
}
