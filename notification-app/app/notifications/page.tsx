"use client";

import { useState } from "react";

export default function NotificationsPage() {
  const [topN, setTopN] = useState(5);

  const notifications = [
    {
      id: 1,
      title: "Placement Drive",
      message: "TCS drive starts tomorrow",
    },
    {
      id: 2,
      title: "Exam Notice",
      message: "Mid exams scheduled next week",
    },
    {
      id: 3,
      title: "Fee Reminder",
      message: "Pay fee before due date",
    },
    {
      id: 4,
      title: "Workshop",
      message: "AI workshop on Friday",
    },
    {
      id: 5,
      title: "Holiday",
      message: "College closed on Monday",
    },
    {
      id: 6,
      title: "Results",
      message: "Semester results published",
    },
  ];

  const [viewed, setViewed] = useState<number[]>([]);

  const markViewed = (id: number) => {
    if (!viewed.includes(id)) {
      setViewed([...viewed, id]);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notifications</h1>

      <label>Top N Notifications: </label>

      <select
        value={topN}
        onChange={(e) =>
          setTopN(Number(e.target.value))
        }
      >
        <option value={3}>3</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
      </select>

      {notifications
        .slice(0, topN)
        .map((item) => (
          <div
            key={item.id}
            onClick={() => markViewed(item.id)}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginTop: "10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <h3>{item.title}</h3>

            <p>{item.message}</p>

            <strong>
              {viewed.includes(item.id)
                ? "Viewed"
                : "New"}
            </strong>
          </div>
        ))}
    </div>
  );
}