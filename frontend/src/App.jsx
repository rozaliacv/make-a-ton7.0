// src/App.jsx
import React from 'react';
import NeededForm from './NeededForm';
import RegisteredUserForm from './RegisteredUserForm';
import DonationForm from './DonationForm';

const App = () => {
  return (
    <div>
      <h1>Community Support Forms</h1>
      <NeededForm />
      <hr />
      <RegisteredUserForm />
      <hr />
      <DonationForm />
    </div>
  );
};

export default App;
