import React, { Component } from 'react';

class Counter extends Component {
    

    constructor(props) {
        super(props);
        
        this.state = {
            count : 0
        };
    }

    CountIncrease= () => {
        this.setState({count : this.state.count + 2 })
    }
    
    render() {
        const {count} = this.state;
        return (
            <div>
                <button onMouseEnter={this.CountIncrease}>press to increase || {count} </button> 
            </div>
        );
    }
}

export default Counter;