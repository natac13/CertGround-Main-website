import useLocalStorage from './useLocalStorage'
import { useMediaQuery } from '@material-ui/core'
import { useState, useEffect } from 'react'

const useDarkMode = (lightTheme, darkTheme) => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false)

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const enabled = typeof darkMode !== 'undefined' ? darkMode : prefersDarkMode

  const [theme, setTheme] = useState(enabled ? darkTheme : lightTheme)

  useEffect(() => {
    setTheme(enabled ? darkTheme : lightTheme)
  }, [enabled]) // eslint-disable-line

  return [theme, darkMode, setDarkMode]
}

export default useDarkMode
