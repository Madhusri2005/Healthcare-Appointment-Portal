
import { useState } from "react";
import { DEPARTMENTS } from "../../constants/departments";

export default function BookToken() {
  const [form, setForm] = useState({
    name: "", age: "", phone: "", 
    department: DEPARTMENTS[0], symptoms: "", priority: "normal"
  });
  const [tokenData, setTokenData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBook = async () => {
    const { name, age, phone, department } = form;

    if (!name || !age || !phone || !department) {
      alert("Please fill all required fields (*)");
      return;
    }

    setLoading(true);
    try {
      // 1. Fetch current patients to calculate the next ODD token
      const res = await fetch('http://localhost:8081/api/patients');
      const allPatients = await res.json();
      
      const deptPatients = allPatients.filter(p => 
        p.department?.trim().toLowerCase() === department.trim().toLowerCase()
      );

      const deptCode = department.substring(0, 3).toUpperCase();
      // ODD LOGIC: (Current Count * 2) + 1 = 1, 3, 5, 7...
      const generatedToken = `${deptCode}-${(deptPatients.length * 2) + 1}`;

      const payload = {
        ...form,
        token: generatedToken,
        type: "ONLINE",
        status: "Waiting",
        createdAt: new Date().toISOString()
      };

      // 2. Save to Database (Ensures Receptionist visibility)
      const saveRes = await fetch('http://localhost:8081/api/patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (saveRes.ok) {
        const savedData = await saveRes.json();
        setTokenData(savedData);
        // Save to local storage for the "My Token" page
        localStorage.setItem("tokenData", JSON.stringify(savedData));
        alert(`Online Token ${generatedToken} Generated Successfully!`);
        
        // Reset form
        setForm({ name: "", age: "", phone: "", department: DEPARTMENTS[0], symptoms: "", priority: "normal" });
      }
    } catch (err) {
      console.error("Booking Error:", err);
      alert("Server Error: Check if Backend is running on 8081");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>🎟️ Online Appointment</h2>
        <p style={styles.subtitle}>You will receive an <b>Odd-numbered</b> token</p>
        
        <div style={styles.form}>
          <input name="name" placeholder="Patient Name *" value={form.name} onChange={handleChange} style={styles.input} />
          <input name="age" type="number" placeholder="Age *" value={form.age} onChange={handleChange} style={styles.input} />
          <input name="phone" placeholder="Phone Number *" value={form.phone} onChange={handleChange} style={styles.input} />
          
          <select name="department" value={form.department} onChange={handleChange} style={styles.input}>
            {DEPARTMENTS.map(dept => <option key={dept} value={dept}>{dept}</option>)}
          </select>

          <input name="symptoms" placeholder="Symptoms (Optional)" value={form.symptoms} onChange={handleChange} style={styles.input} />
        </div>

        <button 
          style={{...styles.button, opacity: loading ? 0.7 : 1}} 
          onClick={handleBook}
          disabled={loading}
        >
          {loading ? "Generating..." : "Confirm & Generate Token"}
        </button>

        {tokenData && (
          <div style={styles.result}>
            <h4 style={{ color: "#2e7d32", margin: "0 0 5px 0" }}>✅ Appointment Confirmed</h4>
            <p style={styles.resText}><b>Token:</b> {tokenData.token}</p>
            <p style={styles.resText}><b>Type:</b> {tokenData.type}</p>
            <p style={styles.resText}><b>Pos:</b> {tokenData.queuePosition || "Calculated at desk"}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#f4f6fb", padding: "20px" },
  card: { width: "100%", maxWidth: "450px", background: "#fff", padding: "30px", borderRadius: "14px", boxShadow: "0 10px 25px rgba(0,0,0,0.08)" },
  title: { textAlign: "center", marginBottom: "5px", color: "#333" },
  subtitle: { textAlign: "center", fontSize: "14px", color: "#666", marginBottom: "20px" },
  form: { display: "flex", flexDirection: "column", gap: "12px" },
  input: { padding: "12px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px" },
  button: { width: "100%", marginTop: "15px", padding: "12px", background: "#1976d2", color: "#fff", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" },
  result: { marginTop: "20px", padding: "15px", borderRadius: "10px", background: "#e8f5e9", border: "1px solid #c8e6c9" },
  resText: { margin: "3px 0", fontSize: "14px", color: "#2e7d32" }
};