import React from 'react';
import ReactDOM from 'react-dom';

const title = 'minimal react setup';
const des = 'react 16 - webpack 4 - babel /w next features - hot modules replacement'

ReactDOM.render(
  <div>{title} / {des}</div>,
  document.getElementById('app')
);

module.hot.accept();