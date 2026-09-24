import { useNavigate } from "react-router-dom";

export default function DoctorNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-dark bg-success px-3">
      <span className="navbar-brand">Doctor Panel</span>

      <button
        className="btn btn-light"
        onClick={() => {
          localStorage.removeItem("role");
          navigate("/");
        }}
      >
        Logout
      </button>
    </nav>
  );
}