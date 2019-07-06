import React, { Component } from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Persons extends Component {

  shouldComponentUpdate (nextProps, nextState) {
    console.log('Persons.js: shouldComponentUpdate');
    if (nextProps.persons !== this.props.persons) {
      console.log('component should update');
      return true;
    } else {
      return false;
    }
  }

  render () {
    return this.props.persons.map((person, index) => {
      return <ErrorBoundary key={person.id}>
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={(event) => this.props.changed(event, person.id)} />
      </ErrorBoundary>;
    });
  };
}

export default React.memo(Persons);

// const persons = (props) => props.persons.map((person, index) => {
//   console.log('Persons.js rendering...');
//   return <ErrorBoundary key={ person.id }><Person
//     click={ () => props.clicked(index) }
//     name={ person.name }
//     age={ person.age }
//     changed={ (event) => props.changed(event, person.id) } />
//   </ErrorBoundary>
// });

// export default persons;
