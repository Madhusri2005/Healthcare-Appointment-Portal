
import { useEffect, useState } from "react";
import { DEPARTMENTS } from "../../constants/departments";

export default function QueueManagement() {
  const [department, setDepartment] = useState(DEPARTMENTS[0]);
  const [tokens, setTokens] = useState([]);

  const loadQueue = async () => {
    try {
      const res = await fetch('http://localhost:8081/api/patients');
      const data = await res.json();

      // 1. Filter by Department (Ignoring Case/Spaces)
      const filtered = data.filter(p => 
        p.department?.trim().toLowerCase() === department.trim().toLowerCase() &&
        p.status !== "Completed"
      );

      // 2. SORTING LOGIC: Important for mixing Odd and Even
      // Converts "CAR-1" and "CAR-2" into numbers to compare them
      const sorted = filtered.sort((a, b) => {
        const numA = parseInt(a.token?.split('-')[1]) || 0;
        const numB = parseInt(b.token?.split('-')[1]) || 0;
        return numA - numB;
      });

      setTokens(sorted);
    } catch (err) {
      console.error("Fetch failed", err);
    }
  };

  const handleStatusUpdate = async (token, newStatus) => {
    try {
      await fetch(`http://localhost:8081/api/patients/${token}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      loadQueue(); // Refresh after update
    } catch (err) { console.error("Update failed:", err); }
  };

  useEffect(() => {
    loadQueue();
    const interval = setInterval(loadQueue, 3000);
    return () => clearInterval(interval);
  }, [department]);

  return (
    <div className="p-4" style={{ marginLeft: "260px", background: "#f4f7f6", minHeight: "100vh" }}>
      <div className="card shadow border-0 p-4" style={{ borderRadius: "15px" }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold text-primary m-0">Live Queue: {department}</h3>
          <select 
            className="form-select w-auto" 
            value={department} 
            onChange={(e) => setDepartment(e.target.value)}
          >
            {DEPARTMENTS.map(dept => <option key={dept} value={dept}>{dept}</option>)}
          </select>
        </div>

        <table className="table table-hover align-middle text-center">
          <thead className="table-dark">
            <tr>
              <th>Token</th>
              <th>Patient Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tokens.length > 0 ? tokens.map((t) => (
              <tr key={t.id}>
                <td className="fw-bold text-primary">{t.token}</td>
                <td>{t.name}</td> 
                <td>
                  <span className={`badge ${t.type === "ONLINE" ? "bg-info" : "bg-success"}`}>
                    {t.type}
                  </span>
                </td>
                <td><span className="badge bg-warning text-dark">{t.status}</span></td>
                <td>
                  <button 
                    className="btn btn-sm btn-danger px-3"
                    onClick={() => handleStatusUpdate(t.token, "Calling")}
                  >
                    Call Next
                  </button>
                </td>
              </tr>
            )) : (
              <tr><td colSpan="5" className="py-4 text-muted">No patients in this department.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}