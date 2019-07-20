import React, { Component } from 'react';
import './Char.css'

class Char extends Component {
    render() {
        return (
            <div id="charComponent" onClick={this.props.clicked}>
            {this.props.char}
            </div>
        );
    }
}

export default Char;
