import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Circle, MapPin } from "@phosphor-icons/react";
import SearchButton from "@/assets/SearchButton.png";

import "@/css/map/Map.css";

function MyMap() {
	const [map, setMap] = useState();
	const [keyword, setKeyword] = useState("");
	const [submittedKeyword, setSubmittedKeyword] = useState(""); // 제출된 키워드를 저장하는 상태 추가
	const [currentPosition, setCurrentPosition] = useState({
		lat: 37.566826,
		lng: 126.9786567,
	}); // 기본 위치는 서울 시청으로 설정

	// 추가 위치 데이터 배열 예시
	const locations = [
		{
			placeUuid: "a79460b4-6859-409f-9fc4-d25b075e461d",
			placeName: "역삼역",
			score: 0.0,
			tag: "#태그,#태그2",
			summary: "요약",
			placeImgs: null,
			lat: 24.3,
			lng: 254.3,
		},
	];

	// 사용자의 현재 위치를 가져오는 함수
	useEffect(() => {
		handleMyLocation();
	}, []);

	//내 위치로 이동
	const handleMyLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const newPosition = {
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					};
					setCurrentPosition(newPosition);

					// 지도 객체가 설정된 경우, 지도 중심을 업데이트
					if (map) {
						map.setCenter(new kakao.maps.LatLng(newPosition.lat, newPosition.lng));
					}
				},
				(error) => {
					console.error("Error occurred while fetching location:", error);
				},
			);
		} else {
			console.error("Geolocation is not supported by this browser.");
		}
	};

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

	return (
		<div className="my-map-like">
			<form
				id="search-input"
				className="search-input"
				onSubmit={handleSearch}
			>
				<input
					type="text"
					value={keyword}
					onChange={(e) => setKeyword(e.target.value)}
					placeholder="찾고 싶은 장소를 입력해주세요"
					onKeyUp={handleKeyPress}
				/>
				<div
					className="search-button"
					onClick={handleSearch}
				>
					<Circle
						className="outer"
						color="#18F5BB"
						weight="bold"
						size={24}
					/>
					<Circle
						className="inner"
						color="#836FFF"
						weight="fill"
						size={13}
					/>
				</div>
			</form>

			<div className="map-container">
				<Map
					center={currentPosition}
					style={{
						width: "100%",
						height: "100%",
					}}
					level={3}
					onCreate={setMap}
				>
					{/* 사용자의 현재 위치에 마커 표시 */}
					<MapMarker
						position={currentPosition}
						title="내 위치"
					/>

					{/* 추가 위치들에 대한 마커 표시 */}
					{locations.map((location) => (
						<MapMarker
							key={location.placeUuid}
							position={{ lat: location.lat, lng: location.lng }}
							title={location.placeName}
						/>
					))}
				</Map>

				<button
					className="my-location"
					onClick={handleMyLocation}
				>
					<MapPin size={32} />
				</button>
			</div>
		</div>
	);
}

export default MyMap;
