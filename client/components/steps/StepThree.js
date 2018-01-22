import React, { Component, PropTypes } from 'react';

var StepThree = React.createClass({
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
      <label>Ticket Issuer:</label> 
      <input type="text"
             ref="ticketIssuer"
             defaultValue={ this.props.fieldValues.ticketIssuer } />

      <label>Ticket Number:</label> 
      <input type="text"
             ref="ticketNumber"
             defaultValue={ this.props.fieldValues.ticketNumber } />

      <button onClick={ this.saveAndContinue }>Save and Continue</button></div>
    )
  },

  saveAndContinue: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      ticketIssuer : this.refs.ticketIssuer.value,
      ticketNumber : this.refs.ticketNumber.value
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

module.exports = StepThree