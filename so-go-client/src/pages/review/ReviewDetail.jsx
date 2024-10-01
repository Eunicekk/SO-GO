import CommentWrite from "./CommentWrite";
import CommentList from "./CommentList";
import ReportReview from "../../components/Notification/ReportReview";

import axiosInstance from "@/axios/AxiosInstance";

import { DotsThreeVertical, BookmarkSimple, MapPin, Star, CalendarCheck } from "@phosphor-icons/react";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

import "@/css/review/ReviewDetail.css";
import useAuthStore from "../../store/UseAuthStore";

import DefaultProfile from "@/assets/profile.png";

function ReviewDetail() {
	const location = useLocation(); //state 객체로 넘겨오는 reviewUUID

	const [review, setReview] = useState({
		userImg: "",
		userNickname: "",
		userUuid: "",
		scrap: 0,
		checkScrap: false,
		score: 0,
		report: 0,
		secret: false,
		reviewUuid: "",
		content: "",
		img: "",
		placeName: "",
		placeUuid: "",
		placeImg: "",
		createdAt: "",
	});

	const [commentList, setCommentList] = useState([]);

	const [showReport, setShowReport] = useState(false);
	const dotsRef = useRef(null); // DotsThreeVertical 아이콘 위치를 참조하기 위한 ref

	const [isScrapped, setIsScrapped] = useState(false); // 스크랩 여부 상태 추가

	// 신고하기 탭
	const onOpenReport = () => {
		setShowReport(!showReport);
	};

	const reviewUUID = location.state; //리뷰UUID

	const getReviewInfo = async () => {
		try {
			const response = await axiosInstance.get(`reviews/${reviewUUID}`);
			const data = response.data;

			// createdAt 포맷팅
			data.createdAt = data.createdAt.split("T")[0];
			setReview(data);

			setIsScrapped(data.checkScrap);
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
			await axiosInstance.post(`/reviews/${reviewUUID}`, { userUuid: userUuid });
			setIsScrapped((prev) => !prev);

			// Update the scrap count based on the new scrap state
			setReview((prevReview) => ({
				...prevReview,
				scrap: prevReview.scrap + (isScrapped ? -1 : 1),
			}));
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<div className="reviewer-profile">
				<div className="profile-info">
					<div className="profile-wrap">
						<img
							src={review.userImg || DefaultProfile}
							alt="프로필사진"
						/>
					</div>
					<span className="nickname">{review.userNickname}</span>
				</div>
				<DotsThreeVertical
					ref={dotsRef}
					size={24}
					onClick={onOpenReport}
					style={{ cursor: "pointer" }}
				/>
				{showReport && (
					<div className="dropdown">
						<ReportReview
							reviewUserUuid={review.userUuid}
							reviewUuid={reviewUUID}
						/>
					</div>
				)}
			</div>

			<img
				src={review.img}
				alt="관광지사진"
				className="reviewer-place-img"
			/>

			<div className="reviewer-content">
				<div className="reviewer-info">
					<div className="reviewer-place">
						<MapPin size={18} />
						<p>{review.placeName}</p>
					</div>
					<div className="reviewer-date">
						<CalendarCheck size={18} />
						<p>{review.createdAt}</p>
					</div>
				</div>
				<div className="scrap-info">
					<BookmarkSimple
						onClick={scrapReview}
						size={24}
						weight={isScrapped ? "fill" : "regular"}
					/>
					<span>{review.scrap}</span>
				</div>
			</div>
			<div className="reviewer-content-wrap">
				<span className="reviewer-score">
					<Star
						fill="black"
						weight="fill"
					/>
					<span>{review.score}</span>
				</span>
				<div className="reviewer-write-content">{review.content}</div>
			</div>

			<div className="review-comment-list">
				<div className="review-comment-title">
					<h2>댓글 ({commentList.length})</h2>
				</div>

				<CommentWrite
					reviewUUID={reviewUUID}
					onCommentAdded={getCommentList}
				/>

				{commentList.length === 0 ? (
					<p> 댓글이 없습니다. </p>
				) : (
					<CommentList
						reviewUuid={reviewUUID}
						commentList={commentList}
					/>
				)}
			</div>
		</>
	);
}

export default ReviewDetail;
