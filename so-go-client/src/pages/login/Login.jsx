import '@/css/login/Login.css'
import logo from '@/assets/logo.png';
import icon_kakao from '@/assets/icon_kakao.png';
import icon_naver from '@/assets/icon_naver.png';
import { useNavigate } from 'react-router-dom'; 
import useAuthStore from '../../store/UseAuthStore';

export default function Login () {
  const navigate = useNavigate();
  const setTokens = useAuthStore((state) => state.setTokens);
  const URL = `localhost`;

  // 카카오 로그인
  const kakaoLogin = () => {
    window.location.href = `http://${URL}/oauth2/authorization/kakao`;
  }
  // 네이버 로그인
  const naverLogin = () => {
    window.location.href = `http://${URL}/oauth2/authorization/naver`;
  }

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
          <img src={icon_kakao} onClick={kakaoLogin} alt="kakao" className='icon' />
          카카오 로그인
        </button>
        <button className='button naver'>
          <img src={icon_naver} onClick={naverLogin} alt="naver" className='icon' />
          네이버 로그인
        </button>
      </div>
    </div>
  );
}