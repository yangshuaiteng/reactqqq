import React,{Component} from 'react';
import ReactDOM from 'react-dom';
let a=<div id="box">123</div>
let box =document.getElementById("box");//只能获取上下文是document下的元素
console.log(box);

ReactDOM.render(a,window.root,function () {
    //回调函数是真实DOM都渲染完毕之后执行的该函数
    let box =document.getElementById("box");
console.log(box);
})