import "@/css/place/PlaceDetail.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Circle, HeartStraight, CaretUp } from "@phosphor-icons/react";
import PlaceImage from "@/components/place/PlaceImage";
import PlaceDescription from "@/components/place/PlaceDescription";
import PlaceComfort from "@/components/place/PlaceComfort";
import PlaceReview from "@/components/place/PlaceReview";
import CustomModal from "@/components/CustomModal";
import { Box, Button, Modal, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axiosInstance from "@/axios/AxiosInstance";
import useAuthStore from "@/store/UseAuthStore";

const theme = createTheme({
	typography: {
		fontFamily: "Pretendard, sans-serif",
	},
});

export default function PlaceDetail() {
	const navigate = useNavigate();
	const location = useLocation();
	const { userUuid } = useAuthStore.getState();
	const { placeUuid } = location.state || {};
	const [placeData, setPlaceData] = useState(null);

	const [isLiked, setIsLiked] = useState(placeData?.userHeart);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isAskFinish, setIsAskFinish] = useState(false);

	const getDetail = async () => {
		try {
			const response = await axiosInstance.get(`/places/${placeUuid}`, {
				params: {
					userUuid: userUuid ? userUuid : "",
				},
			});

			setPlaceData(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (placeUuid) getDetail();
	}, [placeUuid, userUuid]);

	// 좋아요 설정
	const handleLikeButton = async () => {
		const { accessToken } = useAuthStore.getState();

		if (!accessToken) {
			alert("로그인 후 이용 가능합니다.");
			navigate("/login");
			return;
		}

		try {
			await axiosInstance.post(`/places/${placeUuid}/hearts/${userUuid}`);
			setIsLiked((prev) => !prev);
		} catch (error) {
			console.error(error);
		}
	};

	// 스크롤 상단으로 이동
	const handleUpButton = () => {
		document.getElementById("place-detail").scrollIntoView({ behavior: "smooth", block: "start" });
	};

	// 모달 열기
	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	// 모달 닫기
	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	// 모달 제출
	const handleSubmit = () => {
		// axios 추가 필요
		setIsModalOpen(false); // 기존 모달 닫기
		setIsAskFinish(true); // 확인 모달 열기
	};

	// 확인 모달 닫기
	const handleAskClose = () => {
		setIsAskFinish(false);
	};

	return (
		<div id="place-detail">
			<PlaceImage images={placeData?.placeImgs} />
			<PlaceDescription
				placeName={placeData?.placeName}
				summary={placeData?.summary}
				lat={placeData?.lat}
				lng={placeData?.lng}
				address={placeData?.address}
				date={placeData?.date}
				time={placeData?.time}
				number={placeData?.number}
				wesite={placeData?.website}
				open={handleModalOpen}
			/>
			<PlaceComfort
				parking={placeData?.parking}
				wheelchair={placeData?.wheelchair}
				pet={placeData?.pet}
				elevator={placeData?.elevator}
			/>
			<div className="gap"></div>
			<PlaceReview />
			<CustomModal
				open={isModalOpen}
				onClose={handleModalClose}
				onSubmit={handleSubmit}
			/>
			<ThemeProvider theme={theme}>
				<Modal
					open={isAskFinish}
					onClose={handleAskClose}
					id="check-modal"
				>
					<Box className="check-modal-box">
						<Typography>수정 문의가 완료되었습니다.</Typography>
						<Button
							variant="contained"
							onClick={handleAskClose}
							sx={{ mt: 2 }}
							className="check-modal-button"
						>
							확인
						</Button>
					</Box>
				</Modal>
			</ThemeProvider>
			<span
				id="like-button"
				onClick={handleLikeButton}
			>
				<Circle
					size={56}
					color={isLiked ? "#ff0000" : "#aaa"}
					weight="fill"
				/>
				<HeartStraight
					size={28}
					color="#fff"
					weight="fill"
					className="heart"
				/>
			</span>
			<span
				id="up-button"
				onClick={handleUpButton}
			>
				<Circle
					size={56}
					color="#836FFF"
					weight="fill"
				/>
				<CaretUp
					size={28}
					color="#fff"
					weight="bold"
					className="arrow"
				/>
			</span>
		</div>
	);
}
