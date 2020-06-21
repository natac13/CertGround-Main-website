import React from 'react'
import R from 'ramda'
import Link from '../link'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'

import { FileDocumentOutline, HomeOutline } from 'mdi-material-ui'

import useStyles from './style'

import { ListItem, ListItemIcon, ListItemText, List } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import useIsMobile from '../../utils/isMobile'

export const PureFooter = ({ data }) => {
  const classes = useStyles()
  const isMobile = useIsMobile()

  const ackDisplay = R.map(({ node }) => (
    <ListItem key={node.id} className={classes.ack__listItem}>
      <span>{node.name}</span>
    </ListItem>
  ))(data.allAcknowledgementsYaml.edges)
  return (
    <footer className={classes.footer} id="footer" data-testid="footer">
      <a href={data.site.siteMetadata.mainSiteUrl} className={classes.title}>
        <Img
          fixed={data.CertGroundLogo.childImageSharp.fixed}
          alt={data.site.siteMetadata.title}
        />
      </a>

      <div className={classes.ack}>
        <Typography variant="h5" component="h3" align="center">
          Acknowledgements
        </Typography>
        <List>{ackDisplay}</List>
      </div>

      <List id="footer-nav" component="nav" className={classes.nav}>
        <ListItem
          component={Link}
          to="/"
          key="homePage"
          className={classes.link}
          aria-label="Home Page Link Footer"
        >
          <ListItemIcon className={classes.linkIcon}>
            <HomeOutline />
          </ListItemIcon>
          <ListItemText>Home Page</ListItemText>
        </ListItem>

        <ListItem
          key="docs"
          className={classes.link}
          component={Link}
          href={`/docs/intro`}
          aria-label="Documentation Link"
        >
          <ListItemIcon className={classes.linkIcon}>
            <FileDocumentOutline />
          </ListItemIcon>
          <ListItemText>{isMobile ? 'Docs' : 'Documentation'}</ListItemText>
        </ListItem>

        <ListItem
          key="EULA"
          className={classes.link}
          component={Link}
          href={`/eula/`}
          aria-label="End User License Agreement Link"
        >
          <ListItemIcon className={classes.linkIcon}>
            <FileDocumentOutline />
          </ListItemIcon>
          <ListItemText>EULA</ListItemText>
        </ListItem>

        <ListItem
          key="privacy-policy"
          className={classes.link}
          component={Link}
          href={`/privacy-policy/`}
          aria-label="Privacy Policy Link"
        >
          <ListItemIcon className={classes.linkIcon}>
            <FileDocumentOutline />
          </ListItemIcon>
          <ListItemText>Privacy Policy</ListItemText>
        </ListItem>
      </List>

      <MuiLink
        className={classes.me}
        href={data.site.siteMetadata.authorLinkedIn}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${data.site.siteMetadata.author} LinkedIn profile page link`}
      >
        <Typography
          variant="h5"
          component="h4"
          className={classes.me__name}
          align="center"
        >
          {data.site.siteMetadata.author}
        </Typography>
        <Typography
          variant="h6"
          component="h4"
          className={classes.me__bio}
          align="center"
        >
          {data.site.siteMetadata.authorBio}
        </Typography>
      </MuiLink>

      <Typography className={classes.copyright} variant="body2" align="right">
        {`©️ ${new Date().getFullYear()} ${data.site.siteMetadata.author}.`}
      </Typography>
    </footer>
  )
}

const Footer = (props) => {
  const data = useStaticQuery(graphql`
    query FooterPage {
      allAcknowledgementsYaml {
        edges {
          node {
            name
            id
          }
        }
      }
      site {
        siteMetadata {
          title
          authorBio
          author
          description
          authorLinkedIn
        }
      }
      CertGroundLogo: file(
        relativePath: { eq: "logos/CertGround-Logo-Full-White-BlueBG.png" }
      ) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <PureFooter {...props} data={data}></PureFooter>
}

Footer.propTypes = {
  isLoggedIn: PropTypes.bool,
}
PureFooter.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  isLoggedIn: PropTypes.bool,
}

Footer.defaultProps = {
  isLoggedIn: false,
}

export default Footer
