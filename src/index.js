import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './animations.css'
import App from './App';
import animateJumpers from './animateJumpers'

ReactDOM.render(<App />, document.getElementById('root'));
animateJumpers();

console.log(`
  _    _                            _           _    _                            _ 
 | |  | |                          | |  ___    | |  | |                          | |
 | |__| | _____      ____ _ _ __ __| | ( _ )   | |__| | _____      ____ _ _ __ __| |
 |  __  |/ _\\\\ /. / /    | '__/ _  |   / _ \\/ \\|  __  |/ _ \\ \\ /\\ / / _  | '__/ _  |
 | |  | | (_)\\ V V / (_| | | | (_| | |  (_>  < | |  | | (_) \\ V  V / (_| | | | (_| |
 |_|  |_|\\__/\\_/._/ \\__,_|_|  \\__,_|   \\___/./ |_|  |_|.___/ \\_/._/\\__,__|_|  \\__,_|

  Adam Howard
  howard.adamp@gmail.com
  http://adamswebpage.com/

  Brandon Howard
  brandonrhoward@gmail.com
  http://www.brandonrhoward.com/                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
`)
