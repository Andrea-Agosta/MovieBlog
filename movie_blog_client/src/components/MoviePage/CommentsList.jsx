import './MoviePage.css'

const CommentsList = ({ comments, deleteComment }) => {
  return comments.length > 0 && comments[0].map((comment, index) => {
    return (
      <div className="row shadow p-3 mx-1 mb-5 bg-body rounded" key={index}>
        <div className="col-sm-4 col-md-2 col-lg-1 me-4">
          <img src={`https://i.pravatar.cc/300?img=${index + 10}`} alt='avatar' className="rounded-circle widt-100" />
        </div>
        <div className="col-8">
          <h2>{comment.name}</h2>
          <h5>{comment.description}</h5>
        </div>
        <div className="d-flex justify-content-end">
          {/* <i class="fa-regular fa-pen-to-square me-3" onClick={() => editComment(comment.id)}></i> */}
          <i class="fa-solid fa-trash fa-lg" onClick={(event) => deleteComment(event, comment)}></i>
        </div>
      </div>
    );
  })
};

export default CommentsList;