//function
//class定义:定义的组件有this、状态、生命周期；
//在项目工作中；如果当前的元素是静态的不变的一般会用function的方法定义组件；
//如果当前中的元素是由数据渲染出来的，一般会采用class的方法定义
//只有属性或状态可以使视图刷新
import React from 'react';
import ReactDOM from 'react-dom';
class Parent extends React.Component{
    constructor(){
        super()
        this.state={a:100}//一般在constructor中定义状态
    }
    addNum=(count)=>{
        // this.setState({a:this.state.a+5})
        this.setState({a:this.state.a+count})
    }
    render(){
        return <div>
            <Child m={this.state.a}/>
            {/* <button onClick={this.addNum}>+</button> */}
            {/* <button onClick={this.addNum.bind(this,2)}>+</button> */}
            <button onClick={()=>{this.addNum(3)}}>+</button>
            <button onClick={()=>{this.addNum(5)}}>+</button>
        </div>
    }
}
//一个组件在另一个组件中进行使用，那么这个组件就是另一个组建的子组件；
class Child extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div>{this.props.m}</div>
    }
}
ReactDOM.render(<Parent/>,window.root)