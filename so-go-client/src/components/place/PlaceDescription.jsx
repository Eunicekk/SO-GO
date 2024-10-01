import "@/css/place/PlaceDetail.css";
import { PencilLine, MapPin, Clock, Phone, Globe } from "@phosphor-icons/react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function PlaceDescription({ placeName, summary, lat, lng, address, date, time, number, website, open }) {
	return (
		<div id="place-description">
			<div className="title-section">
				<div className="title">{placeName}</div>
				<div
					className="ask-modify"
					onClick={open}
				>
					<PencilLine
						size={16}
						color="#949494"
						weight="fill"
					/>
					수정 문의
				</div>
			</div>
			<div className="title-description">{summary}</div>

			<div className="map-section">
				<Map
					center={{ lat: lat, lng: lng }}
					style={{ width: `100%`, height: 200, borderRadius: 16 }}
					level={2}
				>
					<MapMarker position={{ lat: lat, lng: lng }}></MapMarker>
				</Map>
			</div>

			<div className="info-section">
				<div className="address">
					<MapPin
						size={16}
						color="#000"
						weight="fill"
					/>
					<p>{address}</p>
				</div>
				<div className="running-time">
					<Clock
						size={16}
						color="#000"
						weight="fill"
					/>
					<p className="time-text">
						{date} <br />
						{time}
					</p>
				</div>
				<div className="phone-number">
					<Phone
						size={16}
						color="#000"
						weight="fill"
					/>
					<p>{number ? number : "-"}</p>
				</div>
				<div className="web-link">
					<Globe
						size={16}
						color="#000"
						weight="fill"
					/>
					<p>{website ? website : "-"}</p>
				</div>
			</div>
		</div>
	);
}
