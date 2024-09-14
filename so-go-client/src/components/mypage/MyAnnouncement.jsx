import { useEffect, useState } from "react";

import "@/css/mypage/MyAnnouncement.css";

const MyAnnouncement = () => {
	const [annoucements, setAnnouncements] = useState([
		"SOGO 사이트 이용하는 법",
		"글자 크기는 어떻게 키우나요?",
		"이용 시 이런 점은 꼭 지켜주세요!",
		"6월 바캉스 인증 이벤트, 선물이 펑펑!",
		"5월, 이달의 리뷰어 선정",
		"5월, 현재 전국방방곡곡 랭킹 순위 TOP 50",
	]);

	//axios연결
	useEffect(() => {}, []);

	return (
		<div className="my-announcement-list">
			{annoucements.map((announcement, index) => (
				<div
					className="my-announcement"
					key={index}
				>
					<span className="my-announcement-title">{announcement}</span>
				</div>
			))}
		</div>
	);
};

export default MyAnnouncement;
