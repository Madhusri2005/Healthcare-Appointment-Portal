
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Ticket,
  Activity,
  Eye,
  MapPin,
  Bell,
  User,
  LogOut,
  Menu,
} from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { path: "/patient", label: "Dashboard", icon: LayoutDashboard },
    { path: "/patient/book", label: "Book Token", icon: Ticket },
    { path: "/patient/view", label: "Queue Status", icon: Eye },
    { path: "/patient/my-token", label: "My Token", icon: MapPin },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button style={styles.mobileBtn} onClick={() => setCollapsed(!collapsed)}>
        <Menu size={22} />
      </button>

      <div
        style={{
          ...styles.sidebar,
          width: collapsed ? "70px" : "240px",
        }}
      >
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.logo}>🏥</div>
          {!collapsed && <h3 style={styles.title}>Patient</h3>}
        </div>

        {/* Menu */}
        <div style={styles.menu}>
          {menuItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={i}
                to={item.path}
                end={item.path === "/patient"}
                style={({ isActive }) => ({
                  ...styles.link,
                  borderLeft: isActive ? "4px solid #90caf9" : "4px solid transparent",
                  background: isActive ? "#1565c0" : "transparent",
                })}
              >
                <Icon size={20} />
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            );
          })}
        </div>

        {/* Footer Profile */}
        <div style={styles.footer}>
          <div style={styles.profile}>
            <User size={20} />
            {!collapsed && (
              <div>
                <div style={styles.name}>Patient Name</div>
                <div style={styles.role}>Patient</div>
              </div>
            )}
          </div>

          <NavLink to="/" style={styles.logout}>
            <LogOut size={20} />
            {!collapsed && <span>Logout</span>}
          </NavLink>
        </div>
      </div>
    </>
  );
}

const styles = {
  sidebar: {
    height: "100vh",
    background: "#0d47a1",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "12px",
    transition: "0.3s",
    /* --- CRITICAL FIXES BELOW --- */
    position: "sticky", 
    top: 0,
    left: 0,
    zIndex: 1000, 
    /* --------------------------- */
  },

  mobileBtn: {
    position: "fixed",
    top: "10px",
    left: "10px",
    zIndex: 1001,
    padding: "8px",
    background: "#0d47a1",
    color: "white",
    border: "none",
    borderRadius: "6px",
    display: "none",
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
  },

  logo: {
    fontSize: "22px",
  },

  title: {
    fontSize: "16px",
    margin: 0,
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  link: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px",
    borderRadius: "6px",
    color: "white",
    textDecoration: "none",
    fontSize: "13px",
    transition: "0.2s",
  },

  footer: {
    marginTop: "auto",
  },

  profile: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px",
    borderTop: "1px solid rgba(255,255,255,0.2)",
  },

  name: {
    fontSize: "13px",
    fontWeight: "bold",
  },

  role: {
    fontSize: "11px",
    opacity: 0.7,
  },

  logout: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px",
    marginTop: "10px",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    background: "#c62828",
  },
};