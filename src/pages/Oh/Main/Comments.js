const commentsList = props => {
  return (
    <div className="commentsBox">
      <p className="userName">
        nerd_cloud
        <span className="userComment">{props.commentValue}</span>
      </p>
      <i className="far fa-heart fa-sm" />
    </div>
  );
  console.log(props.commentValue);
};

export default commentsList;
