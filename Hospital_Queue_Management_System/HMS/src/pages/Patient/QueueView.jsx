
import { useEffect, useState } from "react";

export default function QueueView() {
  const [data, setData] = useState(null);
  const [currentServing, setCurrentServing] = useState(1);

  useEffect(() => {
    // 1. Load data once when component mounts
    const saved = localStorage.getItem("tokenData");
    if (saved) {
      const parsedData = JSON.parse(saved);
      setData(parsedData);
    }
  }, []); // Empty dependency array means this ONLY runs once on load

  useEffect(() => {
    // 2. Start simulation only if data exists
    if (!data) return;

    const interval = setInterval(() => {
      setCurrentServing((prev) => {
        if (prev >= data.queuePosition) return data.queuePosition;
        return prev + 1;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [data?.queuePosition]); // Only restart interval if the queue position changes

  if (!data) return <div style={styles.center}><h3>No active tokens found. Please book one.</h3></div>;

  const patientsAhead = Math.max(data.queuePosition - currentServing, 0);
  const isYourTurn = patientsAhead === 0;

  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        <div style={styles.header}>
          <h2>Live Queue Status</h2>
          <p>Department: <b>{data.department}</b></p>
        </div>

        <div style={styles.grid}>
          <div style={styles.cardHighlight}>
            <h4>Now Calling</h4>
            <p style={styles.bigWhite}>#{currentServing}</p>
          </div>

          <div style={styles.card}>
            <h4>Your Token</h4>
            <p style={styles.big}>{data.token}</p>
            <p>Pos: {data.queuePosition}</p>
          </div>

          <div style={styles.card}>
            <h4>Patients Ahead</h4>
            <p style={{...styles.big, color: isYourTurn ? "green" : "red"}}>
              {isYourTurn ? "0 (Next!)" : patientsAhead}
            </p>
          </div>
        </div>

        <div style={styles.progressCard}>
          <h4>Wait Progress</h4>
          <div style={styles.progressBar}>
            <div style={{ ...styles.progressFill, width: `${(currentServing / data.queuePosition) * 100}%` }} />
          </div>
          <p style={styles.percent}>{isYourTurn ? "Please proceed to the doctor's room" : "Waiting for your turn..."}</p>
        </div>
      </div>
    </div>
  );
}

/* 🎨 STYLES (NO CHANGES MADE) */
const styles = {
  page: { background: "#f4f6fb", minHeight: "100vh", padding: "20px", fontFamily: "Segoe UI, sans-serif" },
  wrapper: { maxWidth: "1100px", margin: "auto" },
  header: { marginBottom: "20px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "15px", marginBottom: "15px" },
  card: { background: "#fff", padding: "18px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)" },
  cardHighlight: { background: "#1976d2", color: "#fff", padding: "18px", borderRadius: "12px", textAlign: "center" },
  big: { fontSize: "22px", fontWeight: "bold" },
  bigWhite: { fontSize: "30px", fontWeight: "bold" },
  time: { fontSize: "20px", fontWeight: "bold" },
  progressCard: { background: "#fff", padding: "18px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)" },
  progressBar: { height: "10px", background: "#e0e0e0", borderRadius: "6px", overflow: "hidden", marginTop: "10px" },
  progressFill: { height: "100%", background: "linear-gradient(90deg, #4caf50, #66bb6a)", transition: "width 0.5s ease" },
  percent: { marginTop: "8px", textAlign: "center", fontWeight: "bold" },
  green: { color: "#2e7d32", fontWeight: "bold" },
  orange: { color: "#ef6c00", fontWeight: "bold" },
  center: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" },
};