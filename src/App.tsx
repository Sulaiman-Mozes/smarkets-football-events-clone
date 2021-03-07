import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header';
import Events from './containers/events';
import EventDetails from './containers/event';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Events />
      <EventDetails/>
    </BrowserRouter>
    
  );
}

export default App;
