/** @jsx jsx */
import { jsx } from '@emotion/core'
// import React from 'react'
import { useTheme } from '@material-ui/core'
import Link from '../components/link'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = (props) => {
  console.log(props)

  return (
    <Layout>
      <SEO title="Home" />
      <Link to={'/eula'}>EULA</Link>
    </Layout>
  )
}

export default IndexPage
