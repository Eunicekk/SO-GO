import "@/css/search/SearchPlaceList.css";
import SearchEtcListItem from "@/components/searchList/SearchEtcListItem";
import { useNavigate } from "react-router-dom";

export default function SearchEtcList({ result }) {
	const navigate = useNavigate();

	const handleItemClick = (place) => {
		navigate("/place", { state: { placeUuid: place.placeUuid } });
	};

	const handleWholeClick = () => {
		navigate("/list", { state: { title: "기타 명소", result } });
	};

	return (
		<div id="place-list">
			<div id="place-title">
				<h1>기타 명소</h1>
				{result.length > 0 ? <button onClick={handleWholeClick}>전체 보기</button> : ""}
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
							onClick={() => handleItemClick(etc)}
						/>
					))
				) : (
					<p>관련 장소가 없습니다.</p>
				)}
			</div>
		</div>
	);
}
