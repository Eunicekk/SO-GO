import "@/css/main/TabMenu.css";
import { useNavigate } from "react-router-dom";
import { HouseLine, XCircle, Image, MapPin, MapTrifold, Bookmarks, UserCircle } from "phosphor-react";

import TabMenuUserInfo from "../../components/TabMenuUserInfo";

export default function TabMenu() {
	const navigate = useNavigate();

	return (
		<>
			<div className="profile-container">
				<TabMenuUserInfo />

				<div className="font-size-selector">
					<div onClick={() => navigate(-1)}>
						<XCircle
							size={24}
							color="red"
							weight="fill"
						/>
					</div>
					<h3 className="title">내가 원하는 글자 크기</h3>
					<div className="slider">
						<span className="slider-text">가</span>
						<input
							type="range"
							min="1"
							max="5"
							className="range-slider"
						/>
						<span className="slider-text">가</span>
					</div>
				</div>

				<div className="buttons-container">
					<button
						className="button home-button"
						onClick={() => navigate("/")}
					>
						<HouseLine size={24} />첫 화면으로 돌아가기
					</button>
					<button className="button highlight">
						<Image
							size={24}
							weight="fill"
						/>
						여행 사진 자랑하기
					</button>
					<button className="button">
						<MapPin
							size={24}
							weight="fill"
						/>
						지도에서 명소 찾기
					</button>
					<button className="button">
						<MapTrifold size={24} />
						나의 방방곡곡 지도 보기
					</button>
					<button className="button">
						<Bookmarks size={24} />
						내가 스크랩한 글 모아보기
					</button>
					<button className="button">
						<UserCircle
							size={24}
							weight="fill"
						/>
						내 프로필 꾸미기
					</button>
				</div>
			</div>
		</>
	);
}
