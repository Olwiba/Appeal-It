import React, { Component, PropTypes } from 'react';
import ChatBot from 'react-simple-chatbot';

// todo : remove unneeded packages after refactor

const steps = [
  {
    id: '0',
    trigger: '1',
    message: 'Welcome to react test chatbot!'
  },
  {
    id: '1',
    message: 'Bye!',
    end: true
  },
];

class App extends Component {
  static propTypes = {
    //propTypes go here
  };

  constructor(props) {
    super(props);
    this.state = {
      //state goes here
    };
  }

  render() {
    return (
      <ChatBot
        steps={steps}
      />
    );
  }
}

export default App;
