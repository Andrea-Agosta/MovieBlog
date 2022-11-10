import './Card.css';

const Card = ({ data }) => {
  return (
    <div className="card card-width" >
      <img src={data.large_cover_image} className="card-img-top card-img-high" alt="movie_image" />
      <div className="card-body border-top">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  )
};

export default Card;