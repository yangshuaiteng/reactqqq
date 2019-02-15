import React from 'react';
//导入的react是一个对象；对象中有个Component属性；属性值是一个类
import ReactDOM from 'react-dom';
console.log(React);

/* 
类定义组件：
1.需要继承Component这个类；
2.需要在类的原型上添加render方法；
3.render函数一定要有return;return后面可以是任何东西，但是不能没有东西；
4.一般return返回一个顶级的react元素
*/
class Fn extends React.Component{
    constructor(props){
        super()
        console.log(props);
        console.log(this);//undefined
    }
    render(){//这个render是通过实例进行调用的
        console.log(this);// this=>Fn的实例
        //this.props.a=100;//props传递过来的属性不能进行修改；react单项数据流
return <div>{this.props.a}</div>
    }
}
/* 
类声明的组件有状态、this、生命周期；
*/
ReactDOM.render(<Fn a="yst"/>,window.root);
/* 
ReactDOM.render:
1.如果判断当前是一个类组件，首先把行间属性打包成一个对象创建这个组件
2.那么会立即创建这个类的实例；new Fn({a:"yst"});constructor执行完成之后，将传进来数据放到实例的props属性上
3.通过实例调用了原型上的render函数让其执行
4.把render函数的返回值转换成真实的DOM，并且插入到根元素中
*/
