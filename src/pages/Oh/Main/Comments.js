const commentsList = ({ commentValue, removeComments, id }) => {
  return (
    <div className="commentsBox" key={commentValue.id}>
      <p className="userName">
        nerd_cloud
        <span className="userComment">{commentValue}</span>
      </p>
      <div className="commentsIcons">
        <button className="commentHeart">
          <i className="far fa-heart commentHeart fa-sm" />
        </button>
        <button className="commentTrash" onClick={removeComments} id={id}>
          <i className="far fa-trash-alt" onClick={removeComments} id={id} />
        </button>
      </div>
    </div>
  );
};

export default commentsList;
