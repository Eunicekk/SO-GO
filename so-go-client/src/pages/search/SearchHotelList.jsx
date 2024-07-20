import '@/css/search/SearchHotelList.css';
import SearchHotelListItem from '@/components/SearchHotelListItem';

export default function SearchHotelList() {
  return (
    <div id='hotelList'>
      <div id='hotelTitle'>
        <h1>해운대 추천 숙소</h1>
        <button>전체 보기</button>
      </div>

      <ul>
        <SearchHotelListItem />
        <SearchHotelListItem isFocus={true} />
        <SearchHotelListItem />
      </ul>
    </div>
  );
}