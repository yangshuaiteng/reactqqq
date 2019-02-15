import React from 'react';
export default class SliderDots extends React.Component{
    constructor(){
super()
    }
    render(){
        return <ul className='focus'>
        
{this.props.imgs.map((item,index)=>{
    if (index===this.props.imgs.length-1) {
        return null
    }
    return <li key={index} className={this.props.indexDots===index||this.props.indexDots-index===this.props.imgs.length-1?"active":null} onClick={()=>{this.props.go(index-this.props.indexDots)}}></li>
})}
        </ul>
    }
}