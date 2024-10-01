import "@/css/common/Report.css";
import { useEffect, useState } from "react";
import useAuthStore from "../../store/UseAuthStore";
import axiosInstance from "@/axios/AxiosInstance";
import { useNavigate } from "react-router-dom";

function ReportReview({ reviewUserUuid, reviewUuid }) {
	const [isWriter, setIsWriter] = useState(false);
	const navigate = useNavigate();

	const { userUuid } = useAuthStore();

	useEffect(() => {
		if (userUuid === reviewUserUuid) {
			setIsWriter(true);
		} else {
			setIsWriter(false);
		}
	}, [userUuid, reviewUserUuid]);

	const deleteReview = async () => {
		try {
			axiosInstance.delete(`/reviews/${reviewUuid}`);

			alert("삭제되었습니다");
			navigate("/");
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="report-dropdown">
			{!isWriter && <div className="report-item">신고하기</div>}

			{isWriter && (
				<>
					<div
						className="delete-review"
						onClick={deleteReview}
					>
						삭제하기
					</div>
					{/* <div className="modify-review">수정하기</div> */}
				</>
			)}
		</div>
	);
}

export default ReportReview;
