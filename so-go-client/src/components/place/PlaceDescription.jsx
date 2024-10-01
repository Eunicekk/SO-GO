import "@/css/place/PlaceDetail.css";
import { PencilLine, MapPin, Clock, Phone, Globe } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function PlaceDescription({ placeName, summary, lat, lng, address, date, time, number, website, open }) {
	const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

	useEffect(() => {
		if (lat && lng) {
			setCoordinates({ lat, lng });
		}
	}, [lat, lng]);

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

			<Map
				className="map-section"
				center={coordinates}
				level={3}
			>
				<MapMarker position={coordinates}></MapMarker>
			</Map>

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
						{date && time ? (
							<>
								{date} <br /> {time}
							</>
						) : date ? (
							date
						) : time ? (
							time
						) : (
							"-"
						)}
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
