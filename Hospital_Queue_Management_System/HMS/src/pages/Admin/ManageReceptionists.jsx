
import React, { useState, useEffect } from 'react';
import { 
  UserRound, UserPlus, Search, Trash2, Edit, 
  Mail, Phone, ShieldCheck, RefreshCcw, X, Save, AlertCircle 
} from 'lucide-react';

const ManageReceptionists = () => {
  const [receptionists, setReceptionists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  
  const [formData, setFormData] = useState({ 
    name: '', email: '', phone: '', shift: 'Morning', status: 'Active' 
  });

  const theme = {
    bg: "#011a13",
    card: "#022c22",
    accent: "#10b981",
    border: "rgba(16, 185, 129, 0.15)",
    textMuted: "#6ee7b7"
  };

  // --- SYNC ACROSS TABS/MODULES ---
  useEffect(() => {
    const loadData = () => {
      const localData = localStorage.getItem('receptionists');
      if (localData) {
        setReceptionists(JSON.parse(localData));
      } else {
        const initialStaff = [
          { id: "REC-01", name: "Alice Cooper", email: "alice@flexi.com", phone: "9876500010", shift: "Morning", status: "Active" }
        ];
        localStorage.setItem('receptionists', JSON.stringify(initialStaff));
        setReceptionists(initialStaff);
      }
      setLoading(false);
    };

    loadData();

    // Listen for changes made in other modules/tabs
    window.addEventListener('storage', loadData);
    return () => window.removeEventListener('storage', loadData);
  }, []);

  const updateStorage = (newList) => {
    localStorage.setItem('receptionists', JSON.stringify(newList));
    setReceptionists(newList);
    // Manually dispatch event for the same window to hear it
    window.dispatchEvent(new Event('storage'));
  };

  const handleOpenModal = (staff = null) => {
    if (staff) {
      setEditId(staff.id);
      setFormData({ ...staff });
    } else {
      setEditId(null);
      setFormData({ name: '', email: '', phone: '', shift: 'Morning', status: 'Active' });
    }
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const updatedList = receptionists.map(r => r.id === editId ? { ...formData, id: editId } : r);
      updateStorage(updatedList);
    } else {
      const uniqueId = `REC-${Date.now().toString().slice(-3)}`;
      updateStorage([{ ...formData, id: uniqueId }, ...receptionists]);
    }
    setShowModal(false);
  };

  const deleteStaff = (id) => {
    if(window.confirm("Remove this receptionist?")) {
      updateStorage(receptionists.filter(r => r.id !== id));
    }
  };

  const filtered = receptionists.filter(r => 
    r.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="vh-100 d-flex align-items-center justify-content-center" style={{backgroundColor: theme.bg}}><RefreshCcw className="spinner-border text-success" /></div>;

  return (
    <div style={{ backgroundColor: theme.bg, minHeight: '100vh', color: '#fff' }} className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h1 className="fw-black">Reception <span style={{ color: theme.accent }}>Desk</span></h1>
        <button onClick={() => handleOpenModal()} className="btn btn-lg d-flex align-items-center gap-2" style={{ backgroundColor: theme.accent, color: theme.bg, borderRadius: '12px' }}>
          <UserPlus size={20} /> Add Staff
        </button>
      </div>

      <div className="row g-4">
        {filtered.map((staff) => (
          <div key={staff.id} className="col-md-6">
            <div className="p-4 border d-flex justify-content-between align-items-center" style={{ backgroundColor: theme.card, borderRadius: '20px', borderColor: theme.border }}>
              <div className="d-flex align-items-center gap-3">
                <div className="p-3 bg-dark rounded-circle text-success"><UserRound /></div>
                <div>
                  <h5 className="mb-0">{staff.name}</h5>
                  <small className="opacity-50">{staff.shift} Shift</small>
                </div>
              </div>
              <div className="d-flex gap-2">
                <button onClick={() => handleOpenModal(staff)} className="btn btn-sm btn-outline-info"><Edit size={16}/></button>
                <button onClick={() => deleteStaff(staff.id)} className="btn btn-sm btn-outline-danger"><Trash2 size={16}/></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'rgba(0,0,0,0.8)', zIndex: 2000 }}>
          <div className="p-5 rounded-5 w-100" style={{ backgroundColor: theme.card, maxWidth: '500px' }}>
             <form onSubmit={handleSubmit} className="vstack gap-3">
                <input required className="form-control bg-dark text-white border-0 p-3" placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                <input required className="form-control bg-dark text-white border-0 p-3" placeholder="Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                <select className="form-select bg-dark text-white border-0 p-3" value={formData.shift} onChange={e => setFormData({...formData, shift: e.target.value})}>
                  <option>Morning</option>
                  <option>Evening</option>
                  <option>Night</option>
                </select>
                <button className="btn btn-success p-3 fw-bold" style={{backgroundColor: theme.accent}}>SAVE STAFF</button>
                <button type="button" onClick={() => setShowModal(false)} className="btn btn-link text-white-50">Cancel</button>
             </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageReceptionists;