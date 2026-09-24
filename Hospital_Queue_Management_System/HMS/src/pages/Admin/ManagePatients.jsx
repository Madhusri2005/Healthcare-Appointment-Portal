
import React, { useState, useEffect } from 'react';
import { 
  UserPlus, Search, Trash2, User, Phone, 
  RefreshCcw, X, Save, Mail, ArrowUpRight 
} from 'lucide-react';

const ManagePatients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  // Theme matching Admin Dashboard and Manage Doctors
  const theme = {
    bg: "#f8fafc",
    card: "#ffffff",
    accent: "#4f46e5", // Indigo 600
    border: "#e2e8f0",
    textMain: "#1e293b"
  };

  const fetchPatients = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8081/api/users/role/PATIENT');
      if (response.ok) {
        const data = await response.json();
        setPatients(data);
      }
    } catch (err) {
      console.error("Fetch Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleAddPatient = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.email,
          fullName: formData.name,
          phone: formData.phone,
          password: "patient@password",
          role: "PATIENT"
        })
      });

      if (response.ok) {
        fetchPatients();
        setShowModal(false);
        setFormData({ name: '', phone: '', email: '' });
      }
    } catch (err) {
      alert("Database error");
    }
  };

  const filteredPatients = patients.filter(p => 
    (p.fullName || "").toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.id.toString().includes(searchTerm)
  );

  if (loading) return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center" style={{backgroundColor: theme.bg, color: theme.accent}}>
      <RefreshCcw className="spinner-border border-0 mb-3" size={40} />
      <span className="fw-bold text-uppercase tracking-wider">Syncing Patient Records...</span>
    </div>
  );

  return (
    <div style={{ 
      backgroundColor: theme.bg, 
      minHeight: '100vh', 
      marginLeft: 'var(--sidebar-width, 260px)', 
      overflowX: 'hidden' 
    }} className="manage-patients-container">
      
      <style>{`
        @media (max-width: 768px) { .manage-patients-container { margin-left: 0 !important; } }
        .patient-card { transition: all 0.3s ease; border: 1px solid ${theme.border}; border-radius: 28px; }
        .patient-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05) !important; }
        .custom-input:focus { border-color: ${theme.accent} !important; outline: none; box-shadow: none; }
      `}</style>

      <div className="p-4 p-md-5 mt-2">
        {/* HEADER SECTION */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 gap-4">
          <div>
            <div className="d-flex align-items-center gap-2 mb-2">
               <div style={{width: '40px', height: '4px', backgroundColor: theme.accent, borderRadius: '10px'}}></div>
               <span className="text-uppercase fw-bold text-muted" style={{fontSize: '10px', letterSpacing: '1px'}}>Clinical Records</span>
            </div>
            <h1 className="fw-black display-6 m-0" style={{ color: theme.textMain, letterSpacing: '-1.5px' }}>
              Patient <span style={{ color: theme.accent }}>Registry</span>
            </h1>
            <p className="text-muted small">Total Database: {patients.length} Records</p>
          </div>
          
          <div className="d-flex gap-3">
            <div className="position-relative d-none d-lg-block">
              <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={18} />
              <input 
                type="text" className="form-control border-0 shadow-sm ps-5 custom-input" 
                placeholder="Search by ID or Name..."
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ borderRadius: '15px', width: '300px', height: '50px' }}
              />
            </div>
            <button onClick={() => setShowModal(true)} className="btn shadow-sm d-flex align-items-center gap-2 px-4" 
              style={{ backgroundColor: theme.accent, color: '#fff', fontWeight: '700', borderRadius: '15px' }}>
              <UserPlus size={20} /> New Patient
            </button>
          </div>
        </div>

        {/* PATIENT GRID */}
        <div className="row g-4">
          {filteredPatients.map((p) => (
            <div key={p.id} className="col-12 col-md-6 col-xl-4 col-xxl-3">
              <div className="p-4 h-100 bg-white patient-card">
                
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div className="p-3 rounded-4" style={{ backgroundColor: `${theme.accent}15`, color: theme.accent }}>
                    <User size={24} />
                  </div>
                  <div className="d-flex gap-1">
                    <button className="btn btn-light btn-sm rounded-circle p-2 text-danger opacity-75"><Trash2 size={16}/></button>
                  </div>
                </div>

                <h5 className="fw-bold mb-1 text-truncate" style={{color: theme.textMain}}>{p.fullName}</h5>
                <p className="small fw-bold mb-4" style={{color: theme.accent, fontSize: '0.7rem', letterSpacing: '0.5px'}}>DB-ID: {p.id}</p>

                <div className="vstack gap-2 mb-4 p-3 rounded-4 bg-light border-0">
                  <div className="d-flex align-items-center gap-2 small text-muted text-truncate">
                    <Mail size={14} className="text-primary" /> {p.username}
                  </div>
                  <div className="d-flex align-items-center gap-2 small text-muted">
                    <Phone size={14} className="text-primary" /> {p.phone || "No Phone"}
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-between pt-2 border-top">
                   <span className="small fw-bold text-muted" style={{fontSize: '0.65rem'}}>STABLE RECORD</span>
                   <ArrowUpRight size={14} className="text-muted opacity-50" />
                </div>
              </div>
            </div>
          ))}
          {filteredPatients.length === 0 && (
            <div className="text-center py-5 w-100">
              <p className="text-muted">No patient records found.</p>
            </div>
          )}
        </div>
      </div>

      {/* REGISTRATION MODAL */}
      {showModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3" 
             style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', zIndex: 1060, backdropFilter: 'blur(8px)' }}>
          <div className="w-100 p-4 p-md-5 shadow-lg" style={{ backgroundColor: theme.card, maxWidth: '500px', borderRadius: '30px' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-black m-0" style={{letterSpacing: '-1px'}}>Register <span style={{color: theme.accent}}>Patient</span></h3>
              <button onClick={() => setShowModal(false)} className="btn btn-light rounded-circle p-2"><X size={24}/></button>
            </div>
            
            <form onSubmit={handleAddPatient} className="vstack gap-3">
              <div>
                <label className="small fw-bold text-muted mb-2">Full Name</label>
                <input required type="text" className="form-control border-light bg-light p-3 rounded-3 shadow-none custom-input" 
                  placeholder="John Doe"
                  value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div>
                <label className="small fw-bold text-muted mb-2">Email Address</label>
                <input required type="email" className="form-control border-light bg-light p-3 rounded-3 shadow-none custom-input" 
                  placeholder="john@example.com"
                  value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
              <div>
                <label className="small fw-bold text-muted mb-2">Phone Number</label>
                <input required type="tel" className="form-control border-light bg-light p-3 rounded-3 shadow-none custom-input" 
                  placeholder="+1 234 567 890"
                  value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              </div>
              <div className="mt-3">
                <button type="submit" className="btn btn-lg w-100 fw-bold py-3 rounded-4 border-0 shadow" style={{backgroundColor: theme.accent, color: '#fff'}}>
                  <Save size={20} className="me-2"/> COMMIT TO DATABASE
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagePatients;