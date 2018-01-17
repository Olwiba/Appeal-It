import React, { Component, PropTypes } from 'react';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';

var inputValues = {
	firstName: null,
	lastName: null
}

var Questionnaire = React.createClass({
	getInitialState: function() {
		return {
			step: 1
		}
	},
	
	saveValues: function(fields) {
		return function() {
		  // Remember, `fieldValues` is set at the top of this file, we are simply appending
		  // to and overriding keys in `fieldValues` with the `fields` with Object.assign
		  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
		  fieldValues = Object.assign({}, fieldValues, fields)
		}()
	  },
	  
	  nextStep: function() {
		this.setState({
		  step : this.state.step + 1
		})
	  },
	  
	  // Same as nextStep, but decrementing
	  previousStep: function() {
		this.setState({
		  step : this.state.step - 1
		})
	  },

	render: function() {
		switch (this.state.step) {
			case 1:
				return <StepOne fieldValues={fieldValues}
								nextStep={this.nextStep}
								saveValues={this.saveValues} />
			case 2:
				return <StepTwo fieldValues={fieldValues}
								nextStep={this.nextStep}
								previousStep={this.previousStep}
								saveValues={this.saveValues} />
		}
	}
})

module.exports = Questionnaire