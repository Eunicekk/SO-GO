import '@/css/place/PlaceDetail.css';
import { useState } from 'react';
import { Circle, HeartStraight, CaretCircleUp } from 'phosphor-react';
import PlaceImage from '@/components/place/PlaceImage';
import PlaceDescription from '../../components/place/PlaceDescription';

export default function PlaceDetail() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeButton = () => {
    setIsLiked(!isLiked);
  }

  const handleUpButton = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div id='place-detail'>
      <PlaceImage />
      <PlaceDescription />

      <span id='like-button' onClick={handleLikeButton}>
        <Circle size={56} color={isLiked ? "#ff0000" : "#aaa"} weight="fill" />
        <HeartStraight size={28} color="#fff" weight="fill" className="heart" />
      </span>
      <span id='up-button' onClick={handleUpButton}>
        <CaretCircleUp size={56} color="#836FFF" weight="fill" />
      </span>
    </div>
  );
}