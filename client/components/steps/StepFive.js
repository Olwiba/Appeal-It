import React, { Component, PropTypes } from 'react';

var StepFive = React.createClass({
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

      <label>Ticket type:</label> 
      <select name="ticket-type" ref="ticketType">
        <option value="overstay">Overstay</option>
        <option value="noDisplay">No display</option>
      </select>

      <button onClick={ this.saveAndContinue }>Save and Continue</button></div>
    )
  },

  saveAndContinue: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      overstay : (this.refs.ticketType.value === "overstay") ? true : false,
      noDisplay : (this.refs.ticketType.value === "noDisplay") ? true : false
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

module.exports = StepFive