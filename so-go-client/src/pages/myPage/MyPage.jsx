import { useState } from "react";

import Profile from "@/components/mypage/Profile.jsx";
import MyTrip from "@/components/mypage/MyTrip";
import MyScrap from "@/components/mypage/MyScrap";
import MyMap from "@/components/mypage/MyMap";
import MyAnnouncement from "@/components/mypage/MyAnnouncement";

import "@/css/mypage/MyPage.css";

function MyPage() {
	const [selectedTab, setSelectedTab] = useState("내 여행");

	// 탭 선택을 변경하는 함수
	const handleTabClick = (tab) => {
		setSelectedTab(tab);
	};

	return (
		<div>
			<Profile />
			<div className="mypage-contents">
				{/* 탭 메뉴 */}
				<nav className="mypage-tab-menu">
					{["내 여행", "내 스크랩", "전국 지도", "공지 사항"].map((tab) => (
						<h3
							key={tab}
							className={`tab-button ${selectedTab === tab ? "active" : ""}`}
							onClick={() => handleTabClick(tab)}
						>
							{tab}
						</h3>
					))}
				</nav>

				{/* 선택된 탭에 따라 콘텐츠 표시 */}
				<div className="tab-content">
					{selectedTab === "내 여행" && <MyTrip />}
					{selectedTab === "내 스크랩" && <MyScrap />}
					{selectedTab === "전국 지도" && <MyMap />}
					{selectedTab === "공지 사항" && <MyAnnouncement />}
				</div>
			</div>
		</div>
	);
}

export default MyPage;
