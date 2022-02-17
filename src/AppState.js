import React, { Component } from 'react';
import NewComp from './Components/NewComp';






class AppState extends Component {
    styles = {
        color : 'brown',
    };

    render() {
        return (
            <div className='StateApp'>
                <h1 style={this.styles}> State App2</h1>
                <hr/>
                <br/>
                <NewComp/>
            </div>
        );
    }
}

export default AppState;