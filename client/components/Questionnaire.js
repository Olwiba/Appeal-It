import React, {
	Component,
	PropTypes
} from 'react';
import GetStarted from './Steps/GetStarted';
import Intro from './Steps/Intro';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree';
import StepFour from './Steps/StepFour';
import StepFive from './Steps/StepFive';
import Completed from './Steps/Completed';

var fieldValues = {
	firstName: null,
	lastName: null,
	registration: null,
	ticketIssuer: null,
	ticketNumber: null,
	location: null,
	overstay: null,
	noDisplay: null
}

var Questionnaire = React.createClass({
	getInitialState: function () {
		return {
			step: 1
		}
	},

	saveValues: function (fields) {
		return function () {
			// Remember, `fieldValues` is set at the top of this file, we are simply appending
			// to and overriding keys in `fieldValues` with the `fields` with Object.assign
			// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
			fieldValues = Object.assign({}, fieldValues, fields)
		}()
	},

	nextStep: function () {
		this.setState({
			step: this.state.step + 1
		})
	},

	// Same as nextStep, but decrementing
	previousStep: function () {
		this.setState({
			step: this.state.step - 1
		})
	},

	render: function () {
		switch (this.state.step) {
			case 1:
			return <GetStarted fieldValues = {
				fieldValues
			}
			nextStep = {
				this.nextStep
			}
			/>
			case 2:
			return <Intro fieldValues = {
				fieldValues
			}
			nextStep = {
				this.nextStep
			}
			/>
			case 3:
				return <StepOne fieldValues = {
					fieldValues
				}
				nextStep = {
					this.nextStep
				}
				saveValues = {
					this.saveValues
				}
				/>
			case 4:
				return <StepTwo fieldValues = {
					fieldValues
				}
				nextStep = {
					this.nextStep
				}
				previousStep = {
					this.previousStep
				}
				saveValues = {
					this.saveValues
				}
				/>
			case 5:
				return <StepThree fieldValues = {
					fieldValues
				}
				nextStep = {
					this.nextStep
				}
				previousStep = {
					this.previousStep
				}
				saveValues = {
					this.saveValues
				}
				/>
			case 6:
				return <StepFour fieldValues = {
					fieldValues
				}
				nextStep = {
					this.nextStep
				}
				previousStep = {
					this.previousStep
				}
				saveValues = {
					this.saveValues
				}
				/>
			case 7:
				return <StepFive fieldValues = {
					fieldValues
				}
				nextStep = {
					this.nextStep
				}
				previousStep = {
					this.previousStep
				}
				saveValues = {
					this.saveValues
				}
				/>
			case 8:
				return <Completed fieldValues = {
					fieldValues
				}
				/>
		}
	}
})

module.exports = Questionnaire