import '@/css/search/SearchPlaceList.css';
import SearchPlaceListItem from '@/components/SearchPlaceListItem';

export default function SearchPlaceList() {
  return (
    <div id='placeList'>
      <div id='placeTitle'>
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