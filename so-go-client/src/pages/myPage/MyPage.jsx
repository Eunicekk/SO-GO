import { useState } from "react";

import Profile from "@/components/mypage/Profile.jsx";

import "@/css/mypage/MyPage.css";
import MyTrip from "../../components/mypage/MyTrip";

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
					{["내 여행", "내 스크랩", "내 발자취", "내 배지", "공지 사항"].map((tab) => (
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
					{selectedTab === "내 스크랩" && <div>내 스크랩 콘텐츠</div>}
					{selectedTab === "내 발자취" && <div>내 발자취 콘텐츠</div>}
					{selectedTab === "내 배지" && <div>내 배지 콘텐츠</div>}
					{selectedTab === "공지 사항" && <div>공지 사항 콘텐츠</div>}
				</div>
			</div>
		</div>
	);
}

export default MyPage;
