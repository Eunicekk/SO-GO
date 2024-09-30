import SearchPlaceList from "./SearchPlaceList";
import SearchRestaurantList from "./SearchRestaurantList";
import SearchHotelList from "./SearchHotelList";
import SearchMarketList from "./SearchMarketList";
import SearchEtcList from "./SearchEtcList";
import { useLocation } from "react-router-dom";

export default function SearchResultList() {
	const location = useLocation();
	const searchResults = location.state?.searchResults || [];

	const placeResults = searchResults.filter((result) => result.type === 0);
	const restaurantsResults = searchResults.filter((result) => result.type === 1);
	const hotelResults = searchResults.filter((result) => result.type === 2);
	const marketResults = searchResults.filter((result) => result.type === 3);
	const etcResults = searchResults.filter((result) => result.type === 4);

	return (
		<div id="search-result-list">
			<SearchPlaceList result={placeResults} />
			<SearchRestaurantList result={restaurantsResults} />
			<SearchHotelList result={hotelResults} />
			<SearchMarketList result={marketResults} />
			<SearchEtcList result={etcResults} />
		</div>
	);
}
