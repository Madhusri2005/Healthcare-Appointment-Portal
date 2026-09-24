
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "patient",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:8081/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: form.email,
          password: form.password,
          role: form.role.toUpperCase(),
          fullName: form.name
        })
      });

      if (response.ok) {
        alert("Registered Successfully!");
        navigate("/");
      } else {
        alert("Registration failed. Email might already be registered.");
      }
    } catch (err) {
      alert("Error connecting to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div className="auth-box shadow p-4 bg-white" style={{ width: '100%', maxWidth: '450px', borderRadius: '10px' }}>

        <h3 className="text-center mb-4 fw-bold">Register</h3>

        <div className="mb-2">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="John Doe"
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-2">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="email@example.com"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 mb-2">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              placeholder="1234567890"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-2">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 mb-2">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Register As</label>
          <select
            className="form-select"
            name="role"
            onChange={handleChange}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
            <option value="receptionist">Receptionist</option>
          </select>
        </div>

        <button className="btn btn-success w-100" onClick={handleRegister} disabled={loading}>
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <p className="text-center mt-3 mb-0">
          Already have an account?{" "}
          <span
            style={{ color: "#0d6efd", cursor: "pointer", fontWeight: 'bold' }}
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}