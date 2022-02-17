import React, { Component } from 'react';

class NewComp extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            message: "Subscribe to State",
            sub : "Subcribe PLease"
        };

    }

    styl = {
        fontStyle : "italic",
        color :'red'
    }

bTchange = () => {
    this.setState({
        message: "Hit bell icon",
        sub : "Done Subcribed"
    })
}

    render() {
        return (
            <div className='App'>
                <h3 style={this.styl}> {this.state.message} </h3> 
                <button onClick={this.bTchange}> {this.state.sub}</button>
            </div>
        );
    }
}

export default NewComp;