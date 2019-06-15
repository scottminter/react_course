import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import Animal from './Animal/Animal';

/**
 * Functional components
 */
const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Scott', age: 38 },
      { name: 'Jess', age: 35 },
      { name: 'Rudy', age: 1.5 }
    ]
  });

  const [ otherState, setOtherState ] = useState({
    otherState: 'some other value'
  });

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName , age: 38 },
        { name: 'Jess', age: 63 },
        { name: 'Rudy', age: 1.5 }
      ]
    });

    setOtherState({
      otherState: 'yet a new value altogether'
    });
  }

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Scott' , age: 38 },
        { name: event.target.value, age: 63 },
        { name: 'Rudy', age: 1.5 }
      ]
    });
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React app!</h1>
      <p>This is really working!</p>
      {/* The .bind(...) method is preferred */}
      <button
        style={ style }
        onClick={ switchNameHandler.bind(this, 'FooBar') }>Switch Name</button>
      <Person
        name={ personsState.persons[0].name }
        age={ personsState.persons[0].age }
        click={ () => switchNameHandler('Eek this is weird!') } />
      <Person
        name={ personsState.persons[1].name }
        age={ personsState.persons[1].age }
        changed={ nameChangeHandler }> I am almost done for the year!</Person>
      <Person
        name={ personsState.persons[2].name }
        age={ personsState.persons[2].age }
        click={ switchNameHandler } />
      <p>Other State: { otherState.otherState } </p>
      <Animal
        animalName="Dog"
        animalSound="woof" />
      <Animal
        animalName="Cat"
        animalSound="meow" />
    </div>
  );
}

export default app;


// state = {
//   persons: [
//     { name: 'Scott', age: 38 },
//     { name: 'Jess', age: 35 },
//     { name: 'Rudy', age: 1.5 }
//   ]
// }
