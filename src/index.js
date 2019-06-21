// import "@babel/polyfill"// depricated so use below two ...
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


ReactDOM.render(<App/>, document.getElementById('root'));
