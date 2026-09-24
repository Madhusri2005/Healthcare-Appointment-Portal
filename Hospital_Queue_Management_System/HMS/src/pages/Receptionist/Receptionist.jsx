import { Outlet } from "react-router-dom";
import ReceptionistSidebar from "./ReceptionistSidebar";

export default function Receptionist() {
  return (
    <div style={styles.wrapper}>
      
      {/* Sidebar */}
      <ReceptionistSidebar />

      {/* Main Content */}
      <div style={styles.main}>
        <Outlet />
      </div>

    </div>
  );
}

/* 🔥 SUPER PROFESSIONAL LAYOUT */
const styles = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    background: "#f4f6f9",
  },

  main: {
    marginLeft: "260px", // same as sidebar width
    padding: "20px",
    width: "100%",
  },
};