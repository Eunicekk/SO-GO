import styles from '@/css/place/PlaceDetail.module.css';
import PlaceImage from '@/components/PlaceImage';

export default function PlaceDetail() {
  return (
    <div id='placeDetail'>
      <div id="placeImage">
        <span id={styles.count}>1 / 10</span>
        <div id={styles.imageWrap}>
          <ul id={styles.imageUl}>
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