import React from 'react'
e = React.createElement

import { ThemeProvider } from "@material-ui/styles"

import {
  AppBar
  CssBaseline
  IconButton
  Tab
  Tabs
  Typography
  createMuiTheme
} from "@material-ui/core"

import CodeIcon from '@material-ui/icons/CodeOutlined'
import DescriptionIcon from '@material-ui/icons/DescriptionOutlined'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'

import './home.scss'

import Term from '../../terminal.coffee'

class HomePage extends React.Component
 constructor: (props) ->
    super props
    @THEME = createMuiTheme(
      palette: {
        type: "dark"
      }
    )
    @TABS = [
      e(Term, {}, null)
      e(Typography, {style: {marginTop: 50}}, "todo: blog")
      e(Typography, {style: {marginTop: 50}}, "todo: resume")
    ]
    @state =
      navbar_collapsed: false
      current_tab: 1

  toggleNav: ->
    this.setState({navbar_collapsed: !@state.navbar_collapsed})

  setTab: (n) ->
    this.setState({current_tab: n})

  render: ->
    e(ThemeProvider, {theme: @THEME},
      e(CssBaseline, {})
      e(AppBar, {color: "inherit", role: "navigation"},
        e(Tabs, {value: @state.current_tab, variant: "fullWidth", onChange: (e, v) => @setTab(v)},
          e(Tab, {value: 1, icon: e(CodeIcon, {}, null)}, null)
          e(Tab, {value: 2, icon: e(DescriptionIcon, {}, null)}, null)
          e(Tab, {value: 3, icon: e(AssignmentIndIcon, {}, null)}, null)
        )
      )
      @TABS[@state.current_tab - 1]
    )

export default HomePage
