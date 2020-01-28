import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import R from 'ramda'
import capitalize from 'lodash/capitalize'
import Link from '../link'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {
  ExpandAll,
  CollapseAll,
  ChevronDown as ExpandMoreIcon,
  ChevronUp as ExpandLessIcon,
} from 'mdi-material-ui'
import Layout from '../Layout'
import {
  Typography,
  Hidden,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  useTheme,
  IconButton,
  Button,
  ListSubheader,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Collapse,
} from '@material-ui/core'
import useStyles from './style'

export default function PageTemplate(props) {
  const classes = useStyles()
  const {
    data: { mdx },
    path,
  } = props
  console.log(props)
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const [openPanels, setOpenPanels] = useState({})
  const [openAll, setOpenAll] = useState(false)

  const tocHeaders = [
    'intro',
    'overview',
    'member',
    'course',
    'class',
    'email',
    'feedback',
  ]

  const pathArray = R.compose(
    R.tail,
    R.reject(R.equals('')),
    R.split('/'),
  )(path)
  const section = R.find((item) => R.includes(item, pathArray))(tocHeaders)
  useEffect(() => {
    if (
      (section && R.isNil(openPanels[section])) ||
      R.not(openPanels[section])
    ) {
      setOpenPanels({ ...openPanels, [section]: true })
    }
  }, [])

  const tocTree = R.reduce(
    (acc, header) => ({
      ...acc,
      [`${header}`]: R.filter(({ node: { fields } }) =>
        R.includes(`/${header}/`)(fields.slug),
      )(props.data.toc.edges),
    }),
    {},
  )(tocHeaders)

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Button
          onClick={() => {
            if (openAll) {
              setOpenPanels(R.map((item) => false)(openPanels))
            } else {
              setOpenPanels(R.map((item) => true)(openPanels))
            }
            setOpenAll(!openAll)
          }}
          startIcon={openAll ? <CollapseAll /> : <ExpandAll />}
        >
          {openAll ? 'Collapse All' : 'Expand All'}
        </Button>
      </div>
      <Divider />

      <List
        subheader={<ListSubheader align="center">Documentation</ListSubheader>}
      >
        {R.map((item) => {
          if (R.length(tocTree[item]) <= 0) {
            return null
          } else if (R.length(tocTree[item]) === 1) {
            const { node } = tocTree[item][0]
            return (
              <ListItem
                key={node.id}
                component={Link}
                to={node.fields.slug}
                selected={node.fields.slug === path}
              >
                <ListItemText>{node.frontmatter.title}</ListItemText>
              </ListItem>
            )
          } else {
            return (
              <>
                <ListItem
                  button
                  onClick={() => {
                    setOpenAll(false)
                    setOpenPanels({ ...openPanels, [item]: !openPanels[item] })
                  }}
                >
                  <ListItemText primary={capitalize(item)} />
                  {openPanels[item] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItem>
                <Collapse
                  in={openPanels[item] || openAll}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {R.map(({ node }) => (
                      <ListItem
                        className={classes.nested}
                        key={node.id}
                        component={Link}
                        to={node.fields.slug}
                        selected={node.fields.slug === path}
                      >
                        <ListItemText>{node.frontmatter.title}</ListItemText>
                      </ListItem>
                    ))(tocTree[item])}
                  </List>
                </Collapse>
              </>
            )
          }
        })(tocHeaders)}
      </List>
    </div>
  )

  return (
    <Layout>
      <section className={classes.wrapper}>
        <div className={classes.tableOfContents}>
          <Hidden smUp implementation="css">
            <Drawer
              // container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </div>
        <div className={classes.articleWrapper}>
          <article className={classes.article}>
            <Typography variant="h2" component="h1">
              {mdx.frontmatter.title}
            </Typography>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query DocsQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }

    toc: allMdx(filter: { fields: { slug: { regex: "/docs/i" } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
