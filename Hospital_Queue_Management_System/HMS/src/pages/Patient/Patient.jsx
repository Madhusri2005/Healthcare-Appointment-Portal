
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

export default function Patient() {
  return (
    <div style={styles.container}>
      {/* Sidebar Component */}
      <Sidebar />

      {/* Content Area - Added flex so it doesn't wrap below the sidebar */}
      <div style={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh", 
    width: "100%", // Added to ensure it fills screen
  },
  content: {
    flex: 1, // This is the key: it forces the content to stay next to the sidebar
    padding: "16px",
    background: "#f5f7fb",
    overflowY: "auto", 
  },
};