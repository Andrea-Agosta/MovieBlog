import axios from 'axios';

const Login = () => {
  const register = () => {
    console.log('some');
  };

  const login = () => {
    console.log('some');
  }

  return (
    <>
      <form className="form">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" required />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary me-3" onClick={register}>Register</button>
          <button type="submit" className="btn btn-success" onClick={login}>Login</button>
        </div>
      </form>
    </>
  )
}

export default Login