import { DotsThreeVertical } from "@phosphor-icons/react";
import { useRef, useState } from "react";

import "@/css/review/CommentList.css";
import ReportComment from "../../components/Notification/ReportComment";

function CommentList({ commentList }) {
	const [showReport, setShowReport] = useState(false);
	const dotsRef = useRef(null); // DotsThreeVertical 아이콘 위치를 참조하기 위한 ref

	// 신고하기 탭
	const onOpenReport = () => {
		setShowReport(!showReport);
	};

	return (
		<>
			{commentList.map((comments) => (
				<div key={comments[0].commentUuid}>
					{comments.map((comment, index) => (
						<div
							key={comment.commentUuid}
							className={`comment-container ${index > 0 ? "reply-comment" : ""}`} // 대댓글일 때 클래스 추가
						>
							<div className="commenter-profile">
								<div>
									<img
										src={comment.userImg || "default-profile.png"} // 이미지가 없을 때 기본 이미지
										alt="댓글프로필사진"
									/>
									<span>{comment.userNickname}</span>
								</div>
								<DotsThreeVertical
									ref={dotsRef}
									size={24}
									onClick={onOpenReport}
									style={{ cursor: "pointer" }}
								/>
								{showReport && (
									<div className="dropdown">
										<ReportComment />
									</div>
								)}
							</div>
							<p className="comment-content">{comment.content}</p>
						</div>
					))}
				</div>
			))}
		</>
	);
}

export default CommentList;
