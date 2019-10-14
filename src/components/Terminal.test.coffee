import React from 'react'
e = React.createElement

import ReactDOM from 'react-dom'
import Terminal from './Terminal'

it 'renders without crashing', () =>
  div = document.createElement 'div'
  ReactDOM.render e(Terminal, {}, null), div
  ReactDOM.unmountComponentAtNode div

  return # nothing
