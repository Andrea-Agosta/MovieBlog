import { Link } from "react-router-dom";
import './Card.css';

const Card = ({ data, handleClick }) => {
  const linkUrl = `/movie/${data.id}`;
  return (
    <div className="card card-width m-2 shadow p-3 mb-5 bg-body rounded" onClick={() => handleClick(data)} >
      <Link to={linkUrl} >
        <img src={data.large_cover_image} className="card-img-top card-img-high" alt="movie_image" />
        <div className="card-body border-top p-0">
          <h5 className="card-title pt-2">{data.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </Link>
    </div>
  )
};

export default Card;