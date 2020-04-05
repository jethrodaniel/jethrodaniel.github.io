import React from 'react'

e = React.createElement

import './app.scss'

import {
  BrowserRouter as Router
  Route
  Switch
} from 'react-router-dom'

import Resume from './components/pages/resume/resume.coffee'
import HomePage from './components/pages/home/home.coffee'

import { ThemeProvider } from "@material-ui/styles"

class App extends React.Component
  constructor: (props) ->
    super props

  render: ->
    e(Router, {},
      e('div', {},
        e(Switch, {},
          e(Route, {exact: true, path: "/", component: HomePage}, null)
          e(Route, {exact: true, path: "/resume", component: Resume}, null)
          e(Route, {component: NoMatch}, null)
        )
      )
    )

NoMatch = ({location}) =>
  e 'div', {},
    e('h3', {}, "No match for #{location.pathname}")

export default App
