import "@/css/search/SearchHotelList.css";

export default function SearchHotelListItem() {
	return (
		<div id="hotel-item">
			<div className="thumbnail">
				<img
					src="https://search.pstatic.net/common/?src=https://content.r9cdn.net/himg/cf/c1/ec/revato-6730-6467863-816178.jpg&type=f218_216_hotel"
					alt="숙소 이미지"
				/>
			</div>
			<div className="content">
				<p className="name">파라다이스 호텔 부산</p>
				<p className="address">부산 해운대구 해운대해변로 296</p>
				<p className="detail">#오션뷰 #고급호텔</p>
			</div>
		</div>
	);
}
