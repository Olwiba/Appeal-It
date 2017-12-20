[
  {
    id: '1',
    message: 'Hello, Welcome to Appeal it.',
    trigger: '2',
  },
  {
    id: '2',
    message: 'Are you here to appeal a parking ticket?',
    trigger: '3',
  },
  {
    id: '3',
    user: true,
    validator: (value) => {
      if (typeof(value) !== 'string') {
        return 'value should be a string';
      }
      return true;
    },
    trigger: '4',
  },
  {
    id: '4',
    message: 'Awesome! Lets move onto the next step.',
    end: true,
  },
]
