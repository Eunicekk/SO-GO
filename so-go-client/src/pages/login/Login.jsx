import "@/css/login/Login.css";
import logo from "@/assets/logo.png";
import icon_kakao from "@/assets/icon_kakao.png";
import icon_naver from "@/assets/icon_naver.png";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/UseAuthStore";

export default function Login() {
	const navigate = useNavigate();
	const setTokens = useAuthStore((state) => state.setTokens);
	const URL = "3.36.72.205:8080";
	const LOCAL = "192.168.219.106:8080";
	const SERVER = `https://so-go.kr/api`;

	// 카카오 로그인
	const kakaoLogin = () => {
		window.location.href = `http://${SERVER}/oauth2/authorization/kakao`;
	};
	// 네이버 로그인
	const naverLogin = () => {
		window.location.href = `http://${SERVER}/oauth2/authorization/naver`;
	};

	return (
		<div id="login">
			<div id="loginLogo">
				<img
					src={logo}
					alt="logo"
					className="logo"
				/>
				<hr></hr>
				<p className="text">
					소고와 함께
					<br />
					SO, GO!
				</p>
			</div>

			<div id="buttons">
				<button
					className="button kakao"
					onClick={kakaoLogin}
				>
					<img
						src={icon_kakao}
						alt="kakao"
						className="icon"
					/>
					카카오 로그인
				</button>
				<button
					className="button naver"
					onClick={naverLogin}
				>
					<img
						src={icon_naver}
						alt="naver"
						className="icon"
					/>
					네이버 로그인
				</button>
			</div>
			<Link to="/">조금 더 둘러볼래요</Link>
		</div>
	);
}
