import "@/css/place/PlaceDetail.css";
import { PencilLine, MapPin, Clock, Phone, Globe } from "phosphor-react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function PlaceDescription({ open }) {
	return (
		<div id="place-description">
			<div className="title-section">
				<div className="title">해목 해운대점</div>
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
			<div className="title-description">미쉐린 가이드에 선정된 장어덮밥 & 해산물덮밥 맛집</div>

			<div className="map-section">
				<Map
					center={{ lat: 35.161807717246035, lng: 129.15966171346824 }}
					style={{ width: `100%`, height: 200, borderRadius: 16 }}
					level={2}
				>
					<MapMarker position={{ lat: 35.161807717246035, lng: 129.15966171346824 }}></MapMarker>
				</Map>
			</div>

			<div className="info-section">
				<div className="address">
					<MapPin
						size={16}
						color="#000"
						weight="fill"
					/>
					<p>부산 해운대구 구남로24번길 8 1층</p>
				</div>
				<div className="running-time">
					<Clock
						size={16}
						color="#000"
						weight="fill"
					/>
					<p className="time-text">
						매일 11:00 ~ 22:00 <br />
						월~목 휴게시간 15:00 ~ 17:00
					</p>
				</div>
				<div className="phone-number">
					<Phone
						size={16}
						color="#000"
						weight="fill"
					/>
					<p>0507-1385-3730</p>
				</div>
				<div className="web-link">
					<Globe
						size={16}
						color="#000"
						weight="fill"
					/>
					<p>-</p>
				</div>
			</div>
		</div>
	);
}
