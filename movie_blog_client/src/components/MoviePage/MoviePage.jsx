import './MoviePage.css';
import StarsRating from 'stars-rating'
import { useState } from 'react';
import UserForm from './UserForm';
import axios from 'axios';
import CommentsList from './CommentsList';


const MoviePage = ({ data }) => {
  const loremIpsum = `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
  const [rate, setRate] = useState(data.rating);
  const [comments, setComments] = useState([]);
  const getComments = () => {
    axios.get(`/api/movies/${data.id}`)
      .then(response => {
        setComments([response.data]);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  const addComment = (event) => {
    event.preventDefault();
    axios({
      method: 'post',
      url: `/api/movies/${data.id}`,
      data: {
        id: data.id,
        name: event.target[0].value,
        description: event.target[1].value
      }
    });
    event.target[0].value = "";
    event.target[1].value = "";
    getComments();
  }

  const deleteComment = (event, data) => {
    event.preventDefault();
    axios({
      method: 'delete',
      url: `/api/movies/${data.id}`,
      data: {
        id: data.id,
        name: data.name,
        description: data.description
      }
    });
    getComments();
  };

  const ratingChanged = (newRating) => {
    data.rating === 0 && setRate(newRating);
  };

  return (
    <>
      <div className="m-5 p-3" onLoad={getComments}>
        <div className="container border rounded pb-3 shadow p-3 mb-5 bg-body">
          <div className="row">
            <div className="col-12 col-md-4">
              <img src={data.large_cover_image} alt="cover_image" className="container__image" />
            </div>
            <div className="col-8">
              <h1 className='mt-4'> {data.title} </h1>
              <h4>{data.year}</h4>
              <h4>
                {data.genres.map((gen, index) => index < (data.genres.length - 1) ? `${gen} - ` : `${gen} `)}
              </h4>
              <h3 className='mt-4'>Description:</h3>
              <p>{data.description_full !== "" ? data.description_full : loremIpsum}</p>
              <div className="row">
                <div className="col-4">
                  <div className="row">
                    <div className='col-8'>
                      <StarsRating count={5} onChange={ratingChanged} size={24} color2={'#ffd700'} />
                    </div>
                    <div className='col-4'>
                      <h3> {rate} </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CommentsList comments={comments} deleteComment={deleteComment} />
        <UserForm addComment={addComment} />
      </div>
    </>
  )
};

export default MoviePage;
