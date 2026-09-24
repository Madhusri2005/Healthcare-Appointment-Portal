import { useApp } from "../../context/AppContext";

export default function PatientQueue() {
  const { patients, callNext, completePatient, currentPatient } = useApp();

  return (
    <div style={styles.container}>
      
      {/* HEADER */}
      <div style={styles.header}>
        <h2>Patient Queue</h2>
        <button style={styles.callBtn} onClick={callNext}>
          ▶ Call Next
        </button>
      </div>

      {/* CURRENT PATIENT */}
      {currentPatient && (
        <div style={styles.currentCard}>
          <h3>Now Serving</h3>
          <h2>{currentPatient.name}</h2>
          <p>Token: {currentPatient.token}</p>

          <button style={styles.completeBtn} onClick={completePatient}>
            ✔ Mark Completed
          </button>
        </div>
      )}

      {/* QUEUE LIST */}
      <div style={styles.queueGrid}>
        {patients.length === 0 && (
          <div style={styles.empty}>No Patients in Queue</div>
        )}

{patients.map((p, index) => (
  <div key={index} style={styles.card}>
    <div style={styles.token}>{p.token}</div>
    <div style={styles.info}>
      <h4>{p.name}</h4>
      <p>Age: {p.age}</p>
      {/* FIXED: problem -> symptoms */}
      <p>Symptoms: {p.symptoms || "N/A"}</p>
      <p style={{color: p.priority === 'priority' ? 'red' : 'green', fontSize: '12px', fontWeight: 'bold'}}>
         {p.priority === 'priority' ? '🚨 EMERGENCY' : '✅ Normal'}
      </p>
    </div>
    {/* ... rest of card */}
  </div>
))}
      </div>
    </div>
  );
}

/* 🎨 SUPER STYLES */
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

  callBtn: {
    background: "#1976d2",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },

  currentCard: {
    background: "linear-gradient(135deg, #1976d2, #42a5f5)",
    color: "#fff",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },

  completeBtn: {
    marginTop: "10px",
    padding: "8px 14px",
    border: "none",
    borderRadius: "6px",
    background: "#4caf50",
    color: "#fff",
    cursor: "pointer",
  },

  queueGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "15px",
  },

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "0.3s",
    cursor: "pointer",
  },

  token: {
    background: "#1976d2",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "6px",
    display: "inline-block",
    fontSize: "12px",
    marginBottom: "8px",
  },

  info: {
    marginTop: "10px",
  },

  actions: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  time: {
    fontSize: "12px",
    color: "#888",
  },

  empty: {
    textAlign: "center",
    padding: "40px",
    color: "#777",
    fontSize: "18px",
  },
};