import { useState } from "react";

import useAuthStore from "../../store/UseAuthStore";
import axiosInstance from "@/axios/AxiosInstance";

import "@/css/review/CommentWrite.css";
function CommentWrite({ reviewUUID }) {
	const [commentContent, setCommentContent] = useState("");

	const handleInputChange = (e) => {
		setCommentContent(e.target.value);
	};

	const { accessToken, userUuid } = useAuthStore();

	// 댓글 등록 함수
	const onRegistComment = async () => {
		if (!accessToken) {
			alert("로그인 후 이용해주세요");
			return;
		}

		if (commentContent.trim() === "") {
			alert("댓글 내용을 입력해주세요.");
			return;
		}

		const comment = {
			content: commentContent,
			userUuid: userUuid,
			reviewUuid: reviewUUID,
		};

		try {
			await axiosInstance.post(`${reviewUUID}/comments`, comment);
			setCommentContent("");
		} catch (err) {
			console.error(err);
			alert("다시 시도해주세요!");
		}
	};

	return (
		<div className="comment-write">
			<input
				type="text"
				className="comment-input"
				placeholder="댓글을 달아주세요"
				value={commentContent}
				onChange={handleInputChange} // 입력 값 변경 처리
			/>
			<button onClick={onRegistComment}>등록</button>
		</div>
	);
}

export default CommentWrite;
