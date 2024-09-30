import CommentWrite from "./CommentWrite";
import CommentList from "./CommentList";
import ReportReview from "../../components/Notification/ReportReview";

import axiosInstance from "@/axios/AxiosInstance";

import { DotsThreeVertical, BookmarkSimple, MapPin } from "@phosphor-icons/react";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

import "@/css/review/ReviewDetail.css";
import useAuthStore from "../../store/UseAuthStore";

function ReviewDetail() {
	const location = useLocation(); //state 객체로 넘겨오는 reviewUUID

	const [review, setReview] = useState({
		userImg: "",
		userNickname: "",
		userUuid: "",
		scrap: 0,
		score: 0,
		report: 0,
		secret: false,
		reviewUuid: "",
		content: "",
		img: "",
		placeUuid: "",
		placeImg: "",
		createdAt: "",
	});

	const [commentList, setCommentList] = useState([]);

	const [showReport, setShowReport] = useState(false);
	const dotsRef = useRef(null); // DotsThreeVertical 아이콘 위치를 참조하기 위한 ref

	// 신고하기 탭
	const onOpenReport = () => {
		setShowReport(!showReport);
	};

	const reviewUUID = location.state; //리뷰UUID

	const getReviewInfo = async () => {
		try {
			const response = await axiosInstance.get(`reviews/${reviewUUID}`);
			setReview(response.data);
		} catch (err) {
			console.error(err);
		}
	};

	const getCommentList = async () => {
		try {
			const response = await axiosInstance.get(`/${reviewUUID}/comments`);
			setCommentList(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getReviewInfo();
		getCommentList();
	}, []);

	//스크랩
	const { accessToken, userUuid } = useAuthStore();

	const scrapReview = async () => {
		if (!accessToken) {
			alert("로그인 후 이용해주세요");
			return;
		}

		try {
			await axiosInstance.post(`/reviews/${reviewUUID}`, userUuid);
		} catch (err) {
			console.error(err);
		}
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
							src={review.userImg}
							alt="프로필사진"
						/>
						<span className="nickname">{review.userNickname}</span>
					</div>
					<p>⭐ {review.score}</p>
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
					<p>장소이름?</p>
					<MapPin size={24} />
				</div>

				<div className="reviewer-content">
					<img
						src={review.img}
						alt="관광지사진"
						className="reviewer-place-img"
					/>
					<div className="reviewer-info">
						<p>{review.createdAt}</p>
						<BookmarkSimple
							onClick={scrapReview}
							size={24}
						/>
					</div>
					<p>{review.content}</p>
				</div>

				<div className="review-comment-list">
					<div className="review-comment-title">
						<h2>댓글</h2> <span>({commentList.length})</span>
					</div>

					<CommentWrite
						reviewUUID={reviewUUID}
						onCommentAdded={getCommentList}
					/>

					{commentList.length === 0 ? <p> 댓글이 없습니다. </p> : <CommentList commentList={commentList} />}
				</div>
			</div>
		</>
	);
}

export default ReviewDetail;
