import { Link, useLocation, useNavigate } from "react-router-dom";

export default function ReceptionistSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    { name: "Dashboard", path: "/receptionist", icon: "🏠" },
    { name: "Add Patient", path: "/receptionist/add-patient", icon: "➕" },

    { name: "Queue Management", path: "/receptionist/queue", icon: "📋" },

    { name: "Token Display", path: "/receptionist/tokens", icon: "🖥️" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div style={styles.sidebar}>
      
      {/* HEADER */}
      <div style={styles.header}>
        <div style={styles.avatar}>👩‍💼</div>
        <h3 style={{ margin: 0 }}>Receptionist</h3>
        <p style={styles.subText}>Hospital System</p>
      </div>

      {/* MENU */}
      <div style={styles.menu}>
        {menu.map((item, index) => (
          <Link
  key={index}
  to={item.path}
  style={{
    ...styles.link,
    background: location.pathname === item.path ? "rgba(255,255,255,0.1)" : "transparent",
    color: "#fff",
    borderLeft: location.pathname === item.path ? "4px solid #4fc3f7" : "4px solid transparent",
  }}
>
  <span>{item.icon}</span>
  {item.name}
</Link>
        ))}
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        <button onClick={handleLogout} style={styles.logout}>
          🚪 Logout
        </button>
      </div>

    </div>
  );
}
/* 🎨 UPDATED PROFESSIONAL STYLES FOR ReceptionistSidebar.js */
const styles = {
  sidebar: {
    width: "260px",
    height: "100vh",
    position: "fixed", // Keeps sidebar on the left while scrolling
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "#1a237e", // Deep Professional Blue
    color: "#fff",
    boxShadow: "4px 0 15px rgba(0,0,0,0.1)",
    zIndex: 1000,
  },

  header: {
    textAlign: "center",
    padding: "30px 20px",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },

  avatar: {
    fontSize: "45px",
    marginBottom: "10px",
  },

  subText: {
    fontSize: "12px",
    opacity: 0.7,
    letterSpacing: "1px",
    textTransform: "uppercase",
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 0", // Vertical padding only
    flexGrow: 1,
  },

  link: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    padding: "15px 25px",
    textDecoration: "none",
    fontWeight: "500",
    transition: "all 0.3s ease",
    fontSize: "15px",
    borderLeft: "4px solid transparent", // Hidden by default
  },

  /* Note: The active background logic is handled inside the .map() in your JSX */

  footer: {
    padding: "20px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },

  logout: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "#d32f2f", // Solid Red
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
};