import React from 'react';//react :是reacct的核心模块
import ReactDOM from 'react-dom';//提供和DOM相关的功能，会在window下新增一个ReactDOM属性，ReactDOM属性下有一个render方法（将react元素或组件插入到页面中）
//let oDom=<div></div>
//JSX元素实际上是React.createElement的一个语法糖
/* React.createElement(type,prop,children)
type:当前的标签类型(什么标签)
prop:行内属性（如果不要行内属性要用null占位）例如：{attr:"yst"}
children:子节点;从第三个实参开始，代表当前元素的子节点；
let b=React.createElement("p",{attr:"yst"},"潇洒")

可以嵌套
let b=React.createElement("p",{attr:"yst"},"潇洒"，React.createElement("p",null,"潇洒"))

*/

let bDom=React.createElement("p",{attr:"yst"},"潇洒",React.createElement("p",null,"潇洒"),React.createElement("p",null,"潇洒"))

ReactDOM.render(bDom,window.root);