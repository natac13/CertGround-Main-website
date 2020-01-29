import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Button } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'

import { Pencil as EditIcon } from 'mdi-material-ui'
import useStyle from './style.js'

EditThisPage.propTypes = {
  slug: PropTypes.string.isRequired,
  isIndex: PropTypes.bool,
}

EditThisPage.defaultProps = {
  isIndex: false,
}

export default function EditThisPage(props) {
  const classes = useStyle()
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteGithub
        }
      }
    }
  `)
  if (props.isIndex) {
    return (
      <Button
        // component={MuiLink}
        target="_blank"
        rel="noopener noreferrer"
        href={`${data.site.siteMetadata.siteGithub}/blob/master/src/docs${props.slug}/index.mdx`}
        className={classes.link}
        startIcon={<EditIcon />}
      >
        <Typography variant="body1">Edit this page</Typography>
      </Button>
    )
  } else {
    return (
      <Button
        // component={MuiLink}
        target="_blank"
        rel="noopener noreferrer"
        href={`${data.site.siteMetadata.siteGithub}/blob/master/src/docs${props.slug}.mdx`}
        className={classes.link}
        startIcon={<EditIcon />}
      >
        <Typography variant="body1">Edit this page</Typography>
      </Button>
    )
  }
}
