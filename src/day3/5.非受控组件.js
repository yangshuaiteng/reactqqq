import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class User extends Component {
    constructor() {
        super()
        this.state = { sum: 0 }
    }
    changeSum = () => {
        //利用了事件的冒泡传播，触发了div身上的onChange事件；
        console.log(this.refs);
        //1.获取元素的方法:给当前元素加上ref属性，当前元素就会挂载到当前实例的refs属性上；this.refs.a(ref后面的名字自己看着来)
        //2.ref接收一个函数，并且函数的第一个参数代表当前的DOM元素
        this.setState({
            sum: Number(this.refs.a.value) + Number(this.refs.b.value)
                + Number(this.b.value)
        })//这是接收函数的那个
    }
    render() {
        return <div onChange={this.changeSum}>
            <input type="text" ref="a" />+
            <input type="text" ref="b" />+
            <input type="text" ref={x => this.b = x} />=
            {this.state.sum}
        </div>
    }
}
ReactDOM.render(<User />, window.root)