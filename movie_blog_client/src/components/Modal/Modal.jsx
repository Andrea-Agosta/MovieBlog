import Login from "../Login/Login";

const Modal = () => {
  return (
    <>
      <button type="button" class="btn btn-primary me-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        SingUp!
      </button>

      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Register</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal;
