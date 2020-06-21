import React from 'react'
import Wrapper from './src/components/Wrapper'

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <Wrapper>{element}</Wrapper>
}
