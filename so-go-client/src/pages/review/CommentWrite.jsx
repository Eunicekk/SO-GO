import "@/css/review/CommentWrite.css";
import { useState } from "react";

function CommentWrite() {
	const [commentContent, setCommentContent] = useState("");

	const onRegistComment = () => {};

	return (
		<div className="comment-write">
			<input
				type="text"
				className="comment-input"
				placeholder="댓글을 달아주세요"
				value={commentContent}
			/>
			<button onClick={onRegistComment}>등록</button>
		</div>
	);
}

export default CommentWrite;
