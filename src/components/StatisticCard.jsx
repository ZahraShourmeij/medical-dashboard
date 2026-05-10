import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaDownload,
  FaCalendarAlt,
  FaUserInjured,
  FaCalendarCheck,
  FaDollarSign,
  FaArrowUp,
} from "react-icons/fa";

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
        return <FaUserInjured size={26} />;
      case "calendar":
        return <FaCalendarCheck size={26} />;
      case "dollar":
        return <FaDollarSign size={26} />;
      default:
        return <FaUserInjured size={26} />;
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
          <FaDownload className="text-white" />
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
        <FaCalendarAlt style={{ fontSize: "14px" }} />
        {today}
      </p>

      <div className="row">
        {stats.map((stat, index) => (
          <div className="col-md-4" key={index}>
            <div className={`card shadow-sm border-0 h-100 ${stat.color}`}>
              <div className="card-body">
                <div className="mb-3">{renderIcon(stat.icon)}</div>
                <h6 className="mb-3 text-secondary">{stat.title}</h6>
                <h5 className="mt-2 mb-3 text-dark fw-bold">{stat.value}</h5>
                <span
                  className="badge text-secondary d-flex"
                  style={{ gap: "4px" }}
                >
                  <FaArrowUp style={{ fontSize: "0.8em" }} />
                  {stat.change}
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
