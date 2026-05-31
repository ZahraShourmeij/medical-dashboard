import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function MyCalendar() {
  const [date, setDate] = useState(new Date());

 const events = {
  "2025-09-18": [{ type: "appointment" }],
  "2025-09-20": [{ type: "surgery" }],
};

  const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const dayKey = formatDate(date);
      if (events[dayKey]) {
        return (
          <div className="dots">
           {events[dayKey].map((e, idx) => (
              <span key={idx} className={`dot ${e.type}`} />
        ))}
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="calendar-wrapper card">
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={tileContent}
        className=""
        formatShortWeekday={(locale, date) =>
          date.toLocaleDateString(locale, { weekday: "narrow" })
        }
      />

      {/* ✅ legend زیر تقویم */}
      <div className="legend mt-3 d-flex justify-content-center">
        <span><span className="legend-dot appointment"></span> Appointment</span>
        <span><span className="legend-dot meeting"></span> Meeting</span>
        <span><span className="legend-dot surgery"></span> Surgery</span>
      </div>
    </div>
  );
}
