
import { useApp } from "../../context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CurrentPatient() {
  const { currentPatient, callNext, completePatient, doctorDept } = useApp();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>👨‍⚕️ Currently Serving ({doctorDept})</h2>
      </div>

      <AnimatePresence mode="wait">
        {currentPatient ? (
          <motion.div key={currentPatient.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={styles.card}>
            <div style={styles.left}>
              <div style={styles.avatar}>{currentPatient.name[0]}</div>
              <h3>{currentPatient.name}</h3>
              <p>Token: <b>{currentPatient.token}</b></p>
              <p>Type: {currentPatient.type}</p>
            </div>
            <div style={styles.right}>
              <button style={styles.completeBtn} onClick={completePatient}>✔ Mark as Completed</button>
            </div>
          </motion.div>
        ) : (
          <div style={styles.empty}>
            <p>No active patient. Ready for the next one?</p>
            <button style={styles.nextBtn} onClick={callNext}>▶ Call Next Patient</button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

const styles = {
  container: { padding: "20px", minHeight: "100vh", background: "#f4f7fb" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" },
  nextBtn: { background: "#1976d2", color: "#fff", border: "none", padding: "10px 16px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", boxShadow: "0 4px 10px rgba(0,0,0,0.15)" },
  card: { display: "flex", justifyContent: "space-between", background: "linear-gradient(135deg, #1976d2, #42a5f5)", color: "#fff", padding: "25px", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" },
  left: { display: "flex", flexDirection: "column", gap: "8px" },
  right: { textAlign: "right", display: "flex", flexDirection: "column", justifyContent: "space-between" },
  avatar: { width: "60px", height: "60px", borderRadius: "50%", background: "#fff", color: "#1976d2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: "bold", marginBottom: "10px" },
  token: { fontSize: "16px", fontWeight: "bold" },
  time: { fontSize: "12px", opacity: 0.9 },
  status: { marginTop: "10px", fontWeight: "bold", color: "#ffeb3b" },
  completeBtn: { marginTop: "15px", padding: "10px", border: "none", borderRadius: "8px", background: "#4caf50", color: "#fff", fontWeight: "bold", cursor: "pointer" },
  empty: { textAlign: "center", marginTop: "50px", padding: "30px", background: "#fff", borderRadius: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" },
};