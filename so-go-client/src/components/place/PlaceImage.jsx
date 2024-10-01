import "@/css/place/PlaceDetail.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";

export default function PlaceImage(images) {
	const [slideIndex, setSlideIndex] = useState(0);
	const imageList = [images];

	const settings = {
		infinite: false, // 무한 반복 여부
		speed: 500, // 슬라이드 전환 속도
		slidesToShow: 1, // 한 번에 보여질 슬라이드 수
		slidesToScroll: 1, // 한 번에 넘어가는 슬라이드 수
		draggable: true, // 마우스 드래그로 슬라이드 가능 여부
		swipe: true, // 스와이프 제스처로 슬라이드 가능 여부
		touchMove: true, // 터치로 슬라이드 이동 가능 여부
		beforeChange: (oldIndex, newIndex) => setSlideIndex(newIndex), // 슬라이드가 변경되기 전에 호출됨
	};

	return (
		<div id="place-image">
			<span id="image-count">
				{slideIndex >= 10 ? slideIndex + 1 : "0" + (slideIndex + 1)} /{" "}
				{imageList.length >= 10 ? imageList.length : "0" + imageList.length}
			</span>
			<Slider {...settings}>
				{imageList.map((image, index) => (
					<div
						className="image-wrap"
						key={index}
					>
						<img
							src={image.images}
							alt={`장소 이미지 ${index + 1}`}
						/>
					</div>
				))}
			</Slider>
		</div>
	);
}
