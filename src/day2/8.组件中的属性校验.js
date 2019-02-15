import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types"
/* 
组件中的数据来源有两个：
1.props从父组件传递过来的是属性；由于react单向数据流，所以不能更改
2.state是组件中自己私有的；可以修改；通过setState去更改状态；从而让视图刷新
组件中只有当属性或者状态发生改变，才会重新渲染视图；
*/
class Text extends React.Component{
    static propTypes={
        num:PropTypes.number.isRequired
        //常用的属性校验类型
        //isRequired必填
        
    }
    static defaultProps={//默认值
        //如果父组件有传递过来属性，那么使用传递过来的属性；如果没有值使用默认的属性值
        n:100
    }
    constructor(){
        super();

    }
    render(){
        return <div>{this.props.num} {this.props.n}</div>
    }
}
ReactDOM.render(<Text num="1" n="sjkdh"/>,window.root)