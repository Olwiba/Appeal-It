import React, { Component, PropTypes } from 'react';

var StepOne = React.createClass({
  render: function() {
    return ( 
    <div>
      {console.table([
        ["firstName", this.props.fieldValues.firstName],
        ["lastName", this.props.fieldValues.lastName],
        ["registration", this.props.fieldValues.registration],
        ["ticketIssuer", this.props.fieldValues.ticketIssuer],
        ["ticketNumber", this.props.fieldValues.ticketNumber],
        ["location", this.props.fieldValues.location],
        ["overstay", this.props.fieldValues.overstay],
        ["noDisplay", this.props.fieldValues.noDisplay]
      ])}
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
      firstName : this.refs.firstName.value,
      lastName : this.refs.lastName.value
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

module.exports = StepOne