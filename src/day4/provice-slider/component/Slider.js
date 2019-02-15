import React from 'react';
 import SliderItem from './SliderItem';
 import SliderDots from './SliderDots';
// import SliderArrow from './SliderArrow'
export default class Slider extends React.Component{
    constructor(){
        super()
        this.state={index:0}
    }
    componentDidMount(){
        this.move()
    }
    go=(pol)=>{
        if (this.state.index===3) {
            this.sliders.style.transitionDuration="0s"
            this.sliders.style.left="0px"
            let left=window.getComputedStyle(this.sliders).left
            this.sliders.style.transitionDuration="0.5s"
            this.setState({index:0})
        }
        this.setState({index:this.state.index+pol})
    }
    move=()=>{
        this.timer=setInterval(()=>{
            this.go(1)
        },1000)
    }
    getSlider=(x)=>{
        this.sliders=x
    }
    render(){
        return <div className="outer" onMouseOver={()=>{clearInterval(this.timer)}} onMouseOut={()=>{this.move()}}>
        <SliderItem imgs={this.props.imgs} index={this.state.index} slider={this.getSlider}/>
        <SliderDots imgs={this.props.imgs} indexDots={this.state.index} go={this.go}/>
        </div>
    }
}