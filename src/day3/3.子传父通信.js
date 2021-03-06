import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"

class Panel extends Component{
    constructor(){
        super()
        this.state={color:"success"}
    }
    changeColor=(color)=>{
        //因为状态只能自己进行修改;需要将此方法传递到子组件中；当子组件中的事件行为触发时，调用此函数;子组件通过传递过去的方法改变父组件中的状态；
        console.log({...this.state});
        this.setState({...this.state,color})
    }
    render(){
return <div className="container">
    <div className={`panel panel-${this.state.color}`}>
    <Header change={this.changeColor}/>
    </div>
</div>
    }
}
class Header extends Component{
    constructor(){
        super()
    }
    render(){
return <div className="panel-heading">
<button onClick={()=>{this.props.change("warning")}}>变粉</button>
<button onClick={()=>{this.props.change("primary")}}>变蓝</button>
</div>
    }
}
ReactDOM.render(<Panel/>,window.root)