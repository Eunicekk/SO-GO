import "@/css/search/SearchRestaurantList.css";

export default function SearchRestaurantListItem({ isFocus }) {
	return (
		<div id="restaurant-item">
			<div className="thumbnail">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1-hB_18obeDp2eY9wMtdYR1jqIuHn_lAOQ&s"
					alt="맛집 이미지"
				/>
			</div>
			<div className="content">
				<p className="name">해목</p>
				<p className="address">부산 해운대구 구남로24번길 8</p>
				<p className="detail">#장어덮밥 #해산물덮밥</p>
			</div>
		</div>
	);
}
