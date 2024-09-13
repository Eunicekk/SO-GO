import { ChatCircle, Star } from "phosphor-react";
import { useState } from "react";

const imageList = [
	{
		index: 1,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 2,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 3,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 4,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 5,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 6,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 7,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 8,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 9,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 10,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 11,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 12,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 13,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 14,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 15,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 16,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 17,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 18,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 19,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 20,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 21,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 22,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
	{
		index: 23,
		url: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/3d7d89be-9885-4978-bba3-81fefe039758.jpeg",
	},
];

export default function PlaceReview() {
	const [reviewCount, setReviewCount] = useState(10);

	const upReviewCount = () => {
		setReviewCount((prevCount) => Math.min(prevCount + 10, imageList.length));
	};

	return (
		<div id="place-review">
			<div className="title">방문자 리뷰</div>
			<div className="review-info">
				<div className="score">
					<Star
						size={16}
						weight="fill"
					/>
					<span>4.4</span>
				</div>
				<div className="count">
					<ChatCircle
						size={16}
						weight="fill"
					/>
					<span>123</span>
				</div>
			</div>

			<div className="review-collection">
				{imageList.slice(0, reviewCount).map(({ index, url }) => (
					<img
						className="review-image"
						key={index}
						src={url}
						alt={`review ${index}`}
					/>
				))}
			</div>

			{reviewCount < imageList.length && <button onClick={upReviewCount}>방문자 리뷰 더보기</button>}
		</div>
	);
}
