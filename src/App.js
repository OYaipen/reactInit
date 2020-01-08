import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// Import Components
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Init OYaipen
        </p>
        <div className="components">
          <MyComponent />
        </div>
      </header>
    </div>
  );
}

export default App;
