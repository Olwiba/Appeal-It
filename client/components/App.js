import React, { Component, PropTypes } from 'react';
import ChatBot from 'react-simple-chatbot';

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
        steps={[
          {
            id: 'hello-world',
            message: 'Hello World!',
            end: true,
          },
        ]}
      />
    );
  }
}

export default App;
