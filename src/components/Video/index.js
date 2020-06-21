import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import useStyles from './style.js'

const Video = ({ videoSrcURL, videoTitle, ...props }) => {
  const classes = useStyles()

  return (
    <div className={clsx(classes.wrapper, props.rootClassName)}>
      <iframe
        className={clsx(classes.iframe, props.iFrameClassName)}
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        {...props}
      />
    </div>
  )
}

Video.propTypes = {
  videoSrcURL: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired,
  rootClassName: PropTypes.string,
  iFrameClassName: PropTypes.string,
}
export default Video
