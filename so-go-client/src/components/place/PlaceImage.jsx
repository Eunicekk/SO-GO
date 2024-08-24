import "@/css/place/PlaceDetail.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";

export default function PlaceImage() {
  const [slideIndex, setSlideIndex] = useState(0);

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

  const images = [
    "https://mblogthumb-phinf.pstatic.net/MjAyNDA2MDZfMiAg/MDAxNzE3NjQ3ODkwNzk4.rPN0D_9NCtBrT8XaXgvSPOhOck5xVGwKRacGIZaxsVMg.g16QEWhkVPWcDxWe_RzhyjeugVY2zrVCzpNnLCMk5Mog.JPEG/IMG_2623.jpg?type=w800",
    "https://d12zq4w4guyljn.cloudfront.net/20240508112803_photo3_a1697d4ed489.jpg",
    "https://d12zq4w4guyljn.cloudfront.net/20230819093026_photo2_a53df0d602e4.jpg",
  ];

  return (
    <div id="place-image">
      <span id="image-count">
        {slideIndex >= 10 ? slideIndex + 1 : "0" + (slideIndex + 1)} / {images.length >= 10 ? images.length : "0" + (images.length)}
      </span>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="image-wrap" key={index}>
            <img src={image} alt={`장소 이미지 ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
