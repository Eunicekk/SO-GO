import "@/css/mypage/UserInfoModal.css";
import { useState } from "react";
import DefaultProfile from "@/assets/profile.png";
import axiosInstance from "@/axios/AxiosInstance";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import useAuthStore from "../../store/UseAuthStore";
import { X, XCircle } from "@phosphor-icons/react";

const UserInfoModal = ({ onClose, userInfo }) => {
	const [nickname, setNickname] = useState(userInfo.nickname);
	const [mySentence, setMySentence] = useState(userInfo.sentence);
	const [myProfileImg, setMyProfileImg] = useState(userInfo.myProfileImg || DefaultProfile);
	const [selectedImage, setSelectedImage] = useState(null);

	// 닉네임 변경 이벤트
	const handleNicknameChange = (event) => {
		setNickname(event.target.value);
	};

	// 한마디 변경 이벤트
	const handleMySentenceChange = (event) => {
		setMySentence(event.target.value);
	};

	// 프로필 이미지 변경 이벤트
	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setMyProfileImg(imageUrl);
			setSelectedImage(file);
		}
	};

	//이미지 S3
	//S3에 올리고 imageUrl 받아오기
	const Bucket = import.meta.env.VITE_AMPLIFY_BUCKET;

	const s3 = new S3Client({
		region: import.meta.env.VITE_AWS_REGION,
		credentials: {
			accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
			secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
		},
	});

	// 이미지 저장
	const uploadS3 = async (file) => {
		try {
			const fileName = `${Date.now()}_${file.name}`;

			// 이미지 업로드
			await s3.send(
				new PutObjectCommand({
					Bucket,
					Key: fileName,
					Body: file,
					ContentType: file.type,
					ACL: "public-read", // 퍼블릭으로 설정
				}),
			);

			// 업로드된 이미지의 URL 생성
			const imgUrl = `https://${Bucket}.s3.amazonaws.com/${fileName}`;
			return imgUrl;
		} catch (error) {
			console.error("Error uploading to S3:", error);
			console.error("Error details:", JSON.stringify(error, Object.getOwnPropertyNames(error)));
			console.error("Error stack:", error.stack);
			return null;
		}
	};

	const { userUuid } = useAuthStore();

	// 수정하기 버튼 클릭 시
	const handleUpdate = async () => {
		if (validateInputs) {
			let updatedProfileImg = myProfileImg;

			// 선택된 이미지가 있는 경우 업로드하고 URL 업데이트
			if (selectedImage) {
				const uploadedImageUrl = await uploadS3(selectedImage);

				if (uploadedImageUrl) {
					updatedProfileImg = uploadedImageUrl;
				}
			} else if (myProfileImg === DefaultProfile) {
				updatedProfileImg = null;
			}

			const newUserInfo = {
				nickname: nickname,
				sentence: mySentence,
				img: updatedProfileImg,
			};

			console.log(newUserInfo);

			try {
				const response = await axiosInstance.patch(`/users/${userUuid}`, newUserInfo);
				console.log(response);

				alert("회원정보가 수정되었습니다!");
				onClose();
			} catch (err) {
				console.error(err);
			}
		}
	};

	//유효성 검사 폼
	const validateInputs = () => {
		return nickname && mySentence;
	};

	//중복확인
	const checkNickname = async () => {
		try {
			const response = await axiosInstance.get(`/users`, {
				params: { nickname: nickname },
			});

			console.log(response);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="modal">
			<XCircle
				fill="red"
				weight="fill"
				size={32}
				onClick={onClose}
				className="modal-close-btn"
			/>
			<h1>회원 정보 수정</h1>
			<div>
				<h3>프로필 사진</h3>
				<div className="profile-img-container">
					<img
						// src={myProfileImg || DefaultProfile}
						src="https://www.harpersbazaar.co.kr/resources_old/online/org_online_image/0a2f4e2d-b577-4af7-99a9-3817a837387e.jpg"
						alt="프로필 사진"
						className="profile-img-now"
						onClick={() => document.getElementById("profile-img-input").click()}
					/>
					<input
						type="file"
						id="profile-img-input"
						accept="image/*"
						style={{ display: "none" }}
						onChange={handleImageChange}
					/>
				</div>
			</div>
			<div className="profile-info-text">
				<h3>내 정보</h3>
				<div>
					<input
						type="text"
						value={nickname}
						placeholder={"닉네임"}
						onChange={handleNicknameChange}
					/>
					<button onClick={checkNickname}>중복확인</button>
				</div>

				<div>
					<input
						type="text"
						value={mySentence}
						placeholder="나의 한마디"
						onChange={handleMySentenceChange}
					/>
					<button onClick={handleUpdate}>수정하기</button>
				</div>

				<div className="profile-info-buttons">
					<button>로그아웃</button>
					<button>회원탈퇴</button>
				</div>
			</div>
		</div>
	);
};

export default UserInfoModal;
