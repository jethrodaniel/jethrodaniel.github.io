// Generated by CoffeeScript 2.5.1
var e;

import React from 'react';

e = React.createElement;

import ReactDOM from 'react-dom';

import Terminal from './Terminal';

it('renders without crashing', () => {
  var div;
  div = document.createElement('div');
  ReactDOM.render(e(Terminal, {}, null), div);
  ReactDOM.unmountComponentAtNode(div); // nothing
});
