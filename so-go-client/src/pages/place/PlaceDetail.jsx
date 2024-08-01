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

      <span id='like-button'>
        <svg xmlns="http://www.w3.org/2000/svg" className='circle' width="56" height="56" fill="#aaa" viewBox="0 0 256 256"><path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" className='heart' width="28" height="28" fill="#fff" viewBox="0 0 256 256"><path d="M240,98a57.63,57.63,0,0,1-17,41L133.7,229.62a8,8,0,0,1-11.4,0L33,139a58,58,0,0,1,82-82.1L128,69.05l13.09-12.19A58,58,0,0,1,240,98Z"></path></svg>
      </span>
      <span id='up-button'>
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#836FFF" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,125.66a8,8,0,0,1-11.32,0L128,115.31,93.66,149.66a8,8,0,0,1-11.32-11.32l40-40a8,8,0,0,1,11.32,0l40,40A8,8,0,0,1,173.66,149.66Z"></path></svg>
      </span>
    </div>
  );
}