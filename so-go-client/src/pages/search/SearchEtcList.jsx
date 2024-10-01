import "@/css/search/SearchPlaceList.css";
import SearchEtcListItem from "@/components/searchList/SearchEtcListItem";

export default function SearchEtcList({ result }) {
	return (
		<div id="place-list">
			<div id="place-title">
				<h1>기타 명소</h1>
				<button>전체 보기</button>
			</div>

			<div className="place-content">
				{result.length > 0 ? (
					result.slice(0, 5).map((etc) => (
						<SearchEtcListItem
							key={etc.placeUuid}
							thumbnail={etc.placeImgs}
							name={etc.placeName}
							address={etc.address}
							tag={etc.tag}
						/>
					))
				) : (
					<p>관련 장소가 없습니다.</p>
				)}
			</div>
		</div>
	);
}
