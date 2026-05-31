import React, { useState } from 'react';
import Calendar from "../assets/icons/Calendar.svg";
import Appointment from "../assets/icons/Appointment.svg";
import Dashboard from "../assets/icons/DashboardMobile.svg";
import Notes from "../assets/icons/Notes.svg";
import Prescriptions from "../assets/icons/Prescriptions.svg";

export default function BottomNav() {
  const [activeNav, setActiveNav] = useState('home'); // 'home' به عنوان مقدار پیش‌فرض فعال

  const navItems = [
    { id: 'calendar', icon: <img src = {Calendar} alt="" className="menu-icon"/>, label: 'تقویم' },
    { id: 'profile', icon: <img src = {Appointment} alt="" className="menu-icon"/>, label: 'پروفایل' },
    { id: 'home', icon: <img src = {Dashboard} alt="" className="home-icon menu-icon"/>, label: 'خانه' },
    { id: 'sticky', icon: <img src = {Notes} alt="" className="menu-icon"/>, label: 'یادداشت' },
    { id: 'docs', icon: <img src = {Prescriptions} alt="" className="menu-icon"/>, label: 'اسناد' },
  ];

  return (
    <div className="bottom-nav-mobile d-flex justify-content-around align-items-center">
      {navItems.map((item) => (
        <div
          key={item.id}
          className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
          onClick={() => setActiveNav(item.id)}
        >
          {item.icon}
          {/* <span className="nav-label">{item.label}</span> */}
        </div>
      ))}
    </div>
  );
}
