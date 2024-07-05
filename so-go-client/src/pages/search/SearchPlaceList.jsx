import styles from 'css/SearchPlaceList.module.css';
import SearchPlaceListItem from './SearchPlaceListItem';

export default function SearchPlaceList() {
  return (
    <div id={styles.placeList}>
      <div id={styles.placeTitle}>
        <h1>해운대 추천 관광지</h1>
        <button>전체 보기</button>
      </div>

      <ul>
        <SearchPlaceListItem/>
        <SearchPlaceListItem/>
        <SearchPlaceListItem/>
      </ul>
    </div>
  );
}