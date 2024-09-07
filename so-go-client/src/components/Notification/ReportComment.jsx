import "@/css/common/Report.css";
import { useState } from "react";

function ReportComment() {
  const [isWriter, setIsWriter] = useState(false);

  return (
    <div className="report-dropdown">
      {!isWriter && (
        <>
          <div className="report-item">신고하기</div>
          <div className="report-comment">댓글달기</div>
        </>
      )}

      {isWriter && (
        <>
          <div className="report-comment">댓글달기</div>
          <div className="delete-review">삭제하기</div>
          <div className="modify-review">수정하기</div>
        </>
      )}
    </div>
  );
}

export default ReportComment;
