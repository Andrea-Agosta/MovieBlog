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
  const [comments, setComments] = useState([]);

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

  const addComment = (event, id) => {
    event.preventDefault();
    const comment = {
      id: id,
      name: event.target.value[0],
      description: event.target.value[1]
    }
    axios.post('/api/movies/1', comment)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  // TODO
  // LOGO
  // LOOKING FOR NPM PACKAGE AUTH

  useEffect(() => {
    fetchData();
  }, [comments])

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<List data={data} handleClick={handleClick} />}></Route>
          <Route path="/movie/*" element={<MoviePage data={movie} addComment={addComment} />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
