import "@/css/review/ReviewThumnail.css";

function ReviewThumnail({ review, onClick }) {
	return (
		<div>
			<div
				className="review-thumbnail"
				onClick={onClick}
			>
				<div className="thumbnail">
					<img
						src={review.img}
						alt="맛집 이미지"
					/>
				</div>
				<div className="content">
					<img
						src={review.userImg}
						alt="유저프사"
					/>
					<span>{review.userNickname}</span>
				</div>
			</div>
		</div>
	);
}

export default ReviewThumnail;
