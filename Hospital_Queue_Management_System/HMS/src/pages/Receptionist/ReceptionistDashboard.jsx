
import { useEffect, useState } from "react";

export default function ReceptionistDashboard() {
  const [stats, setStats] = useState({
    totalPatients: 0,
    waiting: 0,
    completed: 0,
    doctors: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('http://localhost:8081/api/patients');
        if (res.ok) {
          const data = await res.json();
          setStats({
            totalPatients: data.length,
            waiting: data.filter(p => ["Waiting", "WAITING", "Checked-In"].includes(p.status)).length,
            completed: data.filter(p => ["Completed", "COMPLETED"].includes(p.status)).length,
            doctors: 5 
          });
        }
      } catch (err) {
        console.error("Stats fetch failed", err);
      }
    };
    fetchStats();
    const interval = setInterval(fetchStats, 10000);
    return () => clearInterval(interval);
  }, []);

  const downloadReport = () => {
    window.location.href = "http://localhost:8081/api/patients/report";
  };

  return (
    /* Changed marginLeft to 240px to match standard sidebars and removed fixed overflow */
    <div className="dashboard-wrapper" style={styles.wrapper}>
      <div className="container-fluid" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold text-secondary" style={{ fontSize: '1.75rem' }}>Hospital Overview</h2>
          <span className="badge bg-white text-dark shadow-sm p-2 px-3 border" style={{ borderRadius: '8px' }}>
            Live Updates: {new Date().toLocaleTimeString()}
          </span>
        </div>

        {/* STATS CARDS GRID - Reduced gutters for tighter look */}
        <div className="row g-4">
          <StatCard title="Total Patients" value={stats.totalPatients} color="#0d6efd" />
          <StatCard title="In Waiting" value={stats.waiting} color="#ffc107" />
          <StatCard title="Completed" value={stats.completed} color="#198754" />
          <StatCard title="Active Doctors" value={stats.doctors} color="#0dcaf0" />
        </div>

        {/* QUICK ACTIONS SECTION */}
        <div className="row mt-4">
          <div className="col-12 col-xl-7">
            <div className="card border-0 shadow-sm p-4" style={{ borderRadius: "15px" }}>
              <h5 className="fw-bold mb-3">Administrative Actions</h5>
              <p className="text-muted" style={{ lineHeight: '1.6' }}>
                The hospital queue includes both online and walk-in patients. 
                Use the button below to export the full patient registry for the current session.
              </p>
              <hr className="my-4" style={{ opacity: '0.1' }} />
              <div className="d-flex gap-3">
                {/* Improved Button Padding and Shadow */}
                <button 
                  className="btn btn-primary d-flex align-items-center justify-content-center shadow-sm" 
                  style={styles.mainBtn}
                  onClick={downloadReport}
                >
                  📥 <span className="ms-2">Download CSV Report</span>
                </button>
                <button 
                  className="btn btn-light d-flex align-items-center border px-4" 
                  style={{ borderRadius: '10px', fontWeight: '500' }}
                  onClick={() => window.location.reload()}
                >
                  🔄 <span className="ms-2">Refresh System</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, color }) {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="card border-0 shadow-sm" style={styles.card}>
        <h6 className="text-muted mb-2 text-uppercase fw-bold" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>{title}</h6>
        <h2 className="mb-0 fw-bold" style={{ color: color, fontSize: '2.2rem' }}>{value}</h2>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    marginLeft: "240px", // Reduced from 260px to fix the extra gap
    padding: "60px 40px",
    backgroundColor: "#f4f7fe", // Slightly bluer grey to match modern dashboards
    minHeight: "100vh",
  },
  card: {
    padding: "30px", // Increased padding inside cards
    borderRadius: "16px",
    background: "#fff",
    border: "1px solid rgba(0,0,0,0.03)"
  },
  mainBtn: {
    padding: "12px 24px", // Significant increase in button padding
    borderRadius: "12px",
    fontWeight: "600",
    border: "none"
  }
};