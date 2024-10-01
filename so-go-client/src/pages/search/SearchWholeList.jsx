import { useLocation } from "react-router-dom";
import SearchPlaceListItem from "@/components/searchList/SearchPlaceListItem";

export default function SearchWholeList() {
	const location = useLocation();
	const { title, result } = location.state || {};

	return (
		<>
			<h1>{title} 전체 보기</h1>
			<div id="whole-list">
				{result ? (
					result.map((place) => (
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
					<p>장소 없음</p>
				)}
			</div>
		</>
	);
}
