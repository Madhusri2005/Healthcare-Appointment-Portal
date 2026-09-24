
import React, { useState } from 'react';
import { useApp } from "../../context/AppContext"; 
import { 
  Stethoscope, UserPlus, Search, Mail, Phone, 
  Trash2, X, Save 
} from 'lucide-react';

const ManageDoctors = () => {
  // 1. ADD SAFETY INITIALIZATION
  const context = useApp();
  const doctors = context?.doctors || []; 
  const setDoctors = context?.setDoctors || (() => {});

  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', specialty: 'Cardiology', email: '', phone: '' 
  });

  const theme = {
    bg: "#f8fafc",
    card: "#ffffff",
    accent: "#4f46e5", 
    border: "#e2e8f0",
    textMain: "#1e293b"
  };

  const handleAddDoctor = (e) => {
    e.preventDefault();
    const newDoctor = {
      id: Date.now(),
      name: formData.name,
      username: formData.email,
      specialization: formData.specialty,
      phone: formData.phone,
      status: 'Active'
    };
    setDoctors([...doctors, newDoctor]);
    setShowModal(false);
    setFormData({ name: '', specialty: 'Cardiology', email: '', phone: '' });
  };

  // 2. ADD NULL CHECK BEFORE FILTERING
  const filteredDoctors = doctors.filter(doc => 
    (doc.name || "").toLowerCase().includes(searchTerm.toLowerCase()) || 
    (doc.specialization || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: theme.bg, minHeight: '100vh', marginLeft: '260px' }}>
      <div className="p-5">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h1 className="fw-black">Staff <span style={{ color: theme.accent }}>Directory</span></h1>
          <button onClick={() => setShowModal(true)} className="btn btn-primary px-4 py-2" style={{borderRadius: '12px'}}>
            <UserPlus size={20} className="me-2"/> Add Doctor
          </button>
        </div>

        <div className="row g-4">
          {filteredDoctors.map((doc) => (
            <div key={doc.id} className="col-md-4">
              <div className="p-4 bg-white shadow-sm rounded-4 border">
                <Stethoscope className="text-primary mb-3" />
                <h5 className="fw-bold">{doc.name}</h5>
                <p className="text-muted small">{doc.specialization}</p>
                <div className="small border-top pt-2">
                   <div><Mail size={12}/> {doc.username}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL CODE HERE (Keep your existing modal UI) */}
      {showModal && (
         <div className="modal d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content p-4 rounded-4">
                    <form onSubmit={handleAddDoctor}>
                        <input className="form-control mb-2" placeholder="Name" onChange={e => setFormData({...formData, name: e.target.value})} required />
                        <input className="form-control mb-2" placeholder="Email" onChange={e => setFormData({...formData, email: e.target.value})} required />
                        <button className="btn btn-primary w-100">Save Doctor</button>
                        <button type="button" className="btn btn-link w-100" onClick={() => setShowModal(false)}>Cancel</button>
                    </form>
                </div>
            </div>
         </div>
      )}
    </div>
  );
};

export default ManageDoctors; // ENSURE THIS LINE IS PRESENT