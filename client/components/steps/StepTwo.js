import React, { Component, PropTypes } from 'react';

var StepOne = React.createClass({
  render: function() {
    return ( 
    <div>
      <label>First name:</label> 
      <input type="text"
             ref="firstName"
             defaultValue={ this.props.fieldValues.firstName } />

      <label>Last name:</label>
      <input type="text"
             ref="lastName"
             defaultValue={ this.props.fieldValues.lastName } />

      <button onClick={ this.saveAndContinue }>Save and Continue</button></div>
    )
  },

  saveAndContinue: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      firstName     : this.refs.name.getDOMNode().value,
      lastName : this.refs.password.getDOMNode().value
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

module.exports = StepOne