import React, { useEffect, useState } from "react";
import axios from "axios";

function TopDoctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
  axios.get("https://68cdc7d8da4697a7f306eeaf.mockapi.io/doctors")
    .then(res => {
      console.log(res.data); // ببین چی برمیگرده
      setDoctors(res.data);
    })
    .catch(err => console.error(err));
}, []);


  return (
    <div className="doctor p-3 bg-white rounded shadow-sm mt-2">
      <div className="d-flex align-items-center mb-3">
        <div
          style={{
            width: "4px",
            height: "28px",
            backgroundColor: "#2F897F",
            borderRadius: "2px",
            marginRight: "8px"
          }}
        ></div>
        <h5 className="m-0">Top Doctors</h5>
        <a href="#" className="text-decoration-none ms-auto">See all</a>
      </div>

      {/* لیست با محدودیت ارتفاع و اسکرول */}
      <ul
        className="list-unstyled m-0 scrollable-list"
        style={{
          maxHeight: "300px", // حدوداً برای ۵ آیتم
          overflowY: "auto"
        }}
      >
        {doctors.map((doc) => (
          <li key={doc.id} className="d-flex align-items-center mb-3">
            <img
              src={doc.img || "https://via.placeholder.com/40"}
              alt={doc.name}
              className="rounded-circle"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "cover",
                marginRight: "10px"
              }}
            />
            <div className="flex-grow-1">
              <div className="">{doc.name}</div>
              <small className="text-muted">{doc.specialty}</small>
            </div>
            <div className="p-2">
              <span className="text-warning">★</span>{" "}
              <span className="text-muted">{doc.rating}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopDoctors;