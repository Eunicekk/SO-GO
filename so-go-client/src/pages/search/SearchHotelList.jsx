import "@/css/search/SearchHotelList.css";
import SearchHotelListItem from "@/components/searchList/SearchHotelListItem";

export default function SearchHotelList() {
  return (
    <div id="hotel-list">
      <div id="hotel-title">
        <h1>해운대 추천 숙소</h1>
        <button>전체 보기</button>
      </div>

      <div className="hotel-content">
        {Array.from({ length: 5 }).map((_, index) => (
          <SearchHotelListItem />
        ))}
      </div>
    </div>
  );
}
