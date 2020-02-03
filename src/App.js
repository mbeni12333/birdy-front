import React from 'react';
import Header from './components/header.js';
import Main from './components/main.js';
import Chat from './components/chat.js';
import Navigation from './components/navigation.js';

import './style.css';
import './css/all.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main_container">
          <Navigation />
          <Chat />
          <Main />
      </div>
    </div>
  );
}

export default App;
