import React, {Component} from 'react'
import resumeUrl from '~/assets/resume.pdf'

// The purpose of this page is to provide a permalink for my resume,
// so that I can always point people to the most up to date version
class ResumePage extends Component {
  componentDidMount () {
    window.location.replace(resumeUrl)
  }

  render () {
    return (
      <p>Loading the resume!</p>
    )
  }
}

export default ResumePage
