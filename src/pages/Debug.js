import React, { Component } from 'react'

class Debug extends Component {
    
    constructor(props){
        super(props);

        this.state = {count: 0};
    }    

    handleClick() {
        this.setState({
            count: this.state.count + 1
        }, function() {
            console.log('whoop');
        });
    }

    render() {
        return (
            <div className="clicker">
                <h1>clicks: {this.state.count}</h1>
                <button onClick={this.handleClick.bind(this)}>Click me!</button>
            </div>

        );
    }
}

export default Debug