###
eslint-disable
###

import React from 'react'
e = React.createElement

import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'

ReactDOM.render e(App, {}, null), document.getElementById('root')
