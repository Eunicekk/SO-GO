import SearchPlaceList from "./SearchPlaceList";
import SearchHotelList from "./SearchHotelList";
import SearchRestaurantList from "./SearchRestaurantList";

export default function SearchResultList() {
  return (
    <div id="search-result-list">
      <SearchPlaceList />
      <SearchHotelList />
      <SearchRestaurantList />
    </div>
  );
}