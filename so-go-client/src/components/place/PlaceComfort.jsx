import { Car, Wheelchair, Dog, Toilet, CookingPot, X } from "phosphor-react";

export default function PlaceComfort() {
  const comfort = {
    parking: false,
    wheelchair: false,
    smoke: false,
    pet: false,
    toilet: false,
    elevator: false,
    cook: false,
  };

  return (
    <div id="place-comfort">
      {/* 
        관광지: 주차여부, 휠체어여부, 흡연여부, 엘베여부
        숙박: 주차여부, 휠체어여부, 흡연여부, 취사여부
        식당: 주차여부, 휠체어여부, 반려동물동반여부
        전통시장: 주차여부, 휠체어여부, 공중화장실여부
      */}

      {comfort.parking === true ? (
        <div className="parking-true">
          <Car size={40} />
          <span className="text">주차 가능</span>
        </div>
      ) : comfort.parking === false ? (
        <div className="parking-false">
          <X size={28} weight="bold" className="ban" />
          <Car size={40} />
          <span className="text">주차 불가</span>
        </div>
      ) : (
        ""
      )}

      {comfort.wheelchair === true ? (
        <div className="wheelchair-true">
          <Wheelchair size={40} />
          <span className="text">휠체어 가능</span>
        </div>
      ) : comfort.wheelchair === false ? (
        <div className="wheelchair-false">
          <X size={28} weight="bold" className="ban" />
          <Wheelchair size={40} />
          <span className="text">휠체어 불가</span>
        </div>
      ) : (
        ""
      )}

      {comfort.smoke === true ? (
        <div className="smoke-true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M224,128H32a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V144A16,16,0,0,0,224,128ZM32,144H80v32H32Zm192,32H96V144H224v32ZM201,60.08c8-14.23,7.42-21.71,6.36-24.91a7.79,7.79,0,0,0-2.64-3.86,8,8,0,1,1,6.5-14.62,22.57,22.57,0,0,1,11.32,13.44c3.36,10.14.81,22.85-7.6,37.79-8,14.23-7.42,21.72-6.36,24.91a7.79,7.79,0,0,0,2.64,3.86,8,8,0,1,1-6.5,14.62,22.57,22.57,0,0,1-11.32-13.44C190.07,87.73,192.62,75,201,60.08Zm-40,0c8-14.23,7.42-21.71,6.36-24.91a7.79,7.79,0,0,0-2.64-3.86,8,8,0,1,1,6.5-14.62,22.57,22.57,0,0,1,11.32,13.44c3.36,10.14.81,22.85-7.6,37.79-8,14.23-7.42,21.72-6.36,24.91a7.79,7.79,0,0,0,2.64,3.86,8,8,0,1,1-6.5,14.62,22.57,22.57,0,0,1-11.32-13.44C150.07,87.73,152.62,75,161,60.08Z"></path>
          </svg>
          <span className="text">흡연 가능</span>
        </div>
      ) : comfort.smoke === false ? (
        <div className="smoke-false">
          <X size={28} weight="bold" className="ban" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M224,128H32a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V144A16,16,0,0,0,224,128ZM32,144H80v32H32Zm192,32H96V144H224v32ZM201,60.08c8-14.23,7.42-21.71,6.36-24.91a7.79,7.79,0,0,0-2.64-3.86,8,8,0,1,1,6.5-14.62,22.57,22.57,0,0,1,11.32,13.44c3.36,10.14.81,22.85-7.6,37.79-8,14.23-7.42,21.72-6.36,24.91a7.79,7.79,0,0,0,2.64,3.86,8,8,0,1,1-6.5,14.62,22.57,22.57,0,0,1-11.32-13.44C190.07,87.73,192.62,75,201,60.08Zm-40,0c8-14.23,7.42-21.71,6.36-24.91a7.79,7.79,0,0,0-2.64-3.86,8,8,0,1,1,6.5-14.62,22.57,22.57,0,0,1,11.32,13.44c3.36,10.14.81,22.85-7.6,37.79-8,14.23-7.42,21.72-6.36,24.91a7.79,7.79,0,0,0,2.64,3.86,8,8,0,1,1-6.5,14.62,22.57,22.57,0,0,1-11.32-13.44C150.07,87.73,152.62,75,161,60.08Z"></path>
          </svg>
          <span className="text">흡연 불가</span>
        </div>
      ) : (
        ""
      )}

      {comfort.pet === true ? (
        <div className="pet-true">
          <Dog size={48} />
          <span className="text">반려동물<br/>동반 가능</span>
        </div>
      ) : comfort.pet === false ? (
        <div className="pet-false">
          <X size={28} weight="bold" className="ban" />
          <Dog size={48} />
          <span className="text">반려동물<br/>동반 불가</span>
        </div>
      ) : (
        ""
      )}

      {comfort.toilet === true ? (
        <div className="toilet-true">
          <Toilet size={48} />
          <span className="text">공중화장실 O</span>
        </div>
      ) : comfort.toilet === false ? (
        <div className="toilet-false">
          <X size={28} weight="bold" className="ban" />
          <Toilet size={48} />
          <span className="text">공중화장실 X</span>
        </div>
      ) : (
        ""
      )}

      {comfort.elevator === true ? (
        <div className="elevator-true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-32,80v96H136V112Zm-56,96H80V112h40Zm88,0H192V104a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V208H48V48H208V208ZM152,72a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,72Z"></path>
          </svg>
          <span className="text">승강기 O</span>
        </div>
      ) : comfort.elevator === false ? (
        <div className="elevator-false">
          <X size={28} weight="bold" className="ban" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-32,80v96H136V112Zm-56,96H80V112h40Zm88,0H192V104a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V208H48V48H208V208ZM152,72a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,72Z"></path>
          </svg>
          <span className="text">승강기 X</span>
        </div>
      ) : (
        ""
      )}

      {comfort.cook === true ? (
        <div className="cook-true">
          <CookingPot size={48} />
          <span className="text">취사 가능</span>
        </div>
      ) : comfort.cook === false ? (
        <div className="cook-false">
          <X size={28} weight="bold" className="ban" />
          <CookingPot size={48} />
          <span className="text">취사 불가</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
