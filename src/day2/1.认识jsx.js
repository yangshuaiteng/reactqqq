/* 
JSX：JS+XML的组合；可以在JS中编写html元素
*/
import React from "react";
import ReactDOM from 'react-dom';
import './index.css'
//render:是ReactDOM中的一个函数



//将<div>123</div> 这个元素放进全局下id名是root的元素中;
//1.JSX元素不是一个真实的DOM；JSX是一个虚拟的DOM元素，是一个对象数据类型的
//2.JSX元素必须被一个闭合的标签包裹起来（只能有一个根元素）
//3.JSX中采用{}进行获取值的操作；
//4.JSX元素中取值时，{}不能直接放对象；但是可以放数组；如果放的是数组的话会把数组每一项转换成字符串进行连接，一起放进元素中；
//5.如果{}中的值为true/false/null/undefined这些值将不再显示
//6.JSX元素中的{}支持三元表达式；
//7.支持函数的执行结果（可以返回标签）
//8.style 不支持字符串的类型，需要转成{{}}
//9.改写法|如果是class===》className  for===>htmlFor



//render方法：1）参数1是虚拟的DOM元素；参数2是将要挂载的元素    
//2）render方法是将虚拟的DOM元素先转成正式的DOM元素
//3）然后将真实DOM元素注入到root根元素中
function name(params) {
    return <div>傻狗</div>
}

let label = <div className="bg" style={{color:'white'}}>
    123 {[1,2,3]}{5>2?'我最潇洒':null}{name()} 
</div>
ReactDOM.render(label, document.getElementById("root"))