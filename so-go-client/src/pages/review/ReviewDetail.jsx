import CommentWrite from "./CommentWrite";
import CommentList from "./CommentList";
import ReportReview from "../../components/Notification/ReportReview";

import { DotsThreeVertical, BookmarkSimple, MapPin } from "@phosphor-icons/react";
import { useEffect, useState, useRef } from "react";

import "@/css/review/ReviewDetail.css";

function ReviewDetail() {
	const [review, setReview] = useState();
	const [showReport, setShowReport] = useState(false);
	const dotsRef = useRef(null); // DotsThreeVertical 아이콘 위치를 참조하기 위한 ref

	// 신고하기 탭
	const onOpenReport = () => {
		setShowReport(!showReport);
	};

	return (
		<>
			<div>
				<div
					className="reviewer-profile"
					style={{ position: "relative" }}
				>
					<div>
						<img
							src=""
							alt="프로필사진"
						/>
						<span className="nickname">닉네임</span>
					</div>
					<p>별점</p>
					<DotsThreeVertical
						ref={dotsRef}
						size={24}
						onClick={onOpenReport}
						style={{ cursor: "pointer" }}
					/>
					{showReport && (
						<div className="dropdown">
							<ReportReview />
						</div>
					)}
				</div>

				<div className="reviewer-place">
					<p>장소</p>
					<MapPin size={24} />
				</div>

				<div className="reviewer-content">
					<img
						src=""
						alt="관광지사진"
						className="reviewer-place-img"
					/>
					<div className="reviewer-info">
						<p>2024.6.4</p>
						<BookmarkSimple size={24} />
					</div>
					<p>오늘도 좋은 하루~ content</p>
				</div>

				<div className="review-comment-list">
					<div className="review-comment-title">
						<h2>댓글</h2> <span>(236)</span>
					</div>
					<CommentWrite />
					<CommentList />
				</div>
			</div>
		</>
	);
}

export default ReviewDetail;
