import './MoviePage.css';

const UserForm = () => {
  return (
    <>
      <div className="container border rounded user-form mt-5">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Name:</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Comments:</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>
    </>
  )
};

export default UserForm;