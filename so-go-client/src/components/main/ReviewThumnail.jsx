import "@/css/review/ReviewThumnail.css";
import DefaultProfile from "@/assets/profile.png";

function ReviewThumnail({ review, onClick }) {
	return (
		<div
			className="review-items"
			onClick={onClick}
		>
			<div className="thumbnail">
				<img
					src={review.img}
					alt="맛집 이미지"
				/>
			</div>
			<div className="content">
				<div className="img-wrap">
					<img
						src={review.userImg || DefaultProfile}
						alt="유저프사"
					/>
				</div>
				<span>{review.userNickname}</span>
			</div>
		</div>
	);
}

export default ReviewThumnail;
