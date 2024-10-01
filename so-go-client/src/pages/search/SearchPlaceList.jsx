import "@/css/search/SearchPlaceList.css";
import SearchPlaceListItem from "@/components/searchList/SearchPlaceListItem";
import { useNavigate } from "react-router-dom";

export default function SearchPlaceList({ result }) {
	const navigate = useNavigate();

	const handleItemClick = (place) => {
		navigate("/place", { state: { placeUuid: place.placeUuid } });
	};

	return (
		<div id="place-list">
			<div id="place-title">
				<h1>추천 관광지</h1>
				<button>전체 보기</button>
			</div>

			<div className="place-content">
				{result.length > 0 ? (
					result.slice(0, 5).map((place) => (
						<SearchPlaceListItem
							key={place.placeUuid}
							thumbnail={place.placeImgs}
							name={place.placeName}
							address={place.address}
							tag={place.tag}
							onClick={() => handleItemClick(place)}
						/>
					))
				) : (
					<p>관련 장소가 없습니다.</p>
				)}
			</div>
		</div>
	);
}
