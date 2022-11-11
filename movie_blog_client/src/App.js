import axios from 'axios';
import './App.css';
import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar/Navbar';
import List from './components/List/List';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MoviePage from './components/MoviePage/MoviePage';
import Footer from './components/Footer/Footer';

function App() {
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState({});

  const fetchData = () => {
    axios.get('/api/movies', { params: { page: 1 } })
      .then(response => setData(response.data.data))
      .catch(error => console.log(error))
  }

  const category = (genre) => {
    axios.get('/api/genre', { params: { category: `/${genre}` } })
      .then(response => setData(response.data.data))
      .catch(error => console.log(error));
  };

  const search = (event) => {
    event.preventDefault();
    axios.get('/api/search', { params: { search: event.target[0].value } })
      .then(response => setData(response.data.data))
      .catch(error => console.log(error))
    event.target[0].value = '';
  };

  const showMovie = (data) => {
    setMovie(data);
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Navbar search={search} fetchData={fetchData} category={category} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<List data={data} showMovie={showMovie} />}></Route>
          <Route path="/movie/*" element={<MoviePage data={movie} />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
