const CommentsList = ({ comments }) => {
  comments > 0 && comments.map(comment => {
    return (
      <div className="row" >
        <div className="col-1">
          <img src='https://i.pravatar.cc/300' alt='avatar' />
          <h2>{comment.name}</h2>
          <h5>{comment.comment}</h5>
        </div>
      </div>
    );
  })
};

export default CommentsList;