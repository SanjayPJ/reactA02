import React, { Component, PropTypes } from 'react';
import Validation from './components/Validation'
import Char from './components/Char'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    entered_string: ''
  }

  change_listener = (event) => {
    let entered_string = event.target.value;
    this.setState({
      entered_string: entered_string
    })
  }

  deleteChar = (index) => {
    let entered_string = this.state.entered_string;
    entered_string  = entered_string.split("");
    entered_string.splice(index ,1);
    entered_string = entered_string.join("");
    this.setState({
      entered_string: entered_string
    })
  }

  render(){
    let {entered_string} = this.state;
    entered_string = entered_string.split("");
    return (
    <div className="App">
      <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <input type="text" onChange={this.change_listener} value={this.state.entered_string}/>
        <p>Length of the String :: {this.state.entered_string.length}</p>
        <Validation strLength={this.state.entered_string.length} />
        
        {entered_string.map((chr, index) => {
          return (<Char clicked={this.deleteChar.bind(this, index)} char={chr} key={index}/>)
        })}
    </div>
  );
  }
}

export default App;
