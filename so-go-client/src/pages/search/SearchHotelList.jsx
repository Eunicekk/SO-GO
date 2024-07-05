import styles from 'css/search/SearchHotelList.module.css';
import SearchHotelListItem from './SearchHotelListItem';

export default function SearchHotelList() {
  return (
    <div>
      <div>
        <div>
          <h1>해운대 추천 숙소</h1>
          <button>전체 보기</button>
        </div>
      </div>

      <ul>
        <SearchHotelListItem />
        <SearchHotelListItem isFocus={true} />
        <SearchHotelListItem />
      </ul>
    </div>
  );
}