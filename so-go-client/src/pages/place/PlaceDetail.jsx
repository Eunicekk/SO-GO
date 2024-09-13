import "@/css/place/PlaceDetail.css";
import { useState } from "react";
import { Circle, HeartStraight, CaretUp } from "phosphor-react";
import PlaceImage from "@/components/place/PlaceImage";
import PlaceDescription from "@/components/place/PlaceDescription";
import PlaceComfort from "@/components/place/PlaceComfort";
import PlaceReview from "@/components/place/PlaceReview";

export default function PlaceDetail() {
	const [isLiked, setIsLiked] = useState(false);

	const handleLikeButton = () => {
		setIsLiked(!isLiked);
	};

	const handleUpButton = () => {
		document.getElementById("place-detail").scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<div id="place-detail">
			<PlaceImage />
			<PlaceDescription />
			<PlaceComfort />
			<div className="gap"></div>
			<PlaceReview />

			<span
				id="like-button"
				onClick={handleLikeButton}
			>
				<Circle
					size={56}
					color={isLiked ? "#ff0000" : "#aaa"}
					weight="fill"
				/>
				<HeartStraight
					size={28}
					color="#fff"
					weight="fill"
					className="heart"
				/>
			</span>
			<span
				id="up-button"
				onClick={handleUpButton}
			>
				<Circle
					size={56}
					color="#836FFF"
					weight="fill"
				/>
				<CaretUp
					size={28}
					color="#fff"
					weight="bold"
					className="arrow"
				/>
			</span>
		</div>
	);
}
