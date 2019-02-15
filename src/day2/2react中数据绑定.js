import React from 'react';
import ReactDOM from 'react-dom'
//将数组中的每一项循环到每一个li中 
let arr=[{name:"yst"},{name:"yst"},{name:"yst"},{name:"yst"},{name:"yst"},{name:"yst"}];
/* 
在react中经常使用数组的map方法来遍历数据，创建出新的DOM来
*/

let ul=<ul>
    {arr.map((item,index)=>{
        return <li key={index}>{item.name}</li>
    })}
</ul>

ReactDOM.render(ul,window.root)