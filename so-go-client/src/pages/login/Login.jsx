import '@/css/login/Login.css'
import logo from '@/assets/logo.png';
import icon_kakao from '@/assets/icon_kakao.png';
import icon_naver from '@/assets/icon_naver.png';

export default function Login () {
  return (
    <div id='login'>
      <div id='loginLogo'>
        <img src={logo} alt="logo" className='logo' />
        <hr></hr>
        <p className='text'>
          소고와 함께<br/>
          SO, GO!
        </p>
      </div>

      <div id='buttons'>
        <button className='button kakao'>
          <img src={icon_kakao} alt="kakao" className='icon' />
          카카오 로그인
        </button>
        <button className='button naver'>
          <img src={icon_naver} alt="naver" className='icon' />
          네이버 로그인
        </button>
      </div>
    </div>
  );
}