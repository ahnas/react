import React, { Component } from 'react';
import blackBell from './images/blackBell.png';
import redBell from './images/redBell.png';

class NewComp extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            message: "Subscribe to State",
            sub : "Subcribe PLease",
            imageURL : blackBell
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

imgChange = () => {
    this.setState({
        message: "Image change Display",
        imageURL: redBell
    })
}



    render() {
        return (
            <div className='App'>
                <h3 style={this.styl}> {this.state.message} </h3> 
                <button onClick={this.bTchange}> {this.state.sub}</button>
                <br/>
                <img onClick={this.imgChange} src={this.state.imageURL} alt= 'Blackbell'></img>
            </div>
        );
    }
}

export default NewComp;