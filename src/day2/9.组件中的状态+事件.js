import React from 'react';
import ReactDOM from 'react-dom';
//状态：是组件自己私有的；是可以更改的；
/* 
props:属性；
state:私有；
*/





class Dev extends React.Component{
    constructor(){
        super()
        this.state={count:50}//一般会在constructor中定义状态；
    }
    //在类的原型上定义事件行为的方法；
    add=()=>{
    // this.state.conut++//这样改视图不会刷新
     console.log(this);
     //setState:是对当前组件状态修改的方法;并且可以调用render方法重新执行了从而让视图刷新【这个方法存在当前实例的原型链上】
     this.setState({count:this.state.count+1})//传一个对象；
     //console.log(this.state.count);

     //setState还可以传递一个函数；函数的参数代表上一次的状态
     //如果会同时设置同个状态；那么setState会合并成一个
     //this.setState(prev=>({count:prev.count+1}))

     //如果下一个状态依赖于上一个状态时，变成函数的形式
    // this.setState({count:this.state.count+1},function () {
    //     this.setState({count:this.state.count+1})
    // })
    }
    render(){
        console.log(this);
        //this.state.conut=5000
        return <div>
            <p>{this.state.count}</p>
            <button onClick={this.add}>+</button>
        </div>
    }
}
//react中的事件绑定
/* 
1.事件行为遵循驼峰命名的命名方式 =》onClick；
2.事件行为的属性值大括号中不能为空（如果为空会报错）
*/


ReactDOM.render(<Dev/>,window.root)