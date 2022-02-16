import React, { Component } from 'react';

import UpdatedComp from './HigherOrder';

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
                <button onMouseEnter={this.CountIncrease}> {this.props.name} press to increase || {count} </button> 
            </div>
        );
    }
}

export default UpdatedComp(Counter) ;