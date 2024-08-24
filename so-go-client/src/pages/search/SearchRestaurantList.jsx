import '@/css/search/SearchRestaurantList.css';
import SearchRestaurantListItem from '@/components/searchList/SearchRestaurantListItem';

export default function SearchRestaurantList() {
  return (
    <div id='restaurant-list'>
      <div id='restaurant-title'>
        <h1>해운대 추천 맛집</h1>
        <button>전체 보기</button>
      </div>

      <div className="restaurant-content">
        {Array.from({ length: 5 }).map((_, index) => (
          <SearchRestaurantListItem />
        ))}
      </div>
    </div>
  );
}