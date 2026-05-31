import React, { useEffect, useState } from "react";
import axios from "axios";
import Export from "../assets/icons/export.svg";
import Calendar from "../assets/icons/date.svg";
import UserInjured from "../assets/icons/UserInjured.svg";
import CalendarCheck from "../assets/icons/CalendarCheck.svg";
import DollarSign from "../assets/icons/DollarSign.svg";
import GrowUp from "../assets/icons/GrowUp.svg";
import {FaArrowUp} from "react-icons/fa";

function Statistic() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axios
      .get("https://68cd5c16da4697a7f305adff.mockapi.io/statistics")
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, []);

  // تابع برای مپ کردن اسم آیکون‌ها از API به React-Icons
const renderIcon = (iconName) => {
  switch (iconName) {
    case "user":
      return <img src={UserInjured} alt="" className="stat-icon" />;

    case "calendar":
      return <img src={CalendarCheck} alt="" className="stat-icon" />;

    case "dollar":
      return <img src={DollarSign} alt="" className="stat-icon" />;

    default:
      return <img src={UserInjured} alt="" className="stat-icon" />;
  }
};

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="stat-card">
      <div className="d-flex align-items-center mb-0">
        <div className="line"
          style={{
            width: "4px",
            height: "28px",
            backgroundColor: "#2F897F",
            borderRadius: "2px",
            marginRight: "12px",
            marginTop: "-8px"
          }}
        ></div>
        <h5 className="st">Statistic</h5>

        <button className="st"
          style={{
            // marginTop: "50px",
            marginLeft: "auto",
            backgroundColor: "#2F897F",
            color: "#fff",
            border: "none",
            borderRadius: "30px",
            padding: "10px 15px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={Export} alt="" className="menu-icon" />
          Export
        </button>
      </div>

      <p className="st"
        style={{
          color: "#888",
          marginTop: "4px",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <span className="dailyDate">
        <img src={Calendar} alt="" className="date-icon pe-2" />
        {today} 
        </span>
      </p>

      <div className="row">
        {stats.map((stat, index) => (
          <div className="col-md-4" key={index}>
            <div className={`card shadow-sm border-0 h-100 ${stat.color}`}>
              <div className="card-body">
                <div className="mb-3">{renderIcon(stat.icon)}</div>
                <h6 className="mb-3 text-secondary">{stat.title}</h6>
                <h5 className="mt-2 pb-1 text-dark fw-bold">{stat.value}</h5>
                <span
                  className="badge text-secondary d-flex"
                  style={{ gap: "6px" }}
                >
                  <img src={GrowUp} alt="" className="menu-icon growUp" />
                  <span style={{ marginTop: "5px"}}>
                      {stat.change}
                  </span>
                  <FaArrowUp style={{ fontSize: "0.8em", marginTop:"5px" }} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Statistic;
