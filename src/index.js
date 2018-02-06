import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './animations.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import animateJumpers from './animateJumpers'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
animateJumpers();
