import React from 'react'
e = React.createElement

import './resume.scss'

class Resume extends React.Component
  constructor: (props) ->
    super props

  render: ->
    e('div', {id: "resume-page"},
      e('p', {}, 'wow')
    )

export default Resume
