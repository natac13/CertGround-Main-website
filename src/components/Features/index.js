import React, { useMemo } from 'react'
import useStyles from './style.js'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import {
  Magnify as SearchIcon,
  ShareVariant as ShareIcon,
  CalendarOutline as EventIcon,
  HammerScrewdriver,
  ClipboardText,
} from 'mdi-material-ui'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Fade from 'react-reveal/Fade'
import useIsMobile from '../../utils/isMobile.js'
import Video from '../Video/index.js'

const Features = (props) => {
  const classes = useStyles()
  const isMobile = useIsMobile()

  const featuresContent = useMemo(
    () => [
      {
        media: (
          <Video
            videoSrcURL="https://www.youtube.com/embed/hRfdQD94KA0?modestbranding=1&loop=1&playlist=hRfdQD94KA0"
            videoTitle="Course and Class Create with Member Registration"
          />
        ),
        header: 'Training Center Management',
        text: (
          <ul className={classes.featureItemList}>
            <Typography component="li" className={classes.featureItemListItem}>
              Create, Edit and delete the Courses offered
            </Typography>
            <Typography component="li" className={classes.featureItemListItem}>
              Create the Class Events, which your Membership can register to
              through CertGround.
            </Typography>
            <Typography component="li" className={classes.featureItemListItem}>
              Create, Edit and Delete Member records
            </Typography>
            <Typography component="li" className={classes.featureItemListItem}>
              2-Step Class Completion, which automatically updates all the
              Member records which completed the training.
            </Typography>
          </ul>
        ),
        icon: ClipboardText,
      },
      {
        media: (
          <Video
            videoSrcURL="https://www.youtube.com/embed/feNqmDtQFIw?modestbranding=1&loop=1&playlist=feNqmDtQFIw"
            videoTitle="View Training Records"
            height={320}
            width={600}
          />
        ),
        header: 'Membership Training Records',
        text: (
          <ul className={classes.featureItemList}>
            <Typography component="li" className={classes.featureItemListItem}>
              Members are able to view their Safety and Skills training records.
              See which courses are up to date, expired or are within an expiry
              warning range.
            </Typography>
            <Typography component="li" className={classes.featureItemListItem}>
              Members will receive an email notice when each of their courses
              reach the <em>expiry warn range</em>. Giving them a reminder to
              register to and complete a Class to keep their training current.
            </Typography>
            <Typography component="li" className={classes.featureItemListItem}>
              See when each Member is Job Ready by having all required Safety
              Courses up to date.
            </Typography>
            <Typography component="li" className={classes.featureItemListItem}>
              Ability to search and download snapshot copies of the Membership
              training records
            </Typography>
          </ul>
        ),
        icon: SearchIcon,
      },
      {
        media: (
          <Video
            videoSrcURL="https://www.youtube.com/embed/st2CtKqC8pg?modestbranding=1&loop=1&playlist=st2CtKqC8pg"
            videoTitle="Class Event Registration"
          />
        ),
        header: 'Class Events',
        text: (
          <ul className={classes.featureItemList}>
            <Typography component="li" className={classes.featureItemListItem}>
              Members can view upcoming Classes. Coloured by event.
            </Typography>
            <Typography component="li" className={classes.featureItemListItem}>
              Members can register themselves when there are openings or join a
              waiting list for a full Class.
            </Typography>
            <Typography component="li" className={classes.featureItemListItem}>
              If a member unregistered from the full Class, CertGround will
              automatically add the next waiting list member(s) to the
              attendance list and send them email notifications.
            </Typography>
            <Typography component="li" className={classes.featureItemListItem}>
              The Training Coordinator can control if registration is open for
              each Class. As well as register and unregister Members.
            </Typography>
          </ul>
        ),
        icon: EventIcon,
      },
      {
        media: (
          <Video
            videoSrcURL="https://www.youtube.com/embed/I4dNE8jsOLI?modestbranding=1&loop=1&playlist=I4dNE8jsOLI"
            videoTitle="CertGround QRCode Share"
          />
        ),
        header: 'Certificate Sharing',
        text: (
          <ul className={classes.featureItemList}>
            <Typography component="li" className={classes.featureItemListItem}>
              Members can share Training Course certifications with employers
              for safety orientations through CertGround; eliminating the need
              to physically share plastic cards. Helps save paper, time and the
              environment.
            </Typography>
            <Typography component="li" className={classes.featureItemListItem}>
              The QRCode share option allows the Member to generate a link to a
              webpage that will showcase their latest training information. This
              page has a single click button to print off Proof of Training.
            </Typography>
            <Typography component="li" className={classes.featureItemListItem}>
              Alternatively that qrcode can be scanned and direct the user to
              the Certificate showcase page mentioned above.
            </Typography>
            <Typography component="li" className={classes.featureItemListItem}>
              The Proof of Training print out is titled with your
              Organization&apos;s letter head
            </Typography>
          </ul>
        ),
        icon: ShareIcon,
      },
      {
        media: (
          <Video
            videoSrcURL="https://www.youtube.com/embed/eQuOD0qisno?modestbranding=1&loop=1&playlist=eQuOD0qisno"
            videoTitle="CertGround Extra Tools"
          />
        ),
        header: 'Extra Added Tools',
        text: (
          <ul className={classes.featureItemList}>
            <Typography component="li" className={classes.featureItemListItem}>
              Added tools to help while on the job site.
            </Typography>
            <Typography component="li" className={classes.featureItemListItem}>
              Phase Colour Finder.
            </Typography>
            <Typography component="li" className={classes.featureItemListItem}>
              Downloadable Conduit Bending Charts.
            </Typography>
          </ul>
        ),
        icon: HammerScrewdriver,
      },
    ],
    [classes.featureItemList, classes.featureItemListItem]
  )

  return (
    <section id="features" className={classes.wrapper}>
      <header>
        <Typography variant="h2" align="center">
          Features
        </Typography>
      </header>
      <Timeline align="alternate" className={classes.timeline}>
        {featuresContent.map((content, i) => (
          <TimelineItem key={content.id} className={classes.timelineItem}>
            <TimelineOppositeContent className={classes.timelineMedia}>
              {content.media}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                color={i % 2 === 0 ? 'primary' : 'secondary'}
                className={classes.timelineDot}
              >
                <content.icon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              className={classes.timelineContent}
              component={Fade}
            >
              <Fade
                right={!isMobile && i % 2 === 0}
                left={!isMobile && i % 2 !== 0}
                duration={2300}
              >
                <Paper elevation={3} className={classes.timelinePaper}>
                  <Typography
                    variant="h6"
                    component="h1"
                    className={classes.timelineHeader}
                  >
                    {content.header}
                  </Typography>
                  {content.text}
                </Paper>
              </Fade>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  )
}

Features.propTypes = {}

export default Features
