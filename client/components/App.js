import React, { Component, PropTypes } from 'react';
import ChatBot from 'react-simple-chatbot';

const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1'
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
