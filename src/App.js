import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import StudentForm from './components/StudentForm';
import ErrorBoundary from './components/ErrorBoundary';
import Teachers from './Teachers';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <ErrorBoundary>
          <StudentForm />
        </ErrorBoundary>

        <Teachers />
      </div>
    );
  }
}

export default App;
