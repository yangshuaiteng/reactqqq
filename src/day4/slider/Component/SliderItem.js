import React from 'react';
export default class SliderItem extends React.Component{
    constructor(){
        super()
    }
    render(){
       // console.log(this.props.imgs);
        let style={
            left: -this.props.index*400+ 'px',//由于图片向左移动；所以需要给left加上<->
            transition:`left .5s linear`
        }
        return <ul className="wrapper" style={style} ref={this.props.slider}>
                {this.props.imgs.map((item,index)=>{
                   return <li key={index}>
                       <img src={item} alt="" />
                   </li>
                })}
        </ul>
    }
}