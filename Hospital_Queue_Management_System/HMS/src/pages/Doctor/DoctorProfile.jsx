import { useState, useEffect } from "react";
import { useApp } from "../../context/AppContext";
import { DEPARTMENTS } from "../../constants/departments";

export default function DoctorProfile() {
  const { setDoctorDept } = useApp();
  const [profile, setProfile] = useState({ name: "Dr. Smith", specialization: DEPARTMENTS[0] });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("doctorProfile"));
    if (saved) setProfile(saved);
  }, []);

  const handleSave = () => {
    localStorage.setItem("doctorProfile", JSON.stringify(profile));
    localStorage.setItem("doctorDept", profile.specialization);
    setDoctorDept(profile.specialization); // Update Context immediately
    alert("Profile & Department Updated!");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3>Doctor Profile Settings</h3>
        <label>Name</label>
        <input style={styles.input} value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} />
        
        <label>Assigned Department</label>
        <select style={styles.input} value={profile.specialization} onChange={e => setProfile({...profile, specialization: e.target.value})}>
          {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        
        <button style={styles.saveBtn} onClick={handleSave}>Update Department</button>
      </div>
    </div>
  );
}
// ... use your existing styles

/* 🎨 PROFESSIONAL STYLES */
const styles = {
  container: {
    padding: "30px",
    minHeight: "100vh",
    background: "#f4f7fb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    display: "flex",
    width: "800px",
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },

  left: {
    width: "40%",
    background: "linear-gradient(135deg,#1976d2,#42a5f5)",
    color: "#fff",
    padding: "30px",
    textAlign: "center",
  },

  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    background: "#fff",
    color: "#1976d2",
    fontSize: "40px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 15px",
  },

  special: {
    fontSize: "14px",
    opacity: 0.9,
  },

  right: {
    width: "60%",
    padding: "30px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  editBtn: {
    marginTop: "15px",
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    background: "#1976d2",
    color: "#fff",
    cursor: "pointer",
  },

  saveBtn: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    background: "#4caf50",
    color: "#fff",
    cursor: "pointer",
  },

  cancelBtn: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    background: "#e53935",
    color: "#fff",
    cursor: "pointer",
  },

  btnGroup: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
};