import { Outlet } from "react-router-dom";
import DoctorSidebar from "./DoctorSidebar";

export default function Doctor() {
  return (
    <div style={{ display: "flex" }}>
      <DoctorSidebar />

      <div style={{ marginLeft: "250px", padding: "20px", width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
}