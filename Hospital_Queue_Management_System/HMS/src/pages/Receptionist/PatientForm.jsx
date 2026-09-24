
import { useState } from "react";
import { DEPARTMENTS } from "../../constants/departments";

export default function PatientForm() {
  const [form, setForm] = useState({
    name: "", age: "", gender: "male", phone: "", email: "", 
    address: "", department: DEPARTMENTS[0], type: "WALK-IN"
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!form.name || !form.age || !form.phone) {
      setMessage("⚠️ Please fill required fields!");
      return;
    }

    try {
      // 1. Fetch current patients to calculate the next EVEN token
      const res = await fetch('http://localhost:8081/api/patients');
      const allPatients = await res.json();
      
      // Filter patients by the selected department
      const deptPatients = allPatients.filter(p => 
        p.department?.trim().toLowerCase() === form.department.trim().toLowerCase()
      );

      const deptCode = form.department.substring(0, 3).toUpperCase();
      // EVEN LOGIC: (Current Count + 1) * 2 = 2, 4, 6...
      const token = `${deptCode}-${(deptPatients.length + 1) * 2}`;

      const payload = { ...form, token, status: "Waiting" };

      // 2. Save to Backend
      const response = await fetch('http://localhost:8081/api/patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`✅ Success! Walk-in Token: ${data.token}`);
        setForm({ name: "", age: "", gender: "male", phone: "", email: "", address: "", department: DEPARTMENTS[0], type: "WALK-IN" });
      }
    } catch (err) {
      setMessage("❌ Server Error: Connection Refused");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>🧾 Walk-in Registration (Even Tokens)</h2>
        <input name="name" placeholder="Patient Name" value={form.name} onChange={handleChange} style={styles.input} />
        <input name="age" placeholder="Age" value={form.age} onChange={handleChange} style={styles.input} />
        <select name="department" value={form.department} onChange={handleChange} style={styles.input}>
          {DEPARTMENTS.map(dept => <option key={dept} value={dept}>{dept}</option>)}
        </select>
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} style={styles.input} />
        <button onClick={handleSave} style={styles.button}>Generate Even Token</button>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  page: { marginLeft: "260px", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f8f9fa" },
  card: { width: "400px", padding: "30px", borderRadius: "15px", background: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", gap: "15px" },
  title: { textAlign: "center", fontWeight: "bold", color: "#333" },
  input: { padding: "12px", borderRadius: "8px", border: "1px solid #ddd" },
  button: { padding: "12px", background: "#2e7d32", color: "#fff", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" },
  message: { textAlign: "center", fontWeight: "bold", marginTop: "10px" }
};