import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from "./components/material-ui";

function App() {
	return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <Button 
          variant="contained" 
          color="primary" 
        >
          Submit
        </Button>
      </section>
			<footer className="App-footer">
				(c) Copyright - Mike Ludemann
			</footer>
    </div>
	);
}

export default App;
