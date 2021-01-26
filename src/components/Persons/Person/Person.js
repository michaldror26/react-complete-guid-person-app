import React, { Component } from 'react'
import classes from './Person.module.css';
import propTypes from 'prop-types'

class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef()
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }
    
    render() {
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>Hi! I'm {this.props.name} and I'm {this.props.age} years old.</p>
                <span>{this.props.children}</span>
                <input
                ref={this.inputElementRef}
                type="text" onChange={this.props.changed} />
            </div>
        )
    }
}
Person.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    changed: propTypes.func
  }
export default Person