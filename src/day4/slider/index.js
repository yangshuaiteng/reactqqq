import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Component/Slider'
import './index.css'//在React中.js或.json后缀可以省略；别的不可以；如果是同级路径，./是不可以省略的；
//webpack打包的图片路径不支持相对路径；支持绝对路径
let images = [require("./images/1.jpg"), require("./images/2.jpg"), require("./images/3.jpg"), require("./images/1.jpg")]
ReactDOM.render(<Slider imgs={images}/>, window.root)