import { useState, useEffect } from "react";

export default function DoctorAvailability() {
  const [status, setStatus] = useState("Available");
  const [message, setMessage] = useState("");
  useEffect(() => {
    const saved = localStorage.getItem("doctorStatus");
    if (saved) setStatus(saved);
  }, []);

  // Save status
  useEffect(() => {
    localStorage.setItem("doctorStatus", status);
  }, [status]);

  const handleChange = (e) => {
    setStatus(e.target.value);
    setMessage("Availability updated successfully!");

    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <div style={styles.header}>
        <h2>Doctor Availability</h2>
        <p>Manage your availability status</p>
      </div>

      {/* STATUS CARD */}
      <div style={styles.card}>
        <h3>Current Status</h3>
        <div style={styles.statusBox}>
          {status}
        </div>
      </div>

      {/* SELECT CARD */}
      <div style={styles.card}>
        <h3>Update Status</h3>

        <select value={status} onChange={handleChange} style={styles.select}>
          <option value="Available">🟢 Available</option>
          <option value="Busy">🔴 Busy</option>
          <option value="In Consultation">🟡 In Consultation</option>
          <option value="Offline">⚫ Offline</option>
        </select>
      </div>

      {/* MESSAGE */}
      {message && <div style={styles.success}>{message}</div>}

    </div>
  );
}

/* 🎨 FULL PAGE STYLES */
const styles = {
  page: {
    padding: "30px",
    width: "100%",
    minHeight: "100vh",
    background: "#f4f6f9",
  },

  header: {
    marginBottom: "25px",
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    marginBottom: "20px",
  },

  statusBox: {
    marginTop: "10px",
    padding: "15px",
    borderRadius: "8px",
    background: "#e9f2ff",
    fontWeight: "bold",
    fontSize: "16px",
  },

  select: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },

  success: {
    background: "#d4edda",
    color: "#155724",
    padding: "12px",
    borderRadius: "8px",
    marginTop: "10px",
  },
};