import "@/css/review/CommentWrite.css";

function CommentWrite() {
  const onRegistComment = () => {};

  return (
    <div className="comment-write">
      <input
        type="text"
        className="comment-input"
        placeholder="댓글을 달아주세요"
      />
      <button onClick={onRegistComment}>등록</button>
    </div>
  );
}

export default CommentWrite;
