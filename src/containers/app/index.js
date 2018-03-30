import React from 'react';
import { Route } from 'react-router-dom';
import { ContactForm } from '../form';

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={ContactForm} />
    </main>
  </div>
);

export default App;
