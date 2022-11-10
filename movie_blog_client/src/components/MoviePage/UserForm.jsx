import './MoviePage.css';

const UserForm = ({ addComment, movieId }) => {
  return (
    <>
      <form className="container border rounded user-form mt-5 pb-5 shadow p-3 mb-5 bg-body" onSubmit={event => addComment(event, movieId)} >
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label mt-2">Name:</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Comments:</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button className="btn btn-primary mb-3 float-end px-5" > Submit </button>
      </form>
    </>
  )
};

export default UserForm;