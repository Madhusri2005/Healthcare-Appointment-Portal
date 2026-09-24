
import React, { useState, useEffect } from 'react';
import { useApp } from "../../context/AppContext"; // Importing Live Data
import { 
  Calendar, Clock, User, Stethoscope, ExternalLink, 
  CheckCircle2, AlertCircle, Download, Search, RefreshCcw
} from 'lucide-react';

const Appointments = () => {
  const { patients, completed, currentPatient } = useApp();
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All Bookings");
  const [loading, setLoading] = useState(true);

  const theme = {
    bg: "#011a13",
    card: "#022c22",
    accent: "#10b981",
    border: "rgba(16, 185, 129, 0.12)",
    textSecondary: "#6ee7b7"
  };

  // --- LIVE DATA MAPPING ---
  // We combine all system patients into a single 'Appointment' view
  const allAppointments = [
    ...(currentPatient ? [{ ...currentPatient, status: 'In-Progress' }] : []),
    ...patients.map(p => ({ ...p, status: p.status === 'Calling' ? 'In-Progress' : 'Pending' })),
    ...completed.map(p => ({ ...p, status: 'Confirmed' }))
  ].map(apt => ({
    id: apt.id?.toString().includes('APT') ? apt.id : `APT-${apt.token || '00'}`,
    patient: apt.name,
    doctor: apt.doctor || "Duty Doctor",
    dept: apt.department || "General OPD",
    date: apt.date || new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }),
    time: apt.time || "Immediate",
    status: apt.status
  }));

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Confirmed': return { bg: 'rgba(16, 185, 129, 0.1)', text: theme.accent, border: 'rgba(16, 185, 129, 0.3)' };
      case 'Pending': return { bg: 'rgba(245, 158, 11, 0.1)', text: '#f59e0b', border: 'rgba(245, 158, 11, 0.3)' };
      case 'In-Progress': return { bg: 'rgba(59, 130, 246, 0.1)', text: '#3b82f6', border: 'rgba(59, 130, 246, 0.3)' };
      default: return { bg: 'rgba(255,255,255,0.05)', text: '#fff', border: 'transparent' };
    }
  };

  const filteredAppointments = allAppointments.filter(apt => {
    const matchesSearch = apt.patient.toLowerCase().includes(searchTerm.toLowerCase()) || apt.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "All Bookings" || apt.status === filter;
    return matchesSearch && matchesFilter;
  });

  if (loading) return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center" style={{backgroundColor: theme.bg, color: theme.accent}}>
      <RefreshCcw className="spinner-border border-0 mb-3" size={40} />
      <span className="fw-bold text-uppercase tracking-widest">Syncing Scheduler...</span>
    </div>
  );

  return (
    <div style={{ backgroundColor: theme.bg, minHeight: '100vh', color: '#fff', marginLeft: '260px' }} className="p-4 p-lg-5">
      
      {/* HEADER & ACTION BAR */}
      <div className="d-flex flex-column flex-xl-row justify-content-between align-items-xl-center mb-5 gap-4">
        <div>
          <h1 className="display-5 fw-black mb-1" style={{ letterSpacing: '-2px' }}>
            Appointment <span style={{ color: theme.accent }}>Scheduler</span>
          </h1>
          <p className="mb-0 opacity-75" style={{ color: theme.textSecondary }}>
            Monitoring {allAppointments.length} live clinical sessions.
          </p>
        </div>

        <div className="d-flex flex-wrap gap-3">
          <div className="position-relative">
            <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" size={18} />
            <input 
              type="text" 
              className="form-control form-control-lg ps-5 border-0 shadow-sm" 
              placeholder="Search patients..."
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ backgroundColor: theme.card, color: '#fff', borderRadius: '15px', minWidth: '300px' }}
            />
          </div>
          <button className="btn btn-lg d-flex align-items-center gap-2 shadow" style={{ backgroundColor: theme.card, color: theme.accent, border: `1px solid ${theme.border}`, borderRadius: '15px' }}>
            <Download size={20} /> Export Logs
          </button>
        </div>
      </div>

      {/* FILTER RIBBON */}
      <div className="p-2 mb-5 d-flex gap-2 overflow-auto no-scrollbar" style={{ backgroundColor: 'rgba(2, 44, 34, 0.4)', borderRadius: '20px', border: `1px solid ${theme.border}` }}>
        {['All Bookings', 'Confirmed', 'Pending', 'In-Progress'].map((f) => (
          <button 
            key={f} 
            onClick={() => setFilter(f)}
            className="btn btn-sm px-4 py-2 rounded-pill fw-bold text-nowrap transition-all"
            style={{ 
              backgroundColor: filter === f ? theme.accent : 'transparent', 
              color: filter === f ? theme.bg : theme.textSecondary,
              border: 'none'
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* APPOINTMENT GRID */}
      <div className="row g-4">
        {filteredAppointments.length > 0 ? filteredAppointments.map((apt, index) => {
          const statusStyle = getStatusStyle(apt.status);
          return (
            <div key={index} className="col-12 col-md-6 col-xxl-4">
              <div className="p-4 h-100 position-relative shadow-hover border transition-all" 
                style={{ 
                  backgroundColor: theme.card, 
                  borderRadius: '28px', 
                  borderColor: theme.border,
                }}>
                
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <span className="badge px-3 py-2" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: theme.accent, borderRadius: '10px', fontSize: '0.7rem', border: `1px solid ${theme.border}` }}>
                    {apt.id}
                  </span>
                  <div className="badge rounded-pill px-3 py-2 d-flex align-items-center gap-1" 
                       style={{ backgroundColor: statusStyle.bg, color: statusStyle.text, border: `1px solid ${statusStyle.border}` }}>
                    {apt.status === 'In-Progress' && <span className="spinner-grow spinner-grow-sm"></span>}
                    {apt.status}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="p-3 rounded-circle bg-dark border border-secondary">
                      <User size={20} className="text-white-50" />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-0">{apt.patient}</h5>
                      <small style={{ color: theme.textSecondary }}>Patient Record</small>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3 p-3 rounded-4" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                    <Stethoscope size={18} className="text-info" />
                    <div>
                      <div className="small fw-bold">{apt.doctor}</div>
                      <div className="text-uppercase" style={{ fontSize: '0.6rem', letterSpacing: '1px', color: theme.textSecondary }}>{apt.dept}</div>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-dashed">
                  <div className="d-flex align-items-center gap-2 small text-white-50">
                    <Calendar size={14} /> {apt.date}
                  </div>
                  <div className="d-flex align-items-center gap-2 fw-bold text-white">
                    <Clock size={14} className="text-success" /> {apt.time}
                  </div>
                </div>
              </div>
            </div>
          );
        }) : (
          <div className="text-center py-5 w-100 opacity-25">
            <AlertCircle size={48} className="mb-3 mx-auto" />
            <h3>No appointments found</h3>
          </div>
        )}
      </div>

      {/* FOOTER STATS */}
      <div className="mt-5 pt-4 border-top border-secondary d-flex gap-4 opacity-75">
        <div className="d-flex align-items-center gap-2 small">
          <CheckCircle2 size={16} className="text-success" /> {allAppointments.filter(a => a.status === 'Confirmed').length} Completed
        </div>
        <div className="d-flex align-items-center gap-2 small">
          <AlertCircle size={16} className="text-warning" /> {allAppointments.filter(a => a.status === 'Pending').length} In Queue
        </div>
        <div className="d-flex align-items-center gap-2 small">
          <RefreshCcw size={16} className="text-info" /> {allAppointments.filter(a => a.status === 'In-Progress').length} Active
        </div>
      </div>
    </div>
  );
};

export default Appointments;