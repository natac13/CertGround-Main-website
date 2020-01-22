/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState } from 'react'
import R from 'ramda'
import Link from '../link'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'

import {
  FileDocumentOutline,
  HomeOutline,
  CommentTextOutline,
  OpenInNew,
} from 'mdi-material-ui'

import useStyles from './style'

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  List,
} from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'

const style = {}
const Footer = (props) => {
  const data = useStaticQuery(graphql`
    query FooterPage {
      allAcknowledgementsYaml {
        edges {
          node {
            name
            reason
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
          title
          authorLinkedIn
          docsLink
        }
      }
    }
  `)
  const classes = useStyles()

  const { isLoggedIn } = props
  const [feedbackOpen, setFeedbackOpen] = useState(false)

  const ackDisplay = R.map(({ node }) => (
    <ListItem key={node.id} align="center">
      <Typography variant="subtitle1" color="secondary" align="center">
        <span>{node.name}</span> - <span>{node.reason}</span>
      </Typography>
    </ListItem>
  ))(data.allAcknowledgementsYaml.edges)
  return (
    <footer className={classes.footer}>
      {/* {isLoggedIn && (
        <Feedback
          feedbackOpen={feedbackOpen}
          setFeedbackOpen={setFeedbackOpen}
        />
      )} */}
      <Link to="/" className={classes.title}>
        <Typography variant="h5">{data.site.siteMetadata.title}</Typography>
      </Link>
      <div className={classes.ack}>
        <Typography variant="h5" color="secondary" align="center" gutterBottom>
          Acknowledgements
        </Typography>
        <List>{ackDisplay}</List>
      </div>
      <div className={classes.nav}>
        <List>
          <ListItem
            component={Link}
            to="/"
            key="homePage"
            className={style.link}
          >
            <ListItemIcon>
              <HomeOutline />
            </ListItemIcon>
            <ListItemText>Home Page</ListItemText>
          </ListItem>

          <Tooltip
            disableHoverListener={isLoggedIn}
            disableTouchListener={isLoggedIn}
            disableFocusListener={isLoggedIn}
            title="Please Log In."
          >
            <ListItem
              key="feedback"
              component={MuiLink}
              onClick={() => {
                if (isLoggedIn) {
                  setFeedbackOpen(true)
                }
              }}
            >
              <ListItemIcon>
                <CommentTextOutline />
              </ListItemIcon>
              <ListItemText>Feedback</ListItemText>
            </ListItem>
          </Tooltip>
          <ListItem
            component={Link}
            to="/eula"
            key="EULA"
            className={style.link}
          >
            <ListItemIcon>
              <FileDocumentOutline />
            </ListItemIcon>
            <ListItemText>EULA</ListItemText>
          </ListItem>

          <ListItem
            component={Link}
            to="/privacy-policy"
            key="privacy-policy"
            className={style.link}
          >
            <ListItemIcon>
              <FileDocumentOutline />
            </ListItemIcon>
            <ListItemText>Privacy Policy</ListItemText>
          </ListItem>

          <ListItem
            component={MuiLink}
            href={data.site.siteMetadata.docsLink}
            key="docs"
          >
            <ListItemIcon>
              <FileDocumentOutline />
            </ListItemIcon>
            <ListItemText>Documentation</ListItemText>
          </ListItem>

          <ListItem
            component={MuiLink}
            href={`http://${process.env.GATSBY_CLIENT_WEBSITE}`}
            key="client-website"
          >
            <ListItemIcon>
              <OpenInNew />
            </ListItemIcon>
            <ListItemText>
              {`${process.env.GATSBY_CLIENT} Website`}
            </ListItemText>
          </ListItem>
        </List>
      </div>
      <div className={classes.me}>
        <MuiLink
          href={data.site.siteMetadata.authorLinkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="h5" className={classes.me__name} align="center">
            {data.site.siteMetadata.author}
          </Typography>
          <Typography variant="h6" className={classes.me__bio} align="center">
            {data.site.siteMetadata.authorBio}
          </Typography>
        </MuiLink>
      </div>
      <div className={classes.copyright}>
        <Typography variant="body2" align="right">
          {`©️ ${new Date().getFullYear()} ${data.site.siteMetadata.author}.`}
        </Typography>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  isLoggedIn: PropTypes.bool,
}

Footer.defaultProps = {
  isLoggedIn: false,
}

export default Footer
