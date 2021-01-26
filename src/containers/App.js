import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      { id: 'g58f6e', name: 'nir', age: 23 },
      { id: 'r58f6e', name: 'miryam', age: 32 },
      { id: 'e58f6e', name: 'sara', age: 45 }
    ],
    doShow: true,
    showCockpit: true
  }
  togglePersons = () => {
    this.setState({ doShow: !this.state.doShow })
  }
  renamePerson = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        persons: persons 
      }
    })
  }

  deletePerson = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  render() {
    let persons = null;

    if (this.state.doShow) {
      persons = <div>
        <Persons 
        persons={this.state.persons}
        click={this.deletePerson}
        changed={this.renamePerson}
         />
        </div>
    }

    return (
      <div className="App">
        <button onClick={() => this.setState({showCockpit: !this.state.showCockpit})}>toggle Cockpit</button>

        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>

        { this.state.showCockpit ?
        <Cockpit showPersons={this.state.doShow}
        clicked={this.togglePersons}
            personsLength={this.state.persons.length} /> : null}
        {persons}
      </div>
    );
  }
}

export default App;
