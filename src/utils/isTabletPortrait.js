import { useTheme, useMediaQuery } from '@material-ui/core'

const useIsTabletPortrait = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.only('sm'))
  return isMobile
}

export default useIsTabletPortrait
