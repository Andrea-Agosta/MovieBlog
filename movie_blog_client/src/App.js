import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar/Navbar';
import List from './components/List/List';

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get('/api/movies', { params: { page: 2 } })
      .then(function (response) {
        setData(response.data);
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
        <Navbar />
      </header>
      <main>
        <List data={data} />
      </main>
    </div>
  );
}

export default App;
