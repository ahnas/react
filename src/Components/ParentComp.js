import React, { Component } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';



class ParentComp extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            name : "Study"
        }

    }

    componentDidMount() {
        setInterval (() => {
            this.setState({
                name : "Study"
            });    
        }, 3000);
    }
    

    render() {
        console.log("Parent Component render")
        return (
            <div> ParentComp
                
                <RegComp name = {this.state.name} />
                <PureComp name = {this.state.name} />

            </div>
        );
    }
}

export default ParentComp;