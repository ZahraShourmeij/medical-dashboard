import NavbarMobile from "../components/NavbarMobile";
import SearchBar from "../components/SearchBar";
import StatisticCard from "../components/StatisticCard";
import Chart from "../components/Chart";
import TopDoctors from "../components/TopDoctors";
import PatientTable from "../components/PatientTable";
import BottomNav from "../components/BottomNav";


export default function DashboardMobile() {
  return (
    <div className="dashboard-mobile">

      {/* بالای صفحه: لوگو + پروفایل */}
      <NavbarMobile />

      {/* سرچ */}
      <div className="mt-3 px-3 mb-3">
        <SearchBar />
      </div>

      <div className="px-3">
        <StatisticCard />
        <Chart />
        <TopDoctors />
        <PatientTable />
      </div>

      {/* نوار پایین موبایل */}
      <BottomNav />
    </div>
  );
}
