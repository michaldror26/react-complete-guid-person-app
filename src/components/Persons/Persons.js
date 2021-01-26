import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  
  // shouldComponentUpdate(nextProps, nextState) {
    // console.log('[Persons.js] shouldComponentUpdate');

    // if (nextProps.persons !== this.props.persons ||
    //   nextProps.changed !== this.props.changed ||
    //   nextProps.click !== this.props.click) {
    //   return true;
    // } else {
    //   return false;
    // }
  //  }

   componentDidMount() {
    console.log("componentDidMount")
   } 
   
   componentWillUpdate() {
    console.log("componentWillUpdate")
   }  
   componentDidUpdate() {
    console.log("componentDidUpdate")
   }
  
  render() {
   return this.props.persons.map((person, index) => {
          return <Person
            click={() => this.props.click(index)}
            changed={(event) => this.props.changed(event, person.id)}
            name={person.name}
            age={person.age}
            key={person.id} />
        })
      }
    }


export default Persons;