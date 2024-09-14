import { useEffect, useState } from "react";

const MyScrap = () => {
	const [myScarpList, setMyScrapList] = useState([]);

	//여기서 axios 연결
	useEffect(() => {}, []);

	return (
		<>
			{myScarpList.map((myScrap) => {
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
			})}
			<p>스크랩페이지입니다</p>
		</>
	);
};

export default MyScrap;
