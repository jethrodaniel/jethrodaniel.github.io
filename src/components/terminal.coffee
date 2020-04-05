import React from 'react'
e = React.createElement

import { Link } from 'react-router-dom'

import { Site } from '../site.coffee'
import './terminal.scss'

import Terminal from 'terminal-in-react'

class Term extends React.Component
  constructor: (props) ->
    super props

  open: (link) ->
    window.open link, '_blank', 'noopener'

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
          Hi! I'm #{Site.author.name} (@#{Site.author.handle}).

          See:

            - Github: #{Site.author.github}
            - Music: #{Site.author.music.homepage}

          Type `help` to get started
        """
        promptSymbol: '$'
        descriptions: {
          # 'resume': 'View my resume'
          'github': 'Open my Github page'
          'music': 'Listen to my band'
          'source': "Browse this website's source code"
        }
        commands: {
          # 'resume': () => window.location.href += 'resume'
          # 'resume': () => window.open("#{window.location.href}resume", '_blank')
          'github': () => this.open(Site.author.github, '_blank')
          'music': () => this.open(Site.author.music.listen , '_blank')
          'source': () => this.open(Site.source, '_blank')
        }
        commandPassThrough: (cmd) ->
          "Command `#{cmd}` not found. See `help` for usage."
      })
    )

export default Term
