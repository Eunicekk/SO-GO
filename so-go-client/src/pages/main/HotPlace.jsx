// import css from 'css/main/HotPlace.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "@/css/main/HotPlace.css";

export default function HotPlace() {
	//carousel설정
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slideToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	return (
		<div className="hotplace">
			<div className="hotplace-title">
				<h2>✨ 요즘 뜨는 관광지</h2>
				<button>전체 보기</button>
			</div>
			<Slider {...settings}>
				{hotPlaces.map((place, index) => (
					<div
						key={index}
						className="today-hotplace"
					>
						<img
							src={place.imgUrl}
							alt={place.description}
						/>
						<span>{place.description}</span>
					</div>
				))}
			</Slider>
		</div>
	);
}

const hotPlaces = [
	{
		imgUrl: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=5ff2cc63-4ac2-43f5-97b9-f6380acfb189", // 실제 이미지 URL로 대체
		description: "순천만습지",
	},
	{
		imgUrl: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=b857c435-02f4-4323-b202-5c78f61391fe",
		description: "단양 미륵대흥사",
	},
	{
		imgUrl: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=86f65828-6d31-411b-9b29-7c4c992d6209",
		description: "경주 불국사",
	},
	{
		imgUrl: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=43eb538c-ca64-4692-a5ad-a08689bd128b",
		description: "제주도 용눈이 오름",
	},
	{
		imgUrl: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=9ccbc23f-2a25-4d14-a2d9-8257886dc8f8",
		description: "남이섬",
	},
	{
		imgUrl: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=7ce7a822-8b5c-418c-8cd0-52166ad1e00a",
		description: "제천 의림지",
	},
];
