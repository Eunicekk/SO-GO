import styles from '@/css/place/PlaceDetail.module.css';

export default function PlaceImage() {
  return (
    <li className={styles.imageLi}>
      <img className={styles.imageSize} src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=d9f11099-fe59-470a-8d5b-6a9b56a3eb10" alt="관광 사진" />
    </li>
  );
}