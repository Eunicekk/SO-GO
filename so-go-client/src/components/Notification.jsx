import React from "react";
import "@/css/common/Notification.css";

import { XCircle } from "@phosphor-icons/react";

export default function Notification({ isOpen, onClose }) {
	return (
		<div className={`notifications-container ${isOpen ? "open" : ""}`}>
			<div className="notification-header">
				<h3>내 알림창</h3>
				<XCircle
					onClick={onClose}
					size={24}
					color="red"
					weight="fill"
				/>
			</div>
			<div className="notification-item">
				<p>
					김도은 님의 담양 죽녹원 글이 <span className="highlight">스크랩 100개</span> 돌파!
				</p>
				<div className="notification-image"></div>
			</div>
			<div className="notification-item">
				<p>
					김도은 님의 담양 죽녹원 글에 <span className="highlight">댓글이 달렸어요!</span>
				</p>
				<div className="notification-image"></div>
			</div>
			<div className="notification-item">
				<p>
					<span className="warning">경고 1회입니다.</span> (사유: 광고)
				</p>
				<div className="notification-image"></div>
			</div>
		</div>
	);
}
