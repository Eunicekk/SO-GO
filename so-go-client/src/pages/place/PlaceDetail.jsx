import '@/css/place/PlaceDetail.css';
import PlaceImage from '@/components/PlaceImage';

export default function PlaceDetail() {
  return (
    <div id='placeDetail'>
      <div id='placeImage'>
        <span id='imageCount'>1 / 10</span>
        <div id='imageWrap'>
          <ul>
            <PlaceImage />
            <PlaceImage />
            <PlaceImage />
            <PlaceImage />
          </ul>
        </div>
      </div>
    </div>
  );
}