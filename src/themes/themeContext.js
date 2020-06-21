import React from 'react'

const ThemeContext = React.createContext()

// eslint-disable-next-line react/prop-types
export const CustomThemeProvider = ({ value, children }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeContext
