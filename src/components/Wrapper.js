/* eslint-disable react/prop-types */
import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'

import { lightTheme, darkTheme } from '../themes'
// import '@mdi/font/css/materialdesignicons.min.css'
import { CustomThemeProvider } from '../themes/themeContext'
import useDarkMode from '../utils/useDarkMode'

const Wrapper = (props) => {
  const [theme, darkMode, setDarkMode] = useDarkMode(lightTheme, darkTheme)
  const createdTheme = createMuiTheme(theme)
  return (
    <>
      <ThemeProvider theme={createdTheme}>
        <CssBaseline />
        <CustomThemeProvider value={{ setDarkMode, darkMode }}>
          {props.children}
        </CustomThemeProvider>
      </ThemeProvider>
    </>
  )
}

export default Wrapper
