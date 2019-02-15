import React,{Component} from 'react';
import ReactDOM from 'react-dom';

        //受控组件一般是针对表单元素的

class User extends Component{
    constructor(){
        super()
        this.state={num:''}
    }
    change=(m,e)=>{//受控组件如果想要改内容；必须通过更改状态来影响内容
        console.log(e.target.value);//当事件触发的一瞬间，那么事件的对象是存在的；当方法执行完成，那么会被赋默认值null;
        console.log(e);
        this.setState({num:e.target.value})
    }
    render(){
        //组件依赖状态；
        return <div>
            <input type="text" value={this.state.num} onChange={(e)=>{this.change(5,e)}}/>
            {this.state.num}
        </div>
    }
}

ReactDOM.render(<User/>,window.root)