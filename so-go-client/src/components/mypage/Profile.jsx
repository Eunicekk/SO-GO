import { useEffect, useState } from "react";

import axiosInstance from "@/axios/AxiosInstance";

import { Pencil } from "@phosphor-icons/react";

import "@/css/mypage/Profile.css";
import useAuthStore from "../../store/UseAuthStore";

function Profile() {
	const [userInfo, setUserInfo] = useState({
		nickname: "",
		mySentence: "",
		myProfileImg: null,
		visitRate: 0,
	});

	// const { userUuid } = useAuthStore.getState();
	const userUuid = "";

	useEffect(() => {
		const getProfileInfo = async () => {
			try {
				const response = await axiosInstance.get(`/users/${userUuid}`);

				setUserInfo(response.data);
			} catch (err) {
				console.error(err);
			}
		};

		getProfileInfo();
	}, []);

	return (
		<>
			<div className="profile-box">
				<div className="profile-img">
					<img
						src={userInfo.myProfileImg}
						alt="프로필사진"
					/>
					<div className="profile-modify">
						<Pencil size={16} />
						<span>내 정보 수정</span>
					</div>
				</div>

				<div className="profile-my-info">
					<div className="profile-my-info-container">
						<h3>{userInfo.nickname} 님</h3>
						<span>{userInfo.mySentence}</span>
					</div>
					<div>
						<span>전국 방문률</span>
						<span>{userInfo.visitRate}%</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default Profile;
