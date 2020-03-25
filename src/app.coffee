import React from 'react'

e = React.createElement

import './app.css'

import {
  BrowserRouter as Router
  Route
  Switch
} from 'react-router-dom'

# import Resume from './components/pages/resume/resume.coffee'
import HomePage from './components/pages/home/home.coffee'

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