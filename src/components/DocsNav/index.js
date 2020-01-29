import React, { useState, useEffect } from 'react'
import R from 'ramda'
import {
  Hidden,
  Drawer,
  useTheme,
  ListItem,
  ListItemText,
  Button,
  List,
  Divider,
  ListSubheader,
  Collapse,
  Fab,
} from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import {
  ExpandAll,
  CollapseAll,
  ChevronDown as ExpandMoreIcon,
  ChevronUp as ExpandLessIcon,
  Close as CloseIcon,
  UnfoldMoreVertical as OpenIcon,
} from 'mdi-material-ui'
import capitalize from 'lodash/capitalize'
import PropTypes from 'prop-types'
import Link from '../link'
import useStyles from './style'

DocsNav.propTypes = {
  path: PropTypes.string.isRequired,
}

export default function DocsNav(props) {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query DocsNavQuery {
      navOrder: allOrderYaml {
        nodes {
          header
          subItems
        }
      }

      nav: allMdx(filter: { fields: { slug: { regex: "/docs/i" } } }) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
      docDirs: allDirectory(filter: { relativeDirectory: { eq: "docs" } }) {
        nodes {
          name
          relativePath
          id
        }
      }
    }
  `)
  const { path } = props

  const { nav, navOrder } = data

  const [mobileOpen, setMobileOpen] = useState(false)
  const [openPanels, setOpenPanels] = useState({})
  const [openAll, setOpenAll] = useState(false)

  const theme = useTheme()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const navHeaders = R.pluck('header')(navOrder.nodes)

  const pathArray = R.compose(
    R.tail,
    R.reject(R.equals('')),
    R.split('/')
  )(path)
  const section = R.find((item) => R.includes(item, pathArray))(navHeaders)

  useEffect(() => {
    if (
      (section && R.isNil(openPanels[section])) ||
      R.not(openPanels[section])
    ) {
      setOpenPanels({ ...openPanels, [section]: true })
    }
  }, [])

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
        {R.map(({ header, subItems }) => {
          if (R.length(subItems) <= 0) {
            return null
          } else if (R.length(subItems) === 1) {
            const node = R.find(({ fields }) =>
              R.includes(subItems[0], fields.slug)
            )(nav.nodes)
            if (node) {
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
            }
          } else {
            return (
              <>
                <ListItem
                  button
                  onClick={() => {
                    setOpenAll(false)
                    setOpenPanels({
                      ...openPanels,
                      [header]: !openPanels[header],
                    })
                  }}
                >
                  <ListItemText primary={capitalize(header)} />
                  {openPanels[header] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItem>
                <Collapse
                  in={openPanels[header] || openAll}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {R.map((item) => {
                      let node
                      if (item === 'index') {
                        const regex = new RegExp(`${header}/$`, 'i')
                        node = R.find(({ fields }) => {
                          return fields.slug.match(regex)
                        })(nav.nodes)
                      } else {
                        node = R.find(({ fields }) =>
                          R.includes(item, fields.slug)
                        )(nav.nodes)
                      }

                      if (node) {
                        return (
                          <ListItem
                            className={classes.nested}
                            key={node.id}
                            component={Link}
                            to={node.fields.slug}
                            selected={node.fields.slug === path}
                          >
                            <ListItemText>
                              {node.frontmatter.title}
                            </ListItemText>
                          </ListItem>
                        )
                      }
                    })(subItems)}
                  </List>
                </Collapse>
              </>
            )
          }
        })(navOrder.nodes)}
      </List>
    </div>
  )

  return (
    <>
      <Hidden smUp implementation="js">
        <Fab
          className={classes.mobileMenuBtn}
          onClick={handleDrawerToggle}
          color="secondary"
          aria-label="open docs nav"
        >
          {mobileOpen ? <CloseIcon /> : <OpenIcon />}
        </Fab>
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
      <Hidden xsDown implementation="js" className={classes.drawerWrapper}>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
            docked: classes.docked,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </>
  )
}
