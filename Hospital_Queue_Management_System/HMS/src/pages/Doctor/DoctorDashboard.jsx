import { useApp } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function DoctorDashboard() {
  const {
    patients,
    completed,
    currentPatient,
    doctorStatus,
    setDoctorStatus,
    callNext,
  } = useApp();

  const navigate = useNavigate();

  return (
    <div style={styles.container}>

      {/* HEADER */}
      <div style={styles.header}>
        <h2>👨‍⚕️ Doctor Dashboard</h2>

        <select
          style={styles.select}
          value={doctorStatus}
          onChange={(e) => setDoctorStatus(e.target.value)}
        >
          <option>Available</option>
          <option>Busy</option>
          <option>Offline</option>
        </select>
      </div>

      {/* STATS */}
      <div style={styles.grid}>

        <div style={styles.card}>
          <h4>📋 Queue</h4>
          <h2>{patients.length}</h2>
        </div>

        <div style={styles.card}>
          <h4>✔ Completed</h4>
          <h2>{completed.length}</h2>
        </div>

        <div style={styles.card}>
          <h4>👨‍⚕️ Current</h4>
          <h3>
            {currentPatient ? currentPatient.name : "No Patient"}
          </h3>
        </div>

        <div style={styles.card}>
          <h4>🟢 Status</h4>
          <h3 style={{ color: "#4caf50" }}>{doctorStatus}</h3>
        </div>

      </div>

      {/* ACTIONS */}
      <div style={styles.actions}>
        <button style={styles.primaryBtn} onClick={callNext}>
          ▶ Call Next Patient
        </button>

        <button
          style={styles.secondaryBtn}
          onClick={() => navigate("/doctor/queue")}
        >
          📋 View Queue
        </button>

        <button
          style={styles.secondaryBtn}
          onClick={() => navigate("/doctor/completed")}
        >
          ✔ Completed Patients
        </button>
      </div>

      {/* CURRENT PATIENT CARD */}
      {currentPatient && (
        <div style={styles.currentCard}>
          <h3>Now Serving</h3>

          <div style={styles.patientBox}>
            <div style={styles.avatar}>
              {currentPatient.name?.charAt(0)}
            </div>

            <div>
              <h2>{currentPatient.name}</h2>
              <p>Token: {currentPatient.token}</p>
              <p>Problem: {currentPatient.problem}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

/* 🎨 PROFESSIONAL STYLES */
const styles = {
  container: {
    padding: "20px",
    background: "#f4f7fb",
    minHeight: "100vh",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  select: {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "15px",
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
    textAlign: "center",
  },

  actions: {
    marginTop: "20px",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    background: "#1976d2",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },

  secondaryBtn: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    background: "#e0e0e0",
    cursor: "pointer",
  },

  currentCard: {
    marginTop: "25px",
    background: "linear-gradient(135deg,#1976d2,#42a5f5)",
    color: "#fff",
    padding: "20px",
    borderRadius: "12px",
  },

  patientBox: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#fff",
    color: "#1976d2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
  },
};