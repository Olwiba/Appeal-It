import React, { Component, PropTypes } from 'react';

var GetStarted = React.createClass({
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
      <h5>Welcome to Appeal It!</h5>
      <p>Don't you hate fines? So do we, so we decided to do something about it.</p>
      <p>You can read more about our service <a href="#">here</a> and read our Privacy policy and T&amp;Cs <a href="#">here</a>.</p>
      <p>By continuing you agree to  our Privacy policy and T&amp;Cs listed above</p>
      <button className="btn btn-lg btn-primary btn-block" onClick={ this.Continue }>Continue</button>
    </div>
    )
  },

  Continue: function(e) {
    e.preventDefault()
    this.props.nextStep()
  }
})

module.exports = GetStarted