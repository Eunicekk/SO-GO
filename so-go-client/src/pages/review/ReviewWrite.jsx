import "@/css/review/ReviewWrite.css";
import { ImageSquare } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function ReviewWrite() {
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const fileInputRef = useRef(null); // input 요소 참조를 위한 useRef 추가

  const [selectedPlace, setSelectedPlace] = useState({
    name: "",
    address: "",
    coords: { lat: null, lng: null },
  });

  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  const [keyword, setKeyword] = useState("");
  const [submittedKeyword, setSubmittedKeyword] = useState(""); // 제출된 키워드를 저장하는 상태 추가

  // 유효성 상태 관리용 state
  const [validationErrors, setValidationErrors] = useState({
    place: false,
    image: false,
    rating: false,
    reviewText: false,
  });

  useEffect(() => {
    if (!map || !submittedKeyword) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(submittedKeyword, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (var i = 0; i < data.length; i++) {
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
            address: data[i].road_address_name || data[i].address_name, // 주소 정보 추가
          });
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        map.setBounds(bounds);
      }
    });
  }, [map, submittedKeyword]); // submittedKeyword 상태가 변경될 때만 검색 실행

  //키워드 검색
  const handleSearch = (event) => {
    event.preventDefault();
    if (keyword) {
      setSubmittedKeyword(keyword);
    }
  };

  // 키워드 인풋에서 엔터 키를 눌렀을 때 검색 실행
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  // 마커 클릭 시 위치 정보 업데이트
  const handleMarkerClick = (marker) => {
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.coord2Address(
      marker.position.lng,
      marker.position.lat,
      (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const address = result[0].address.address_name;

          setSelectedPlace({
            name: marker.content, // 장소 이름 설정
            address,
            coords: { lat: marker.position.lat, lng: marker.position.lng },
          });

          setInfo(marker);
        }
      }
    );
  };

  // 목록에서 항목 클릭 시 지도 이동 및 선택된 장소 정보 업데이트
  const handleListClick = (marker) => {
    map.setCenter(
      new kakao.maps.LatLng(marker.position.lat, marker.position.lng)
    );
    setInfo(marker);
    setSelectedPlace({
      name: marker.content, // 장소 이름 설정
      address: marker.address,
      coords: { lat: marker.position.lat, lng: marker.position.lng },
    });
  };

  //이미지 업로드
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImageFile(file);
      setSelectedImageUrl(URL.createObjectURL(file));
    }
  };

  //이미지 클릭 시 파일 업로드 트리거
  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // input 요소 클릭 트리거
    }
  };

  // 별점 클릭 이벤트 처리
  const handleStarClick = (index) => {
    const stars = document.querySelectorAll(".star-rating .star");
    stars.forEach((star, i) => {
      if (i <= index) {
        star.style.color = "gold";
      } else {
        star.style.color = "lightgray";
      }
    });
  };

  //리뷰등록
  const submitReview = () => {
    if (validateInputs()) {
      const placeInfo = {
        place: selectedPlace,
        image: selectedImageFile,
        rating,
        reviewText,
      };

      //여기에서 axios 연결
    } else {
      alert("모든 항목을 작성해주세요");
    }
  };

  return (
    <>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="검색할 장소를 입력하세요"
          onKeyUp={handleKeyPress} // 엔터 키 이벤트 핸들러 연결
        />
        <button type="submit">검색</button>
      </form>

      <div style={{ display: "flex" }}>
        <div style={{ width: "30%", overflowY: "scroll", maxHeight: "250px" }}>
          <ul>
            {markers.map((marker, index) => (
              <li
                key={index}
                onClick={() => handleListClick(marker)}
                style={{ cursor: "pointer", marginBottom: "10px" }}
              >
                <strong>{marker.content}</strong>
                <br />
                {marker.address}
              </li>
            ))}
          </ul>
        </div>

        <Map
          center={{
            lat: 37.566826,
            lng: 126.9786567,
          }}
          style={{
            width: "70%",
            height: "250px",
          }}
          level={3}
          onCreate={setMap}
        >
          {markers.map((marker) => (
            <MapMarker
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
              position={marker.position}
              onClick={() => handleMarkerClick(marker)}
            >
              {info && info.content === marker.content && (
                <div style={{ color: "#000" }}>{marker.content}</div>
              )}
            </MapMarker>
          ))}
        </Map>
      </div>

      {selectedPlace.coords.lat && (
        <div className="selected-place-info">
          <p>
            선택된 장소: {selectedPlace.name} ({selectedPlace.address})
          </p>
        </div>
      )}

      <div className="review-upload">
        <div className="upload-foam">
          <input
            id="upload-input"
            type="file"
            accept=".jpg, .png, .jpeg, .heic, .heif, .hevc"
            onChange={handleImageUpload}
            className="upload-input"
            ref={fileInputRef} // ref 연결
            style={{ display: "none" }} // input 숨기기
          />
          {!selectedImageUrl ? (
            <label
              htmlFor="upload-input"
              className="upload-label"
              onClick={handleImageClick} // 이미지 클릭 핸들러 연결
            >
              <ImageSquare size={32} />
              <p>자랑하고 싶은 사진을 올려주세요</p>
            </label>
          ) : (
            <img
              src={selectedImageUrl}
              alt="Uploaded"
              className="uploaded-image"
              onClick={handleImageClick} // 이미지 클릭 핸들러 연결
            />
          )}
        </div>
        <div>
          <p>나의 점수는</p>
          <div className="star-rating">
            <input
              type="radio"
              id="star1"
              name="rating"
              value="1"
              onClick={() => handleStarClick(0)}
            />
            <label htmlFor="star1" className="star">
              &#9733;
            </label>
            <input
              type="radio"
              id="star2"
              name="rating"
              value="2"
              onClick={() => handleStarClick(1)}
            />
            <label htmlFor="star2" className="star">
              &#9733;
            </label>
            <input
              type="radio"
              id="star3"
              name="rating"
              value="3"
              onClick={() => handleStarClick(2)}
            />
            <label htmlFor="star3" className="star">
              &#9733;
            </label>
            <input
              type="radio"
              id="star4"
              name="rating"
              value="4"
              onClick={() => handleStarClick(3)}
            />
            <label htmlFor="star4" className="star">
              &#9733;
            </label>
            <input
              type="radio"
              id="star5"
              name="rating"
              value="5"
              onClick={() => handleStarClick(4)}
            />
            <label htmlFor="star5" className="star">
              &#9733;
            </label>
          </div>
        </div>
        <div>
          <textarea placeholder="방문한 장소가 어땠는지 자랑해주세요!" />
        </div>
        <div>
          <button>취소</button>
          <button onClick={submitReview}>등록</button>
        </div>
      </div>
    </>
  );
}

export default ReviewWrite;
