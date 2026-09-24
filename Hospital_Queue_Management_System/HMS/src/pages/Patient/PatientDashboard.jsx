import { useEffect, useState } from "react";

export default function PatientDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("tokenData");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  const progress =
    data && data.queuePosition
      ? Math.min((data.queuePosition / 10) * 100, 100)
      : 0;

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* HEADER */}
        <div style={styles.header}>
          <h2>🏥 Patient Dashboard</h2>
          <span>{new Date().toLocaleString()}</span>
        </div>

        {/* STATS */}
        <div style={styles.statsRow}>

          <Card title="🎟️ Token" value={data?.token || "--"} />
          <Card title="📍 Queue Position" value={data?.queuePosition || "--"} />
          <Card title="⏳ Waiting Time" value={data?.estimatedTime || "--"} />

          <Card
            title="⚡ Status"
            value={data?.status || "No Data"}
            highlight
          />

        </div>

        {/* PROGRESS */}
        <div style={styles.section}>
          <h3>📊 Queue Progress</h3>

          <div style={styles.progressBar}>
            <div style={{ ...styles.progressFill, width: `${progress}%` }} />
          </div>

          <p style={{ marginTop: "10px" }}>
            {progress.toFixed(0)}% Completed
          </p>
        </div>

        {/* TOKEN DETAILS */}
        <div style={styles.section}>
          <h3>📋 Token Details</h3>

          {data ? (
            <div style={styles.detailsBox}>
              <p><b>Name:</b> {data.name}</p>
              <p><b>Department:</b> {data.department}</p>
              <p><b>Symptoms:</b> {data.symptoms || "N/A"}</p>
              <p><b>Priority:</b> {data.priority}</p>
              <p><b>Created:</b> {data.createdAt}</p>
            </div>
          ) : (
            <div style={styles.empty}>No token booked yet</div>
          )}
        </div>

        {/* NOTIFICATIONS */}
        <div style={styles.section}>
          <h3>🔔 Notifications</h3>

          <div style={styles.notification}>
            {data
              ? "👉 Your token is in queue. Please wait."
              : "👉 Book a token to see updates."}
          </div>
        </div>

      </div>
    </div>
  );
}

/* 🔹 REUSABLE CARD */
function Card({ title, value, highlight }) {
  return (
    <div
      style={{
        ...styles.card,
        borderLeft: highlight ? "4px solid #1976d2" : "none",
      }}
    >
      <p style={styles.cardTitle}>{title}</p>
      <h3>{value}</h3>
    </div>
  );
}

/* 🎨 STYLES */
const styles = {
  page: {
    padding: "20px",
    background: "#f4f6fb",
    minHeight: "100vh",
  },

  container: {
    maxWidth: "1100px",
    margin: "auto",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },

  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
  },

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
  },

  cardTitle: {
    fontSize: "14px",
    color: "#666",
  },

  section: {
    marginTop: "25px",
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
  },

  progressBar: {
    width: "100%",
    height: "12px",
    background: "#ddd",
    borderRadius: "10px",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    background: "#1976d2",
  },

  detailsBox: {
    lineHeight: "1.8",
  },

  empty: {
    textAlign: "center",
    color: "#888",
    padding: "20px",
  },

  notification: {
    padding: "10px",
    background: "#e3f2fd",
    borderRadius: "8px",
  },
};