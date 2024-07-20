import '@/css/search/SearchRestaurantList.css';
import SearchRestaurantListItem from '@/components/SearchRestaurantListItem';

export default function SearchRestaurantList() {
  return (
    <div id='restaurantList'>
      <div id='restaurantTitle'>
        <h1>해운대 추천 맛집</h1>
        <button>전체 보기</button>
      </div>

      <ul>
        <SearchRestaurantListItem />
        <SearchRestaurantListItem isFocus={true} />
        <SearchRestaurantListItem />
      </ul>
    </div>
  );
}