import React from 'react'
import Wrapper from './src/components/Wrapper'

// import { hydrate } from 'react-dom'
// import { loadableReady } from '@loadable/component'

// export const replaceHydrateFunction = () => (element, container, callback) => {
//   loadableReady(() => {
//     hydrate(element, container, callback)
//   })
// }
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <Wrapper>{element}</Wrapper>
}
