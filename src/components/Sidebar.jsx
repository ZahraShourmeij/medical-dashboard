import React, { useState } from "react";
import Dashboard from "../assets/icons/Dashboard.svg";
import Appointment from "../assets/icons/Appointment.svg";
import Calendar from "../assets/icons/Calendar.svg";
import Messages from "../assets/icons/Messages.svg";
import Notes from "../assets/icons/Notes.svg";
import Prescriptions from "../assets/icons/Prescriptions.svg";
import Setting from "../assets/icons/Setting.svg";
import LogOut from "../assets/icons/LogOut.svg";
import { FaBars } from "react-icons/fa";

function Sidebar({ isOpen, onToggleMenu }) {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <img src = {Dashboard} alt="" className="menu-icon"/> },
    { name: "Appointment", icon: <img src = {Appointment} alt="" className="menu-icon"/> },
    { name: "Calendar", icon: <img src = {Calendar} alt="" className="menu-icon"/> },
    { name: "Messages", icon: <img src = {Messages} alt="" className="menu-icon"/> },
    { name: "Notes", icon: <img src = {Notes} alt="" className="menu-icon"/> },
    { name: "Prescriptions", icon: <img src = {Prescriptions} alt="" className="menu-icon"/> },
  ];

  const bottomItems = [
    { name: "Setting", icon: <img src = {Setting} alt="" className="menu-icon"/> },
    { name: "Log Out", icon: <img src = {LogOut} alt="" className="menu-icon"/> },
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
 <div className="logo text-center mt-1">
  <img
    src={`${import.meta.env.BASE_URL}HealthHub.png`}
    alt="HealthHub"
    width="133"
  />
</div>

        <nav className=" nav flex-column flex-grow-1">
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
