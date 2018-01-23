import React, { Component, PropTypes } from 'react';

var Intro = React.createClass({
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
      <h5>Enter Details</h5>
      <p>Firstly we need to collect some information from you.</p>
      <p>Please enter the following details so we can get your appeal ready, press continue when you're ready</p>
      <button className="btn btn-lg btn-primary btn-block" onClick={ this.Continue }>Continue</button>
    </div>
    )
  },

  Continue: function(e) {
    e.preventDefault()
    this.props.nextStep()
  }
})

module.exports = Intro