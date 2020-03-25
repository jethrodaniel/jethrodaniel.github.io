import React from 'react'
e = React.createElement

import { Link } from 'react-router-dom'

import {
  Col,
  Container,
  Row
} from 'reactstrap'

import './terminal.css'

import Typing from 'react-typing-animation'

export Terminal = () =>
  e(Container, {},
    e(Row, {className: 'justify-content-center'},
      e(Col, {className: 'col-xs-12 col-sm-12 col-md-10 col-lg-8'},
        e(Typing, {speed: 30},
          e 'p', {}, '$ cat > intro.txt'
          e 'p', {}, "I'm Mark Delk (aka Jethro)."
          e 'span', {}, 'See:'
          e('p', {},
            e('a', {href: 'https://github.com/jethrodaniel'}, 'Github')
          )
          e('p', {},
            e('a', {href: 'http://basedeltazero.com'}, 'My Band')
          )
          # e('p', {},
          #   e('a', {href: '/resume'}, 'Resume')
          # )
          e 'span', {}, '^D'
        )
      )
    )
  )

export default Terminal
