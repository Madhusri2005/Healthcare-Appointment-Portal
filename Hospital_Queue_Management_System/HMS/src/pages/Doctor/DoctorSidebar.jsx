
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function DoctorSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    { name: "Dashboard", path: "/doctor", icon: "📊" },
    { name: "Availability", path: "/doctor/availability", icon: "🟢" },
    { name: "Patient Queue", path: "/doctor/queue", icon: "📋" },
    { name: "Current Patient", path: "/doctor/current", icon: "👤" },
    { name: "Completed", path: "/doctor/completed", icon: "✅" },
    { name: "Profile", path: "/doctor/profile", icon: "⚙️" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    // FIXED: Removed window.location.href. navigate is enough.
    navigate("/", { replace: true });
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.header}>
        <div style={styles.avatar}>👨‍⚕️</div>
        <h3 style={{ margin: 0 }}>Doctor Panel</h3>
        <p style={styles.subText}>Hospital System</p>
      </div>

      <div style={styles.menu}>
        {menu.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              style={{
                ...styles.link,
                background: isActive ? "#1976d2" : "transparent",
                color: isActive ? "#fff" : "#333",
                boxShadow: isActive ? "0 4px 12px rgba(25, 118, 210, 0.3)" : "none",
              }}
            >
              <span style={styles.icon}>{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </div>

      <div style={styles.footer}>
        <button style={styles.logout} onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

// (Styles remain the same as your previous code)
const styles = {
  sidebar: { width: "260px", height: "100vh", background: "linear-gradient(180deg, #ffffff, #f9fbff)", boxShadow: "4px 0 20px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "fixed", borderRight: "1px solid #eee" },
  header: { padding: "25px 15px", textAlign: "center", borderBottom: "1px solid #eee" },
  avatar: { fontSize: "40px", marginBottom: "10px" },
  subText: { fontSize: "12px", color: "#888", marginTop: "5px" },
  menu: { display: "flex", flexDirection: "column", padding: "15px", gap: "10px" },
  link: { display: "flex", alignItems: "center", gap: "10px", padding: "12px 15px", borderRadius: "10px", textDecoration: "none", fontSize: "14px", fontWeight: "500", transition: "all 0.3s ease" },
  icon: { fontSize: "16px" },
  footer: { padding: "15px", borderTop: "1px solid #eee" },
  logout: { width: "100%", padding: "12px", border: "none", borderRadius: "10px", background: "linear-gradient(45deg, #ff4d4d, #e53935)", color: "#fff", cursor: "pointer", fontWeight: "bold", transition: "0.3s" },
};