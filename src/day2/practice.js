import React from 'react';
import ReactDOM from 'react-dom';

class Com extends React.Component{
    constructor(){
        super()
        this.state={count:100}
    }
    click=()=>{
        console.log(this);
        // this.setState({count:this.state.count+1})
        this.setState({count:this.state.count+1},function () {
            this.setState({count:this.state.count+1})
        })
        this.setState({count:this.state.count++})

    }
    render(){
        return <div>
            <p>{this.state.count}</p>
            <button onClick={this.click}>+</button>
        </div>
    }
}

ReactDOM.render(<Com/>,window.root)