import React from 'react'
e = React.createElement

import { Link } from 'react-router-dom'

import {
  Col,
  Container,
  Row
} from 'reactstrap'

import './terminal.css'

import Terminal from 'terminal-in-react'

class Term extends React.Component
  constructor: (props) ->
    super props
    # todo: rm _content_, place in another folder
    @github = 'https://github.com/jethrodaniel'
    @music = 'http://basedeltazero.com'
    @music_listen_url = 'https://music.youtube.com/channel/UCeG7uzxUXP7_TJECGdpaz5w'

  render: ->
    e('div', {id: 'terminal'},
      e(Terminal, {
        style: {
          height: "100vh"
          width: "100vw"
        }
        color: 'green'
        backgroundColor: 'black'
        barColor: 'black'
        allowTabs: false
        hideTopBar: true
        startState: 'maximised'
        msg: """
          Hi! I'm Mark Delk (aka jethrodaniel), and this is my site.

          Quick Links:

            - Github: #{@github}
            - Music: #{@music}

          Type `help` to get started
        """
        promptSymbol: '$'
        descriptions: {
          # 'resume': 'View my resume'
          'github': 'Open my Github page'
          'music': 'Listen to my band'
        }
        commands: {
          # 'resume': () => window.location.href += 'resume'
          # 'resume': () => window.open("#{window.location.href}resume", '_blank')
          'github': () => window.open(@github, '_blank')
          'music': () => window.open(@music_listen_url , '_blank')
        }
        commandPassThrough: (cmd) ->
          "Command `#{cmd}` not found. See `help` for usage."
      })
    )

export default Term
