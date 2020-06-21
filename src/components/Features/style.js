import { makeStyles } from '@material-ui/core/styles'
// import color from 'color'

export default makeStyles((theme) => ({
  timeline: {
    // width: '80%',
    margin: theme.spacing(3, 0),
  },
  timelineItem: {
    display: 'flex',
    minHeight: '70vh !important',
    flexFlow: 'column',
    width: '100%',
    '&:not(last-child)': {
      marginBottom: theme.spacing(4),
    },
    [`${theme.breakpoints.up('sm')}`]: {
      width: '85%',
      margin: 'auto',
    },
    [`${theme.breakpoints.down('sm')}`]: {
      '&:nth-child(even)': {
        flexDirection: 'column !important',
      },
    },
    [`${theme.breakpoints.up('md')}`]: {
      width: '100%',
      margin: 'auto',
      flexFlow: 'row nowrap',
      '&:nth-child(even)': {
        flexFlow: 'row-reverse nowrap',
      },
    },
  },
  timelineMedia: {
    margin: 'auto',
    width: '100%',
    order: 2,
    [`${theme.breakpoints.up('md')}`]: {
      order: 0,
    },
  },
  timelineDot: {
    [`${theme.breakpoints.down('sm')}`]: {
      alignSelf: 'center !important',
    },
    order: 1,
    [`${theme.breakpoints.up('md')}`]: {
      alignSelf: 'left',
      order: 0,
    },
    '& svg': {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  timelineContent: {
    display: 'flex',
    placeItems: 'center center',
  },
  timelinePaper: {
    padding: theme.spacing(1, 2),
    [`${theme.breakpoints.up('sm')}`]: {
      padding: theme.spacing(2, 4),
    },
  },
  timelineHeader: {
    textAlign: 'center',
  },
  featureItemList: {
    listStyle: 'none',
    display: 'grid',
    padding: 0,
    gap: theme.spacing(2) + 'px',
    marginTop: theme.spacing(2),
  },
  featureItemListItem: {},
}))
