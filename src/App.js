import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <ToastContainer autoClose={3000}/>
    </BrowserRouter>
  );
}

export default App;
