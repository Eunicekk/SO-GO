import '@/css/search/SearchPlaceList.css';

export default function SearchPlaceListItem() {
  return (
    <li className='place'>
      <div className='thumbnail'>
        <img src="https://tourimage.interpark.com//Spot/208/17475/201204/6347034407393292731.jpg" alt="관광지 이미지" />
      </div>
      <div className='content'>
        <p className='styles.name'>동백섬</p>
        <p className='address'>부산 해운대구 우동 710-1</p>
        <p className='detail'>#걷기좋음 #바다풍경 #등산 #자전거가능 #가족끼리</p>
      </div>
    </li>
  );
}