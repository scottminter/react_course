import React, {Component} from 'react';
import Aux from './../../../hoc/Aux';
import styles from './Person.css';

class Person extends Component {
  render () {
    return (
      <Aux>
        <div className={styles.Person}>
          <p onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age} years old!
          </p>
          <p>{this.props.children}</p>
          <input
            type="text"
            onChange={this.props.changed}
            value={this.props.name}/>
        </div>
      </Aux>
    );
  };
}

export default Person;

// const person = (props) => {
//   return (
//     <div className={ styles.Person }>
//       <p onClick={ props.click }>I'm { props.name } and I am { props.age } years old!</p>
//       <p>{ props.children }</p>
//       <input type="text" onChange={ props.changed } value={ props.name }/>
//     </div>
//   );
// }

// export default person;
