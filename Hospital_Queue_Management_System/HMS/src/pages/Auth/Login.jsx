
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "patient",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8081/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.email,
          password: form.password,
          role: form.role.toUpperCase(), // Ensure backend gets "PATIENT", "ADMIN"
        }),
      });

      if (response.ok) {
        const user = await response.json();

        if (!user.role) {
          setError("User role not found. Contact Admin.");
          return;
        }

        // Standardize the role path
        const rolePath = user.role.toLowerCase();

        // 1. Save Session Data
        localStorage.setItem("role", rolePath);
        localStorage.setItem("user_name", user.fullName || user.username);
        localStorage.setItem("user_id", user.id);

        // 2. Redirect to the module base path (e.g., /patient, /admin)
        // This triggers the 'index' route in App.jsx
        navigate(`/${rolePath}`);
      } else {
        setError("Invalid credentials or role selection");
      }
    } catch (err) {
      setError("Backend server is not reachable. Check if port 8081 is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="auth-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        className="auth-box shadow p-4 bg-white"
        style={{ width: "100%", maxWidth: "400px", borderRadius: "10px" }}
      >
        <h3 className="text-center mb-4 fw-bold">Login</h3>

        {error && (
          <div className="alert alert-danger py-2 small text-center">
            {error}
          </div>
        )}

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Login As</label>
          <select
            className="form-select"
            name="role"
            value={form.role}
            onChange={handleChange}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
            <option value="receptionist">Receptionist</option>
          </select>
        </div>

        <button
          className="btn btn-primary w-100"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Authenticating..." : "Login"}
        </button>

        <p className="text-center mt-3 mb-0">
          Don’t have an account?{" "}
          <span
            style={{ color: "#0d6efd", cursor: "pointer", fontWeight: "bold" }}
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}