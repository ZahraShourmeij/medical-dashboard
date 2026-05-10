import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar";
import StatisticCard from "../components/StatisticCard";
import PatientTable from "../components/PatientTable";
import Chart from "../components/Chart";
import Calendar from "../components/Calendar";
import TopDoctors from "../components/TopDoctors";


const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // تابعی که وضعیت باز/بسته بودن سایدبار را مدیریت می‌کند
  const handleToggleSidebar = (openState) => {
    setIsSidebarOpen(openState);
  };

  //   const toggleSidebar = () => {
  //   setIsSidebarOpen(prevState => !prevState);
  // };

  return (
 <div className="dashboard-desktop">

  {/* Sidebar ثابت در چپ */}
  <div className="d-flex flex-grow-1" style={{
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    width: "250px",
    overflowY: "auto",
    zIndex: 1000,
  }}>
    <Sidebar isOpen={isSidebarOpen} onToggleMenu={handleToggleSidebar}/>
  </div>

  {/* ستون راست ثابت */}
  <div className="rightColumn" style={{
    position: "fixed",
    right: 0,
    top: "95px",
    minWidth: "10px",
    maxWidth: "350px",
    width: "100%",
    flexShrink: 1,
    bottom: 0,
    overflowY: "auto",
    paddingRight: "10px",
    zIndex: 999,
  }}>
    <Calendar />
    <TopDoctors />
  </div>

  {/* Navbar ثابت بین Sidebar و ستون راست */}
  <div className="navbardiv" style={{
    position: "fixed",
    top: 0,
    left: "210px",
    right: "0px",
    height: "70px",
    zIndex: 1200,
    background: "white",
  }}>
    <Navbar isSidebarOpen={isSidebarOpen}/>
  </div>

  {/* محتوای وسط که اسکرول می‌شود */}
  <div className="main-content" style={{
    marginLeft: "210px",
    marginRight: "350px",
    marginTop: "74px",   // فاصله از زیر Navbar
    padding: "20px",
    minWidth: '450px',
  }}>
    <StatisticCard />
    <Chart />
    <PatientTable />
  </div>

</div>

  );
};

export default Dashboard;

