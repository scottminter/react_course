import React, {useState} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

function App() {
  const defaultUserInput = 'Default Input Value';
  const [userInputState, setUserInputState] = useState(defaultUserInput);

  const userInputHandler = (event) => {
    setUserInputState(event.target.value);
  }

  return (
    <div className="App">
      <h1>Assignment 1</h1>
      <UserInput
        placeholderText={userInputState}
        changed={userInputHandler} />
      <UserOutput
        defaultUserInputValue={defaultUserInput}
        userInput={userInputState} />
      <UserOutput
        defaultUserInputValue={defaultUserInput}
        userInput={userInputState} />
    </div>
  );
}

export default App;
