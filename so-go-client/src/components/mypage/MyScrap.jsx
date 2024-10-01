import { useEffect, useState } from "react";
import useAuthStore from "../../store/UseAuthStore";
import axiosInstance from "@/axios/AxiosInstance";
import DefaultProfile from "@/assets/profile.png";

import "@/css/mypage/MyScrap.css";

const MyScrap = () => {
	const [myScrapList, setMyScrapList] = useState([]);

	const { userUuid } = useAuthStore();

	//여기서 axios 연결
	useEffect(() => {
		getMyScrapList();
	}, []);

	const getMyScrapList = async () => {
		try {
			const response = await axiosInstance.get(`/reviews/scraps/${userUuid}`);
			setMyScrapList(response.data);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			{myScrapList.length === 0 ? (
				<p>스크랩한 리뷰가 없습니다.</p>
			) : (
				myScrapList.map((myScrap, index) => (
					<div
						key={index}
						className="my-scrap-container"
					>
						<img
							src={myScrap.img}
							className="my-scrap-img"
							alt="스크랩 사진"
						/>

						<div className="my-scrap-info">
							<p className="my-scrap-content">{myScrap.content}</p>
							<div className="my-scrap-writer-info">
								<img
									src={myScrap.userImg || DefaultProfile}
									alt="유저 프사"
									className="my-scrap-writer"
								/>
								<span>{myScrap.userNickname}</span>
							</div>
						</div>
					</div>
				))
			)}
		</>
	);
};

export default MyScrap;
