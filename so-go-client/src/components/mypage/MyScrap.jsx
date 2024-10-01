import { useEffect, useState } from "react";
import useAuthStore from "../../store/UseAuthStore";
import axiosInstance from "@/axios/AxiosInstance";

const MyScrap = () => {
	const [myScarpList, setMyScrapList] = useState([]);

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
			{myScarpList.length === 0 ? (
				<p>스크랩한 리뷰가 없습니다.</p>
			) : (
				myScarpList.map((myScrap) => {
					<div>
						<img
							src={myScrap.img}
							alt="스크랩 사진"
						/>

						<div>
							<p>{myScrap.content}</p>
							<div>
								<img
									src={myScrap.userImg}
									alt="유저 프사"
								/>
								<span>{myScrap.userNickname}</span>
							</div>
						</div>
					</div>;
				})
			)}
		</>
	);
};

export default MyScrap;
