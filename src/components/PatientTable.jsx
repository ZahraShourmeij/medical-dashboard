import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pagination } from "react-bootstrap";
import axios from "axios";

export default function AllPatientsTable() {
  const [patients, setPatients] = useState([]); // داده‌ها از API
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // گرفتن داده از API
  useEffect(() => {
    axios
      .get("https://68cdc7d8da4697a7f306eeaf.mockapi.io/patients") 
      .then((res) => {
        setPatients(res.data);
      })
      .catch((err) => {
        console.error("Error fetching patients:", err);
      });
  }, []);

  // محاسبه ردیف‌های قابل نمایش
  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentRows = patients.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(patients.length / rowsPerPage);

  return (
    <div className="bg-white rounded shadow-sm mt-3">
      {/* عنوان */}
      <div className="d-flex align-items-center mb-2">
        <div
          style={{
            width: "4px",
            height: "28px",
            backgroundColor: "#2F897F",
            borderRadius: "2px",
            marginRight: "8px",
          }}
        ></div>
        <h5 className="m-0">All Patient</h5>
      </div>

      {/* جدول */}
      <div className="table-responsive">
        <table className="table align-middle custom-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Number</th>
              <th>Patient Name</th>
              <th>Doctor Name</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((p, idx) => (
              <tr key={idx}>
                <td>{p.id}</td>
                <td>{p.number}</td>
                <td>{p.patient}</td>
                <td>{p.doctor}</td>
                <td>{p.time}</td>
                <td>
                  <span
                    className={`badge ${
                      p.status === "Pending"
                        ? "bg-warning text-dark"
                        : p.status === "Completed"
                        ? "bg-success"
                        : "bg-info text-dark"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* صفحه‌بندی */}
      <div className="d-flex justify-content-center mt-3">
        <Pagination className="custom-pagination">
          <Pagination.Prev
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, i) => (
            <Pagination.Item
              key={i + 1}
              active={i + 1 === currentPage}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </div>
  );
}
