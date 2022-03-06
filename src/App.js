import React from 'react';
import { Provider } from 'jotai';
import Hello from './Hello';

const App = () => (
  <Provider>
    <Hello />
  </Provider>
);

export default App;
