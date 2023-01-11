import logo from '../../logo.png';
import { Link } from "react-router-dom";
import './Navbar.css';
import Modal from '../Modal/Modal';


const Navbar = ({ search, fetchData, category }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/" >
          <img src={logo} className="logo mx-3" alt="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page" onClick={fetchData}> Home </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page" onClick={() => category('animation')}> Animation </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page" onClick={() => category('action')}> Action </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page" onClick={() => category('horror')}> Horror </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page" onClick={() => category('romance')}> Romance </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page" onClick={() => category('comedy')}> Comedy </Link>
            </li>
          </ul>
          <form className="d-flex me-2" role="search" onSubmit={(event) => search(event)}>
            <input className="form-control me-2" type="search" placeholder="🔍   Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <Modal />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;