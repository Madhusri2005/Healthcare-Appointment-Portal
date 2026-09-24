import { useState } from "react";
import { useApp } from "../../context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CompletedPatients() {
  const { completed } = useApp();
  const [search, setSearch] = useState("");

  /* 🔍 FILTER DATA */
  const filtered = completed.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.token.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>

      {/* HEADER */}
      <div style={styles.header}>
        <h2>Completed Patients</h2>

        <input
          style={styles.search}
          placeholder="Search by name or token..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* EMPTY STATE */}
      {filtered.length === 0 && (
        <div style={styles.empty}>No completed patients found</div>
      )}

      {/* LIST */}
      <div style={styles.grid}>
        <AnimatePresence>
          {filtered.map((p, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.03 }}
              style={styles.card}
            >
              {/* TOKEN BADGE */}
              <div style={styles.token}>{p.token}</div>

              {/* DETAILS */}
              <h4>{p.name}</h4>
              <p>Age: {p.age}</p>
              <p>Problem: {p.problem}</p>

              {/* STATUS */}
              <div style={styles.status}>✔ Completed</div>

              {/* TIME */}
              <div style={styles.time}>{p.time}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* 🎨 STYLES */
const styles = {
  container: {
    padding: "20px",
    minHeight: "100vh",
    background: "#f4f7fb",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  search: {
    padding: "10px",
    width: "250px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "15px",
  },

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
    transition: "0.3s",
  },

  token: {
    background: "#4caf50",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "6px",
    fontSize: "12px",
    display: "inline-block",
    marginBottom: "8px",
  },

  status: {
    marginTop: "10px",
    fontWeight: "bold",
    color: "#4caf50",
  },

  time: {
    fontSize: "12px",
    color: "#888",
    marginTop: "5px",
  },

  empty: {
    textAlign: "center",
    marginTop: "50px",
    fontSize: "18px",
    color: "#777",
  },
};