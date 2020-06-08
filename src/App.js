import React from 'react';
import './App.css';
import BulletinBoard from './BulletinBoard.js';
import Navigation from './Navigation.js'

function App() {
  return (
    <div className="App">
        <Navigation/>
        <BulletinBoard />
    </div>
  );
}

export default App;
