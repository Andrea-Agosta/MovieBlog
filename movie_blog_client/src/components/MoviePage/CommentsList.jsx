const CommentsList = ({ comments }) => {
  return comments.length > 0 && comments.map(comment => {
    return (
      <div className="row shadow p-3 mx-1 mb-5 bg-body rounded" >
        <div className="col-sm-4 col-md-2 col-lg-1 me-4">
          <img src='https://i.pravatar.cc/300' alt='avatar' className="rounded-circle widt-100" />
        </div>
        <div className="col-8">
          <h2>{comment.name}</h2>
          <h5>{comment.description}</h5>
        </div>
      </div>
    );
  })
};

export default CommentsList;