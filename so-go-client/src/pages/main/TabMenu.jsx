import { useNavigate } from "react-router-dom";
import { HouseLine, XCircle, Image, MapPin, MapTrifold, Bookmarks, UserCircle } from "@phosphor-icons/react";

import TabMenuUserInfo from "../../components/TabMenuUserInfo";

import "@/css/main/TabMenu.css";

export default function TabMenu() {
	const navigate = useNavigate();

	return (
		<>
			<div className="profile-container">
				<div
					className="exit-tab"
					onClick={() => navigate(-1)}
				>
					<XCircle
						size={24}
						color="red"
						weight="fill"
					/>
				</div>

				<TabMenuUserInfo />

				<div className="font-size-selector">
					<h3 className="title">내가 원하는 글자 크기</h3>

					<div className="slider">
						<span className="slider-text-small">가</span>
						<input
							type="range"
							min="1"
							max="5"
							className="range-slider"
						/>
						<span className="slider-text-big">가</span>
					</div>
				</div>

				<div className="buttons-container">
					<button
						className="button"
						onClick={() => navigate("/")}
					>
						<HouseLine
							className="button-icon"
							size={24}
						/>
						첫 화면으로
					</button>

					<button
						className="button"
						onClick={() => navigate("/create")}
					>
						<Image
							className="button-icon"
							size={24}
							weight="fill"
						/>
						여행 사진 자랑하기
					</button>

					<button
						className="button"
						onClick={() => navigate("/map")}
					>
						<MapPin
							className="button-icon"
							size={24}
							weight="fill"
						/>
						지도에서 명소 찾기
					</button>

					<button
						className="button"
						onClick={() => navigate("/my-page")}
					>
						<MapTrifold
							className="button-icon"
							size={24}
						/>
						나의 방방곡곡 지도
					</button>

					<button
						className="button"
						onClick={() => navigate("/my-page")}
					>
						<Bookmarks
							className="button-icon"
							size={24}
						/>
						내가 스크랩한 글
					</button>

					<button
						className="button"
						onClick={() => navigate("/my-page")}
					>
						<UserCircle
							className="button-icon"
							size={24}
							weight="fill"
						/>
						내 프로필
					</button>
				</div>
			</div>
		</>
	);
}
