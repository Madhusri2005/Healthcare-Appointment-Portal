import { Link } from "react-router-dom";

export default function PatientNavbar() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.navbar}>
        <h3 style={styles.title}>Patient Panel</h3>

        <div style={styles.links}>
          <Link to="/patient" style={styles.link}>Dashboard</Link>
          <Link to="/patient/book" style={styles.link}>Book Token</Link>
          <Link to="/patient/status" style={styles.link}>Queue Status</Link>
          <Link to="/patient/view" style={styles.link}>Queue View</Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "15px",
  },
  navbar: {
    width: "80%",
    maxWidth: "800px",
    background: "#1976d2",
    color: "white",
    padding: "15px 20px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  title: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};