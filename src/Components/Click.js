import React, { Component } from 'react';

class Click extends Component {
    

    constructor(props) {
        super(props);
        
        this.state = {
            count : 0
        };
    }

    UpdateClick = () => {
        this.setState({count : this.state.count + 2 })
    }
    
    render() {
        const {count} = this.state;
        return (
            <div>
                <button onClick={this.UpdateClick}>press to increase || {count} </button> 
            </div>
        );
    }
}

export default Click;