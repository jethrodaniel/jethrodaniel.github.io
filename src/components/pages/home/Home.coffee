###
eslint-disable
###

import React from 'react'
e = React.createElement

import {
  Col,
  Container,
  Navbar,
  Row
} from 'reactstrap'

import './Home.css'

import {Terminal} from '../../Terminal.js'

export default HomePage = () =>
  e('div', {id: "home-page"},
    e(Navbar, {color: "dark", dark: true, expand: "md"},
      e(Container, {fluid: true, className: "h-100"},
        e(Row, {className: "w-100"},
          e Col, {md: "3", className: "d-none d-lg-block"}, null
          e(Col, {id: "terminal"},
            e(Terminal, {value: "Hello!"}, null)
          )
          e Col, {md: "3", className: "d-none d-lg-block"}, null
        )
      )
    )
  )

