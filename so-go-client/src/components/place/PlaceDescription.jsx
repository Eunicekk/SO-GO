import '@/css/place/PlaceDetail.css';
import { MapPin, Clock, Phone, Globe } from 'phosphor-react';

export default function PlaceDescription() {
  return (
    <div id="place-description">
      <div className="title-section">
        <div className="title">해목 해운대점</div>
        <div className="ask-modify">

        </div>
      </div>
      <div className="title-description">
        미쉐린 가이드에 선정된 장어덮밥 & 해산물덮밥 맛집
      </div>

      <div className="map-section">

      </div>

      <div className="info-section">
        <p className="address">
          <MapPin size={16} color="#000" weight="fill" />
          부산 해운대구 구남로24번길 8 1층
        </p>
        <p className="running-time">
          <Clock size={16} color="#000" weight="fill" />
          매일 11:00 ~ 22:00
          월~목 휴게시간 15:00 ~ 17:00
        </p>
        <p className="phone-number">
          <Phone size={16} color="#000" weight="fill" />
          0507-1385-3730
        </p>
        <p className="web-link">
          <Globe size={16} color="#000" weight="fill" />
          -
        </p>
      </div>
    </div>
  );
}