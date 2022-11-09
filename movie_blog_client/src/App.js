import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get('/api')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  // TODO
  // LOGO
  // LOOKING FOR NPM PACKAGE AUTH

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
