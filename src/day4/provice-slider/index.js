import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './component/Slider'
import './index.css'
let imgs=[require('./images/1.jpg'),require('./images/2.jpg'),require('./images/3.jpg'),require('./images/1.jpg')]
ReactDOM.render(<Slider imgs={imgs}/>,window.root)