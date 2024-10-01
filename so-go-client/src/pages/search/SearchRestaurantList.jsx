import "@/css/search/SearchRestaurantList.css";
import SearchRestaurantListItem from "@/components/searchList/SearchRestaurantListItem";
import { useNavigate } from "react-router-dom";

export default function SearchRestaurantList({ result }) {
	const navigate = useNavigate();

	const handleItemClick = (place) => {
		navigate("/place", { state: { placeUuid: place.placeUuid } });
	};

	const handleWholeClick = () => {
		navigate("/list", { state: { title: "추천 맛집", result } });
	};

	return (
		<div id="restaurant-list">
			<div id="restaurant-title">
				<h1>추천 맛집</h1>
				{result.length > 0 ? <button onClick={handleWholeClick}>전체 보기</button> : ""}
			</div>

			<div className="restaurant-content">
				{result.length > 0 ? (
					result.slice(0, 5).map((restaurant) => (
						<SearchRestaurantListItem
							key={restaurant.placeUuid}
							thumbnail={restaurant.placeImgs}
							name={restaurant.placeName}
							address={restaurant.address}
							tag={restaurant.tag}
							onClick={() => handleItemClick(restaurant)}
						/>
					))
				) : (
					<p>관련 장소가 없습니다.</p>
				)}
			</div>
		</div>
	);
}
