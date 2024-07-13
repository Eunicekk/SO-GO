import styles from 'css/search/SearchRestaurantList.module.css';
import SearchRestaurantListItem from './SearchRestaurantListItem';

export default function SearchRestaurantList() {
  return (
    <div id={styles.restaurantList}>
      <div id={styles.restaurantTitle}>
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