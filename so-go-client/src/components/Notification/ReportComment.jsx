import "@/css/common/Report.css";
import { useEffect, useState } from "react";
import useAuthStore from "../../store/UseAuthStore";
import axiosInstance from "@/axios/AxiosInstance";
import { useNavigate } from "react-router-dom";

function ReportComment({ reviewUuid, userUUID }) {
	const [isWriter, setIsWriter] = useState(false);

	const { userUuid } = useAuthStore();

	useEffect(() => {
		if (userUuid === userUUID) {
			setIsWriter(true);
		} else {
			setIsWriter(false);
		}
	}, [userUuid, commentUuid]);

	const deleteComment = async () => {
		try {
			axiosInstance.delete(`/${reviewUuid}/comments/${commentUuid}`);

			alert("삭제되었습니다");
			navigate("/review", { state: reviewUuid });
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="report-dropdown">
			{!isWriter && (
				<>
					<div className="report-item">신고하기</div>
					{/* <div className="report-comment">댓글달기</div> */}
				</>
			)}

			{isWriter && (
				<>
					{/* <div className="report-comment">댓글달기</div> */}
					<div
						className="delete-review"
						onClick={deleteComment}
					>
						삭제하기
					</div>
					{/* <div className="modify-review">수정하기</div> */}
				</>
			)}
		</div>
	);
}

export default ReportComment;
