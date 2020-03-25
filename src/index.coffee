import ReactDOM from 'react-dom'
import React from 'react'
e = React.createElement

import 'bootstrap/dist/css/bootstrap.min.css'
import App from './app.coffee'

ReactDOM.render e(App, {}, null), document.getElementById('root')
