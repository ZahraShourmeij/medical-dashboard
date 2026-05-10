import React, { useState, useRef, useEffect } from "react"; 
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Chart() {
  const [activeBtn, setActiveBtn] = useState("Monthly");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const buttons = ["Weekly", "Monthly", "Yearly"];
  const dropdownRef = useRef(null); // برای تشخیص کلیک خارج از منو

  // بستن منو با کلیک خارج از آن
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const chartDatasets = {
    Weekly: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        { label: "Patient", data: [12, 19, 8, 15, 20, 10, 18], backgroundColor: "#2F897F" },
        { label: "Inpatient", data: [7, 14, 5, 10, 15, 6, 12], backgroundColor: "#FFD700" },
      ],
    },
    Monthly: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        { label: "Patient", data: [50, 65, 40, 70], backgroundColor: "#2F897F" },
        { label: "Inpatient", data: [30, 45, 25, 50], backgroundColor: "#FFD700" },
      ],
    },
    Yearly: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        { label: "Patient", data: [200, 250, 180, 300, 220, 280, 260, 310, 320, 300, 280, 330], backgroundColor: "#2F897F" },
        { label: "Inpatient", data: [120, 150, 100, 200, 130, 180, 160, 210, 220, 200, 180, 230], backgroundColor: "#FFD700" },
      ],
    },
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: { usePointStyle: true, pointStyle: "circle", padding: 22, font: { size: 9 } },
      },
      tooltip: { mode: "index", intersect: false, usePointStyle: true, callbacks: {
        labelPointStyle: () => ({
          pointStyle: "circle",  // دایره‌ای کردن pointer
          rotation: 0
        })
      }
    },
    },
    scales: {
      y: { beginAtZero: true },
      x: { stacked: false },
    },
    datasets: {
      bar: {
        barThickness: 8, maxBarThickness: 15, borderRadius: 10, borderSkipped: false,
        categoryPercentage: 0.6, barPercentage: 0.8,
      },
    },
  };

  return (
    <div className="stat-card mt-0" style={{ position: "relative" }}> {/* position: relative برای والد */}
      <div className="d-flex align-items-center mb-2">
        <div
          style={{
            width: "4px",
            height: "28px",
            backgroundColor: "#2F897F",
            borderRadius: "2px",
            marginRight: "12px",
          }}
        ></div>
        <h5 className="mb-0">Patient Visit</h5>
        <div className="ms-auto gap-2 d-flex align-items-center"> {/* برای کنترل دکمه‌ها */}

          {/* دکمه باز/بسته کننده منو - این دکمه همیشه نمایش داده می‌شود */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="btn btn-outline-secondary d-lg-none" // فقط در تبلت و موبایل نمایش داده شود
                      style={{
            // marginTop: "50px",
            marginLeft: "auto",
            backgroundColor: "#2F897F",
            color: "#fff",
            border: "none",
            borderRadius: "30px",
            padding: "8px 12px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          >
            {activeBtn} ▼ 
          </button>
          
          {/* نمایش دکمه‌ها به صورت عادی در دسکتاپ */}
          <div className="d-none d-lg-flex gap-2">
            {buttons.map((btn) => (
              <button
                key={btn}
                onClick={() => setActiveBtn(btn)}
                className={`btn ${activeBtn === btn ? "btn-success" : "btn-light"}`} // استفاده از کلاس‌های بوت استرپ
                style={{
                  padding: "8px 16px",
                  borderRadius: "30px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backgroundColor: activeBtn === btn ? "#2F897F" : "#fff",
                  color: activeBtn === btn ? "#fff" : "#6c757d",
                }}
              >
                {btn}
              </button>
            ))}
          </div>

          {/* منوی کشویی - فقط در تبلت و موبایل نمایش داده می‌شود */}
          {isDropdownOpen && (
            <div 
              ref={dropdownRef} 
              className="dropdown-menu show" // کلاس 'show' برای نمایش
              style={{ 
                position: "absolute", 
                top: "50px", // تنظیم فاصله از بالای صفحه
                right: "0px", // تنظیم فاصله از سمت راست
                zIndex: 1000, // برای اطمینان از نمایش روی بقیه المان‌ها
                backgroundColor: "#fff", 
                borderRadius: "6px", 
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                minWidth: "120px", // حداقل عرض برای منو
                paddingTop: 0,
                paddingBottom:0,
              }}
            >
              {buttons.map((btn) => (
                <button
                  key={btn}
                  onClick={() => {
                    setActiveBtn(btn);
                    setIsDropdownOpen(false); // بستن منو بعد از انتخاب
                  }}
                  className={`dropdown-item ${activeBtn === btn ? "active" : ""}`} // کلاس‌های بوت استرپ برای آیتم منو
                  style={{
                    padding: "8px 16px",
                    borderRadius: "6px",
                    border: "none",
                    cursor: "pointer",
                    width: "100%",
                    textAlign: "left",
                    backgroundColor: activeBtn === btn ? "#2F897F" : "#fff",
                    color: activeBtn === btn ? "#fff" : "#6c757d",
                    fontSize: "14px"
                  }}
                >
                  {btn}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <Bar data={chartDatasets[activeBtn]} options={chartOptions} />
    </div>
  );
}

export default Chart;
