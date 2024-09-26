import "@/css/place/PlaceDetail.css";
import { useState } from "react";
import { Circle, HeartStraight, CaretUp } from "phosphor-react";
import PlaceImage from "@/components/place/PlaceImage";
import PlaceDescription from "@/components/place/PlaceDescription";
import PlaceComfort from "@/components/place/PlaceComfort";
import PlaceReview from "@/components/place/PlaceReview";
import CustomModal from "@/components/CustomModal";
import { Box, Button, Modal, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		fontFamily: "Pretendard, sans-serif",
	},
});

export default function PlaceDetail() {
	const [isLiked, setIsLiked] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isAskFinish, setIsAskFinish] = useState(false);

	// 좋아요 설정
	const handleLikeButton = () => {
		setIsLiked(!isLiked);
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
			<PlaceImage />
			<PlaceDescription open={handleModalOpen} />
			<PlaceComfort />
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
