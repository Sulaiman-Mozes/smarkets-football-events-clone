import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header';
import SubHeader from './components/subHeader';
import Events from './containers/events';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SubHeader />
      <Events />
    </BrowserRouter>
    
  );
}

export default App;
