import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import avatarImg from "../assets/profile.png";
import { FaSearch } from "react-icons/fa";

function ProfileSection({ isSidebarOpen }) {
  const [user] = useState({
    name: "Emma Hills",
    avatar: avatarImg,
  });

  return (
    <div className={`profile d-flex align-items-center flex-nowrap overflow-hidden ${isSidebarOpen ? 'active' : ''}`}>

              <div className="tablet">
                <FaSearch size={20} className="search text-secondary" />
              </div>

      {/* Bell Icon */}
    <div className="bell-wrapper">
      <FaBell className="bell me-2" size={20} />
    </div>

      {/* Divider */}
      <div className="vr mx-3"></div>

      {/* Profile Section */}
      <div className="d-flex align-items-center">
        <img
          src={user.avatar}
          alt={user.name}
          className="rounded-circle mx-2"
          style={{ 
            width: "35px",
            height: "35px",
            objectFit: "cover"
          }}
        />

        {/* Hide name on very small screens */}
        <span className="name">{user.name}</span>
      </div>
    </div>
  );
}

export default ProfileSection;
