import { DotsThreeVertical } from "@phosphor-icons/react";
import { useRef, useState } from "react";

import "@/css/review/CommentList.css";
import ReportComment from "../../components/Notification/ReportComment";

function CommentList() {
	const [showReport, setShowReport] = useState(false);
	const dotsRef = useRef(null); // DotsThreeVertical 아이콘 위치를 참조하기 위한 ref

	// 신고하기 탭
	const onOpenReport = () => {
		setShowReport(!showReport);
	};

	return (
		<div className="comment-container">
			<div className="commenter-profile">
				<div>
					<img
						src=""
						alt="댓글프로필사진"
					/>
					<span>닉네임</span>
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
			<p className="comment-content">댓글내용</p>
		</div>
	);
}

export default CommentList;
