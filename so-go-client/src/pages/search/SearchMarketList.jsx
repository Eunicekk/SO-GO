import "@/css/search/SearchPlaceList.css";
import SearchPlaceListItem from "@/components/searchList/SearchPlaceListItem";

export default function SearchMarketList() {
	return (
		<div id="place-list">
			<div id="place-title">
				<h1>추천 전통시장</h1>
				<button>전체 보기</button>
			</div>

			<div className="place-content">
				{Array.from({ length: 5 }).map((_, index) => (
					<SearchPlaceListItem />
				))}
			</div>
		</div>
	);
}
