import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//在React实例生成的过程中会不断的调用一些函数；那么这些函数就是这个生命周期的钩子函数
//每一个组件都有自己的生命周期；
class Count extends Component {
    static defaultProps={//该对象会把属性放到实例的Props属性上
        b:100//如果有b这个值，不在使用这个默认值；如果没有才会使用这个默认值
    }
    constructor() {
        super();
        this.state={num:100}
    }
    //组件将要挂载之前执行的钩子函数
    componentWillMount(){
        //setState在componentWillMount中是同步的=》setState不设置成功是不往下走的（不设置没关系）
        this.setState({num:99})
    }
    //组件挂载完成所调用的钩子函数；
    componentDidMount(){
        //经常用于操作DOM元素
       // console.log(document.getElementById("box"));
    }
    shouldComponentUpdate(nextProps,nextState){
        //nextProps代表下一次的属性
        //nextState代表下一次的状态
      //  console.log(should);
        //当数据更新时会先触发这个函数，如果该函数返回false不在调用下面的钩子函数，如果返回true会继续调用后面的钩子函数；【必须要返回一个布尔值true/false】

        //react性能优化
return true
    }
    //组件将要更新
    componentWillUpdate(){

    }
    //组件更新完成之后
    componentDidUpdate(){
// 当所有的子组件更新完成之后，才会触发父组件身上的这个钩子函数
    }
    //当组件销毁时，触发该函数；组件销毁；DOM结构也会随着消失
    componentWillUnmount(){
//react中组件的事件和定时器，可以在这个方法中清除
    }
    add=()=>{ 
//ReactDOM.unmountComponentAtNode()：卸载某个节点下的组件
        this.setState({num:this.state.num+1})
    }
    render() {//组件正在挂载
        return <div id="box">
            {this.state.num}
            <button onClick={this.add}>+</button>
            <Child m={this.state.num}/>
        </div>
    }
}

//生命周期：
//实例的初始化：defaultProps===》constructor===》componentWillMount===》render===》componentDidMount
//组件的数据更新：shouldComponentUpdate===》componentWillUpdate===》render===》componentDidUpdate【如果有子组件的话componentWillReceiveProps在componentDidUpdade之前】

class Child extends React.Component{
    constructor(){
        super()
    }
    //组件将要接收属性（render之前）
    componentWillReceiveProps(){
// 当第一次接收父组件传递过来的数据时，不执行该函数；之后只要父组件状态发生变化就会触发该钩子函数；
    }

    render(){
        return <div>{this.props.m}</div>
    }
}
ReactDOM.render(<Count a="99"/>, window.root)