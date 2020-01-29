/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
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
