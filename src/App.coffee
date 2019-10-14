###
eslint-disable
###

import React from 'react'
e = React.createElement

import {
  BrowserRouter as Router
  Route
  Switch
} from 'react-router-dom'

# import Resume from './components/pages/resume/Resume.js'
import HomePage from './components/pages/home/Home.js'

export default App = () =>
  e(Router, {},
    e('div', {},
      e(Switch, {},
        e(Route, {exact: true, path: "/", component: HomePage}, null)
      # e(Route, {exact: true, path: "/resume", component: Resume}, null)
        e(Route, {component: NoMatch}, null)
      )
    )
  )

NoMatch = ({location}) => (
  e('div', {},
    e('h3', {}, "No match for <code>#{location.pathname}</code></h3>")
  )
)

