import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Circle, MapPin } from "@phosphor-icons/react";

import "@/css/map/Map.css";
import axiosInstance from "@/axios/AxiosInstance";
import useAuthStore from "../../store/UseAuthStore";

import MyPlace from "@/assets/MyPlace.png";

function MyMap() {
	const [map, setMap] = useState();
	const [keyword, setKeyword] = useState("");
	const [submittedKeyword, setSubmittedKeyword] = useState(""); // 제출된 키워드를 저장하는 상태 추가
	const [currentPosition, setCurrentPosition] = useState({
		lat: 37.566826,
		lng: 126.9786567,
	}); // 기본 위치는 서울 시청으로 설정

	// 추가 위치 데이터 배열 예시
	const [myPlaces, setMyPlaces] = useState([]);

	const { userUuid } = useAuthStore();

	useEffect(() => {
		handleMyLocation();
		getMyPlaces();
	}, []);

	//찜한 장소 가져오기
	const getMyPlaces = async () => {
		try {
			const response = await axiosInstance.get(`/places/my-places/${userUuid}`);
			setMyPlaces(response.data);
		} catch (err) {
			console.error(err);
		}
	};

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

	// 검색 후 카카오 지도 및 Axios로 마커 데이터 가져오기
	useEffect(() => {
		if (!map || !submittedKeyword) return;

		const ps = new kakao.maps.services.Places();
		ps.keywordSearch(submittedKeyword, (data, status) => {
			if (status === kakao.maps.services.Status.OK) {
				const bounds = new kakao.maps.LatLngBounds();
				const newCenter = {
					lat: data[0].y,
					lng: data[0].x,
				};

				// 지도 중심을 검색 결과로 이동
				map.setCenter(new kakao.maps.LatLng(newCenter.lat, newCenter.lng));
			}
		});
	}, [map, submittedKeyword]);

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
					level={13}
					onCreate={setMap}
				>
					{/* 사용자의 현재 위치에 마커 표시 */}
					<MapMarker
						position={currentPosition}
						title="내 위치"
					/>

					{/* 추가 위치들에 대한 마커 표시 */}
					{myPlaces.map((myPlace) => (
						<MapMarker
							key={myPlace.placeUuid}
							position={{ lat: myPlace.lat, lng: myPlace.lng }}
							title={myPlace.placeName}
							image={{
								src: MyPlace, // 이미지의 경로
								size: {
									width: 40, // 마커 이미지의 너비
									height: 40, // 마커 이미지의 높이
								},
							}}
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
