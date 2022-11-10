import axios from 'axios';
import './App.css';
import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar/Navbar';
import List from './components/List/List';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MoviePage from './components/MoviePage/MoviePage';

function App() {
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState({});

  const fetchData = () => {
    axios.get('/api/movies', { params: { page: 1 } })
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  const handleClick = (data) => {
    setMovie(data);
  };

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
        <Routes>
          <Route path="/" element={<List data={data} handleClick={handleClick} />}></Route>
          <Route path="/movie/*" element={<MoviePage data={movie} />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
