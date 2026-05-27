import React, { useState } from "react";
import {
  FaHome, FaCalendarAlt, FaUserMd, FaEnvelope,
  FaStickyNote, FaFilePrescription, FaCog, FaSignOutAlt, FaBars
} from "react-icons/fa";


function Sidebar({ isOpen, onToggleMenu }) {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "Appointment", icon: <FaUserMd /> },
    { name: "Calendar", icon: <FaCalendarAlt /> },
    { name: "Messages", icon: <FaEnvelope /> },
    { name: "Notes", icon: <FaStickyNote /> },
    { name: "Prescriptions", icon: <FaFilePrescription /> },
  ];

  const bottomItems = [
    { name: "Setting", icon: <FaCog /> },
    { name: "Log Out", icon: <FaSignOutAlt /> },
  ];

      const handleHamburgerClick = () => {
        // اگر sidebar باز بود، با کلیک بسته شه. اگر بسته بود، باز شه.
        onToggleMenu(!isOpen); // تابع والد رو با وضعیت جدید صدا بزن
      };

  return (
    <>
      <button
        className="hamburger-btn"
        onClick={handleHamburgerClick}
      >
        <FaBars size={22} />
      </button>
        <div className="logoHamClose text-center mb-5 mt-4">
          <img
  src={`${import.meta.env.BASE_URL}HealthHub.png`}
  alt="HealthHub"
  width="140"
/>
        </div>

      {isOpen && <div className="sidebar-backdrop" onClick={() => onToggleMenu(false)} />}

      <div className={`sidebar p-3 d-flex flex-column ${isOpen ? "open" : ""}`}>
        <div className="logo text-center mb-5 mt-4">
          <img src="/HealthHub.png" alt="HealthHub" width="140" />
        </div>

        <nav className="nav flex-column flex-grow-1">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`nav-link custom-side ${active === item.name ? "active" : ""}`}
              onClick={() => {
                setActive(item.name);
                onToggleMenu(false); 
              }}
            >
              <span className="icon">{item.icon}</span>
              <span className="ms-2">{item.name}</span>
            </a>
          ))}

          <div className="logBottom mt-auto">
            {bottomItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className={`nav-link custom-nav ${active === item.name ? "active" : ""} ${
                  item.name === "Log Out" ? "logout-link" : ""
                }`}
                onClick={() => {
                  setActive(item.name);
                  onToggleMenu(false); 
                }}
              >
                <span className="icon">{item.icon}</span>
                <span className="ms-2">{item.name}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
