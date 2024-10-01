import "@/css/search/SearchPlaceList.css";
import SearchMarketListItem from "@/components/searchList/SearchMarketListItem";
import { useNavigate } from "react-router-dom";

export default function SearchMarketList({ result }) {
	const navigate = useNavigate();

	const handleItemClick = (place) => {
		navigate("/place", { state: { placeUuid: place.placeUuid } });
	};

	return (
		<div id="place-list">
			<div id="place-title">
				<h1>추천 전통시장</h1>
				<button>전체 보기</button>
			</div>

			<div className="place-content">
				{result.length > 0 ? (
					result.slice(0, 5).map((market) => (
						<SearchMarketListItem
							key={market.placeUuid}
							thumbnail={market.placeImgs}
							name={market.placeName}
							address={market.address}
							tag={market.tag}
							onClick={() => handleItemClick(market)}
						/>
					))
				) : (
					<p>관련 장소가 없습니다.</p>
				)}
			</div>
		</div>
	);
}
