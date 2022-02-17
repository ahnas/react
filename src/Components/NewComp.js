import React, { Component } from 'react';

class NewComp extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            message: "Subscribe to State",
            sub : "Sub text"
        };

    }

    styl = {
        fontStyle : "italic",
        color :'red'
    }

    
    render() {
        return (
            <div className='App'>
                <h3 style={this.styl}> {this.state.message} </h3> 
                <button> {this.state.sub}</button>
            </div>
        );
    }
}

export default NewComp;