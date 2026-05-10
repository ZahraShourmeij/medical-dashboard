import React from "react";
import SearchBar from "./SearchBar";
import ProfileSection from "./ProfileSection";


function Navbar({ isSidebarOpen }) {
  return (
    <nav className={`menu navbar navbar-light ${isSidebarOpen ? 'active' : ''}`}>
      
        <SearchBar />

      <div className="tablet logoTablet">
        <img src="/HealthHub.png" alt="HealthHub Logo" style={{ height: '40px' }} />
      </div>

        <ProfileSection />
     
    </nav>
  );
}

export default Navbar;