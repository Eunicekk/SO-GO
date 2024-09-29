import "@/css/search/SearchPlaceList.css";
import SearchPlaceListItem from "@/components/searchList/SearchPlaceListItem";

export default function SearchEtcList() {
	return (
		<div id="place-list">
			<div id="place-title">
				<h1>기타 명소</h1>
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
