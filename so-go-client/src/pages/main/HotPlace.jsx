// import css from 'css/main/HotPlace.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HotPlace() {
  //나중에 image axios로 불러와서 배열 저장해야할 듯

  //carousel설정
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="hotplace">
      <div>
        <p>요즘 뜨는 관광지</p>
        <button>전체 보기</button>
      </div>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
