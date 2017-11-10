import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Transition from './Transition';
import Sidebar from './Sidebar';
import registerServiceWorker from './registerServiceWorker';

if (window.pageYOffset !== 0) {
  console.alert('aaa')
}

ReactDOM.render(<Sidebar />, document.getElementById('root'));
registerServiceWorker();
