import "@/css/search/SearchPlaceList.css";
import SearchPlaceListItem from "@/components/searchList/SearchPlaceListItem";
import { useEffect } from "react";

export default function SearchPlaceList({ result }) {
	cosnt[(address, setAddress)] = useState([]);

	useEffect(() => {
		const { kakao } = window;
		const geocoder = new kakao.maps.services.Geocoder();

		const fetchAddress = async () => {
			const addressPRomise = result.map((place) => {
				const coords = new kakao.maps.LatLng(place.lat, place.lng);

				return new Promise((resolve, reject) => {});
			});
		};
	});

	return (
		<div id="place-list">
			<div id="place-title">
				<h1>추천 관광지</h1>
				<button>전체 보기</button>
			</div>

			<div className="place-content">
				{result.from({ length: 5 }).map((place, index) => (
					<SearchPlaceListItem
						key={index}
						thumbnail={place.placeImgs}
						name={place.placeName}
						address={place.address}
						detail={place.tag}
					/>
				))}
			</div>
		</div>
	);
}
