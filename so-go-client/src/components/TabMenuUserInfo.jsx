import { BellSimple, UserCircle } from "phosphor-react";
import { useState } from "react";

import Notification from "@/components/Notification.jsx";

export default function TabMenuUserInfo() {
  const [isLogin, setIsLogin] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="profile-header">
      {isLogin ? (
        <div className="user-info-container">
          <img src="/profile.jpg" alt="Profile" className="profile-pic" />
          <div className="user-info">
            <p className="user-name">김도은 님</p>
          </div>
        </div>
      ) : (
        <div className="login-info">
          <UserCircle size={24} weight="fill" />
          <h3>로그인해주세요</h3>
        </div>
      )}
      <div className="notification">
        <span
          className="notification-dot"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <BellSimple size={24} />
        </span>
        <Notification
          isOpen={showNotifications}
          onClose={() => setShowNotifications(false)}
        />
      </div>
    </div>
  );
}
