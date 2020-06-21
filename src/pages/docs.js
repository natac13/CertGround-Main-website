import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

const Redirect = () => {
  useEffect(() => {
    navigate('/docs/intro/')
  }, [])
  return <div></div>
}

export default Redirect
