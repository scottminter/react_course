import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from './../hoc/Aux';

class App extends Component {
  constructor (props) {
    super(props);
    console.log('App.js constructor');
  }
  state = {
    persons: [
      {id: '34wga', name: 'Scott', age: 38},
      {id: '8fl7erky', name: 'Jessie', age: 35},
      {id: 'a6f5ae', name: 'Rudy', age: 1.5}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  static getDerivedStateFromProps (props, state) {
    console.log('App.js getDerivedStateFromProps');
    console.log(props);
    return state;
  }

  componentDidMount () {
    console.log('App.js: componentDidMount');
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('App.js: shouldComponentUpdate');
    return true;
  }

  componentDidUpdate () {
    console.log('App.js: componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {
    console.log('App.js render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
      );
    }

    return (
        <Aux>
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
          {persons}
        </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.app);
