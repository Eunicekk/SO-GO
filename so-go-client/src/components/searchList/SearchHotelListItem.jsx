import "@/css/search/SearchHotelList.css";
import defaultPlace from "@/assets/place.png";

export default function SearchHotelListItem({ thumbnail, name, address, tag, onClick }) {
	const tagArray = tag ? tag.split(",").map((tag) => tag.trim()) : [];

	return (
		<div
			id="hotel-item"
			onClick={onClick}
		>
			<div className="thumbnail">
				<img
					src={thumbnail || defaultPlace}
					alt={`${name} 이미지`}
				/>
			</div>
			<div className="content">
				<p className="name">{name}</p>
				<p className="address">{address}</p>
				<p className="detail">
					{tagArray.map((tag, index) => (
						<span key={index}>{tag} </span>
					))}
				</p>
			</div>
		</div>
	);
}
