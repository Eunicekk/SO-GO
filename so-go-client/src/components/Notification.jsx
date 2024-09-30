import React, { useEffect, useState } from "react";
import "@/css/common/Notification.css";

import axiosInstance from "@/axios/AxiosInstance";

import { XCircle } from "@phosphor-icons/react";
import useAuthStore from "../store/UseAuthStore";

export default function Notification({ isOpen, onClose }) {
	const [notifications, setNotifications] = useState([]);

	const { userUuid } = useAuthStore();

	useEffect(() => {
		const getMyNotification = async () => {
			try {
				const response = await axiosInstance.get(`/notifications/${userUuid}`);
				setNotifications(response.data);
			} catch (err) {
				console.error(err);
			}
		};

		getMyNotification();
	}, []);

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

			{notifications.length === 0 ? (
				<p>알람이 없습니다</p>
			) : (
				notifications.map((notification) => (
					<div className="notification-item">
						<span className="highlight">{notification.content}</span>
					</div>
				))
			)}
		</div>
	);
}
