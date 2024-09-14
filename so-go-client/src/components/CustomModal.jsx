import "@/css/CustomModal.css";
import { useState } from "react";
import { Box, Button, FormControlLabel, Modal, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		fontFamily: "Pretendard, sans-serif",
	},
});

const CustomModal = ({ open, onClose, onSubmit }) => {
	const [selectedOption, setSelectOption] = useState("");
	const [textAreaValue, setTextAreaValue] = useState("");

	const changeOption = () => {
		setSelectOption(event.target.value);
	};

	const changeTextArea = () => {
		setTextAreaValue(event.target.value);
	};

	const submit = () => {
		onSubmit({ option: selectedOption, details: textAreaValue });
		onClose();
	};

	return (
		<ThemeProvider theme={theme}>
			<Modal
				open={open}
				onClose={onClose}
				onSubmit={submit}
				id="modal"
			>
				<Box
					className="modal-box"
					onClick={(e) => e.stopPropagation()}
				>
					<Typography className="modal-title">수정 문의</Typography>
					<RadioGroup
						value={selectedOption}
						onChange={changeOption}
					>
						<FormControlLabel
							value="1"
							control={<Radio sx={{ "&.Mui-checked": { color: "#836FFF" } }} />}
							label="비속어, 비방, 비난, 괴롭힘 등"
							className="radio-text"
						/>
						<FormControlLabel
							value="2"
							control={<Radio sx={{ "&.Mui-checked": { color: "#836FFF" } }} />}
							label="광고성 게시물"
							className="radio-text"
						/>
						<FormControlLabel
							value="3"
							control={<Radio sx={{ "&.Mui-checked": { color: "#836FFF" } }} />}
							label="음란성 내용, 성희롱 등"
							className="radio-text"
						/>
						<FormControlLabel
							value="4"
							control={<Radio sx={{ "&.Mui-checked": { color: "#836FFF" } }} />}
							label="개인정보 침해, 사칭, 사진 도용"
							className="radio-text"
						/>
					</RadioGroup>
					<TextField
						label="기타 문의사항을 작성해주세요."
						multiline
						fullWidth
						rows={4}
						value={textAreaValue}
						onChange={changeTextArea}
						className="textarea"
						sx={{
							"& .MuiOutlinedInput-root": {
								"& fieldset": {
									borderColor: "#836FFF", // 텍스트 필드 테두리 색상
								},
								"&.Mui-focused fieldset": {
									borderColor: "#836FFF", // 텍스트 필드 포커스 시 색상
								},
								"& .MuiInputLabel-root": {
									"&.Mui-focused": {
										color: "#836FFF", // 포커스 시 레이블 색상
									},
								},
							},
						}}
					/>
					<Button
						className="modal-button"
						onClick={submit}
						variant="contained"
						sx={{ backgroundColor: "#836FFF", color: "#FFFFFF" }}
					>
						문의 사항 제출하기
					</Button>
				</Box>
			</Modal>
		</ThemeProvider>
	);
};

export default CustomModal;
