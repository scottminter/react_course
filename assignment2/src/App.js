import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Input from './InputComponent/Input';
import Char from './CharComponent/Char';

class App extends Component {
  state = {
    charCount: 0,
    wordCount: 0,
    userInput: ''
  };

  textChangeHandler = (event) => {
    const inputValue = event.target.value;
    let wordArr = event.target.value.split(' ');

    if (wordArr.length === 1 && wordArr[0] === '') {
      wordArr = [];
    }

    this.setState({charCount: inputValue.length});
    this.setState({wordCount: wordArr.length});
    this.setState({userInput: inputValue});
  }

  charClickedHandler = (charIndex) => {
    let chars = this.state.userInput;
    chars = chars.slice(0, charIndex) + chars.slice(charIndex + 1);
    this.setState({userInput: chars});
  }

  render () {
    let userInput = null;
    if (this.state.userInput) {
      userInput = (
        <div className="user-input-char">
          {
            this.state.userInput.split('').map((c, index) => {
              return (
                <Char
                  key={ index + 'abc'}
                  clicked={ () => this.charClickedHandler(index) }
                  index={ index }
                  character={ c } />
              );
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <Header />
        <Input
          changed={ this.textChangeHandler }
          charCount={ this.state.charCount }
          wordCount={ this.state.wordCount }
          chars={ this.state.userInput } />
          <h3>Char List</h3>
          { userInput }
      </div>
    );
  }
}

export default App;
