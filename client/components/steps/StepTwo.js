import React, { Component, PropTypes } from 'react';

var StepTwo = React.createClass({
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
      <label for="registration" class="sr-only">Registration plate</label> 
      <input type="text"
             id="registration"
             ref="registration"
             className="form-control"
             placeholder="Registration plate"
             defaultValue={ this.props.fieldValues.registration } />

      <button className="btn btn-lg btn-primary btn-block" onClick={ this.saveAndContinue }>Save and Continue</button></div>
    )
  },

  saveAndContinue: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      registration : this.refs.registration.value
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

module.exports = StepTwo