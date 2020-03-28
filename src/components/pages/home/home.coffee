import React from 'react'
e = React.createElement

import {
  Col,
  Container,
  Navbar,
  Row
} from 'reactstrap'

import './home.css'

import Term from '../../terminal.coffee'

class HomePage extends React.Component
  constructor: (props) ->
    super props

  render: ->
    e(Term, {value: "Hello!"}, null)
    # e('div', {id: "home-page"},
    #   e(Navbar, {color: "dark", dark: true, expand: "md"},
    #     e(Container, {fluid: true, className: "h-100"},
    #       e(Row, {className: "w-100"},
    #         e Col, {md: "2", className: "d-none d-lg-block"}, null
    #         e(Col, {id: "terminal"},
    #           e(Term, {value: "Hello!"}, null)
    #         )
    #         e Col, {md: "2", className: "d-none d-lg-block"}, null
    #       )
    #     )
    #   )
    # )

export default HomePage
