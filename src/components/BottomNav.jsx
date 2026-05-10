import React, { useState } from 'react';
import { BsCalendarFill, BsPersonBadgeFill, BsHouseDoorFill, BsStickyFill, BsFileTextFill } from "react-icons/bs";


export default function BottomNav() {
  const [activeNav, setActiveNav] = useState('home'); // 'home' به عنوان مقدار پیش‌فرض فعال

  const navItems = [
    { id: 'calendar', icon: <BsCalendarFill />, label: 'تقویم' },
    { id: 'profile', icon: <BsPersonBadgeFill />, label: 'پروفایل' },
    { id: 'home', icon: <BsHouseDoorFill className="home-icon" />, label: 'خانه' },
    { id: 'sticky', icon: <BsStickyFill />, label: 'یادداشت' },
    { id: 'docs', icon: <BsFileTextFill />, label: 'اسناد' },
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
