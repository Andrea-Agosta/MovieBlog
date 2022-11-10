import { Link } from "react-router-dom";
import './Card.css';

const Card = ({ data, handleClick }) => {
  return (
    <div className="card card-width m-2 shadow p-3 mb-5 bg-body rounded" onClick={() => handleClick(data)} >
      <Link to={`/movie/${data.id}`} className="text-decoration-none" >
        <img src={data.title === 'Mephistopheles' ? 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1330717350l/13508283.jpg' : data.large_cover_image} className="card-img-top card-img-high" alt="movie_image" />
        <div className="card-body border-top p-0">
          <h5 className="card-title pt-2 text-body">{data.title}</h5>
          <p className="card-text text-body">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
        </div>
      </Link>
    </div>
  )
};

export default Card;