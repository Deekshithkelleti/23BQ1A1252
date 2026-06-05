"use client";

import { useState } from "react";

export default function FilterPage() {
  const [type, setType] = useState("all");

  const notifications = [
    {
      id: 1,
      type: "alert",
      title: "Server Alert",
    },
    {
      id: 2,
      type: "message",
      title: "New Message",
    },
    {
      id: 3,
      type: "alert",
      title: "Exam Alert",
    },
    {
      id: 4,
      type: "info",
      title: "Workshop Info",
    },
  ];

  const filtered =
    type === "all"
      ? notifications
      : notifications.filter(
          (n) => n.type === type
        );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Filter Notifications</h1>

      <select
        value={type}
        onChange={(e) =>
          setType(e.target.value)
        }
      >
        <option value="all">All</option>
        <option value="alert">Alert</option>
        <option value="message">Message</option>
        <option value="info">Info</option>
      </select>

      {filtered.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            marginTop: "10px",
            padding: "10px",
          }}
        >
          <h3>{item.title}</h3>
          <p>Type: {item.type}</p>
        </div>
      ))}
    </div>
  );
}