import React from 'react';
import ReactDOM from 'react-dom';
//组件的数据更新
class Myjrsms extends React.Component{
    static defaultProps(){//设置的默认值
//（1）组件初始化先触发这个
console.log("defaultProps");

    }
    constructor(){
        super()
        //（2）在这里面设置state状态
        console.log("constructor"); 
        this.state={num:100}
    }
    componentWillMount(){
//(3)组件挂载前要执行的钩子函数
console.log("componentWillMount");

    }
    shouldComponentUpdate(){//当数据更新时会先触发这个函数，如果函数返回true会调用下面的钩子函数，如果返回false不再调用下面的钩子函数
        console.log("shouldComponentUpdate");
        return true
    }
    componentWillUpdate(){
        console.log("componentWillUpdate");
        
    }
    add=()=>{
    
        
        this.setState({num:this.state.num+1})
    }
    render(){
        console.log("render");
        return <div>
            {this.state.num}
            <button onClick={this.add}>add</button>
            <Child/>
        </div> 
        //（4）组件挂载时要执行的钩子函数
    }
    componentDidMount(){
        console.log("componentDidMount");
//（5）组件挂在完成要执行的钩子函数
    }
    componentDidUpdate(){
console.log("componentDidUpdade");

    }
}

class Child extends React.Component{
    constructor(){
        super()
        this.state={son:991}
    }
    componentWillReceiveProps(){
        // 当第一次接收父组件传递过来的数据时，不执行该函数；之后只要父组件状态发生变化就会触发该钩子函数；
        console.log("componentWillReceiveProps");
            }
    add=()=>{
        this.setState({son:this.state.son+1})
    }
    render(){
        return <div>
{this.state.son}
<button onClick={this.add}>+</button>
        </div>
    }
}

ReactDOM.render(<Myjrsms/>,window.root)
