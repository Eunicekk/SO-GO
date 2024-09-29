import "@/css/common/TheMenu.css";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/UseAuthStore";
import { House, MapPinArea, PlusSquare, UserCircle } from "@phosphor-icons/react";
import { useState } from "react";

export default function Menu() {
	const navigate = useNavigate();
	const [click, setClick] = useState("home");

	const { accesstoken } = useAuthStore();

	const handleHome = () => {
		navigate("/");
	};

	const handleCreateReview = () => {
		// if (accesstoken) {
		navigate("/create");
		// 	return;
		// }
		// //토큰이 없으면
		// alert("로그인 후 이용바랍니다");
	};

	const handleMap = () => {
		navigate("/map");
	};

	const hadnleMypage = () => {
		navigate("/my-page");
	};

	const handleClick = (tab) => {
		setClick(tab);
	};

	const colorText = (tab) => {
		return click === tab ? "active" : "";
	};

	const colorIcon = (tab) => {
		return click === tab ? "#836FFF" : "#000000";
	};

	return (
		<div id="bar">
			<ul id="icons">
				<li
					className="tab"
					onClick={() => {
						handleClick("home");
						handleHome();
					}}
				>
					<House
						fill={colorIcon("home")}
						size={32}
					/>
					<span className={`text ${colorText("home")}`}>홈</span>
				</li>

				<li
					className="tab"
					onClick={() => {
						handleClick("review");
						handleCreateReview();
					}}
				>
					<PlusSquare
						fill={colorIcon("review")}
						size={32}
					/>
					<span className={`text ${colorText("review")}`}>여행 후기</span>
				</li>

				<li
					className="tab"
					onClick={() => {
						handleClick("map");
						handleMap();
					}}
				>
					<MapPinArea
						fill={colorIcon("map")}
						size={32}
					/>
					<span className={`text ${colorText("map")}`}>내 지도</span>
				</li>

				<li
					className="tab"
					onClick={() => {
						handleClick("mypage");
						hadnleMypage();
					}}
				>
					<UserCircle
						fill={colorIcon("mypage")}
						size={32}
					/>
					<span className={`text ${colorText("mypage")}`}>내 정보</span>
				</li>
			</ul>
		</div>
	);
}
