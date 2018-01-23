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
      <label for="firstName" class="sr-only">First name</label> 
      <input type="text"
             id="firstName"
             ref="firstName"
             className="form-control"
             placeholder="First name"
             defaultValue={ this.props.fieldValues.firstName } />

      <label for="lastName" class="sr-only">Last name</label>
      <input type="text"
             ref="lastName"
             id="lastName"
             className="form-control"
             placeholder="Last name"
             defaultValue={ this.props.fieldValues.lastName } />

      <button className="btn btn-lg btn-primary btn-block" onClick={ this.saveAndContinue }>Save and Continue</button></div>
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