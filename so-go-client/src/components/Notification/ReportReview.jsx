import "@/css/common/Report.css";
import { useState } from "react";

function ReportReview() {
  const [isWriter, setIsWriter] = useState(false);

  return (
    <div className="report-dropdown">
      {!isWriter && <div className="report-item">신고하기</div>}

      {isWriter && (
        <>
          <div className="delete-review">삭제하기</div>
          <div className="modify-review">수정하기</div>
        </>
      )}
    </div>
  );
}

export default ReportReview;
