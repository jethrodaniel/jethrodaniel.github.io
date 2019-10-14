###
eslint-disable
###

import React from 'react'
e = React.createElement

import { Link } from 'react-router-dom'

import './Terminal.css'

import Typing from 'react-typing-animation'

export Terminal = () =>
  e('div', {},
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
      e('p', {},
        e('a', {href: '/resume'}, 'Resume')
      )
      e 'span', {}, '^D'
    )
  )

export default Terminal
