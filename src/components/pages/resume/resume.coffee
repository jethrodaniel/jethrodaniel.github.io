import React from 'react'
e = React.createElement

import {
  Col,
  Container,
  Navbar,
  Row
} from 'reactstrap'

import {Terminal} from '../../terminal.coffee'

import './Resume.css'

export default Resume = () =>
  e('div', {id: "resume-page"},
    e(Navbar, {color: "light", dark: false, expand: "md"},
      e(Container, {fluid: true, className: "h-100"},
        e(Row, {},
          e Col, {md: "3", className: "d-none d-lg-block"}, null
          e(Col, {id: "content"},
            e(Terminal, {value: "Hello!"}, null)
          )
          e Col, {md: "3", className: "d-none d-lg-block"}, null
        )
      )
    )
  )