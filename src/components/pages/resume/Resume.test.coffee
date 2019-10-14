import React from 'react'
e = React.createElement

import ReactDOM from 'react-dom'
import Resume from './Resume'

it 'renders without crashing', () =>
  div = document.createElement 'div'
  ReactDOM.render e(Resume, {}, null), div
  ReactDOM.unmountComponentAtNode div

  return # nothing
