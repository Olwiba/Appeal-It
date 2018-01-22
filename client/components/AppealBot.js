import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';


const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true
  },
];

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

// const steps = [
//   {
//     id: '1',
//     message: 'Hello World',
//     end: true,
//   },
// ];


const AppealBot = () => (
  <ThemeProvider theme={otherFontTheme}>
    <ChatBot steps={[
    {
      id: '1',
      message: 'You can add custom components',
      trigger: '2',
    },
    {
      id: '2',
      component: (
        <div> This is a example component </div>
      ),
      end: true,
    },
  ]} />
  </ThemeProvider>
);

export default AppealBot;