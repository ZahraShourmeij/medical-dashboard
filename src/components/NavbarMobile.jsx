import React, { useState } from 'react';
import avatarImg from "../assets/profile.png";

export default function NavbarMobile() {
const [user] = useState({
    name: "Emma Hills",
    avatar: avatarImg,
  });

  return (
    <div className="navbar-mobile d-flex justify-content-between align-items-center px-3 py-3">
      <img src="/HealthHub.png" alt="HealthHub" width="120" />
      <div className="d-flex align-items-center">
        {user.avatar && (
          <img
            src={user.avatar}
            alt={user.name}
            className="rounded-circle me-2"
            style={{
              width: "35px",
              height: "35px",
              objectFit: "cover"
            }}
          />
        )}
      </div>
    </div>
  );
}
