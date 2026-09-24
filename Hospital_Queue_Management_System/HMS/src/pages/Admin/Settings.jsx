
import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, Bell, ShieldCheck, Globe, 
  Database, Palette, Save, RefreshCcw, ToggleRight, ToggleLeft,
  HardDrive, Lock, ChevronRight
} from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('General');
  const [securitySettings, setSecuritySettings] = useState({ tfa: true, timeout: true, encrypt: false });

  // Uniform theme matching the rest of the Admin Portal
  const theme = {
    bg: "#f8fafc",
    card: "#ffffff",
    accent: "#4f46e5", // Indigo 600
    border: "#e2e8f0",
    textMain: "#1e293b",
    textMuted: "#64748b"
  };

  const tabs = [
    { name: 'General', icon: SettingsIcon },
    { name: 'Security', icon: ShieldCheck },
    { name: 'System & Data', icon: Database },
    { name: 'Appearance', icon: Palette }
  ];

  return (
    <div style={{ 
      backgroundColor: theme.bg, 
      minHeight: '100vh', 
      marginLeft: 'var(--sidebar-width, 260px)', 
      overflowX: 'hidden' 
    }} className="settings-container">
      
      <style>{`
        @media (max-width: 768px) { .settings-container { margin-left: 0 !important; } }
        .settings-card { border: 1px solid ${theme.border}; border-radius: 30px; background: white; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
        .nav-btn { transition: all 0.2s ease; border-radius: 18px !important; margin-bottom: 8px; font-weight: 600; }
        .nav-btn.active { background-color: ${theme.accent} !important; color: white !important; transform: translateX(5px); }
        .custom-input:focus { border-color: ${theme.accent} !important; box-shadow: 0 0 0 4px ${theme.accent}15 !important; }
        .toggle-btn { cursor: pointer; transition: color 0.2s; }
      `}</style>

      <div className="p-4 p-md-5 mt-2">
        {/* HEADER SECTION */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 gap-4">
          <div>
            <div className="d-flex align-items-center gap-2 mb-2">
               <div style={{width: '40px', height: '4px', backgroundColor: theme.accent, borderRadius: '10px'}}></div>
               <span className="text-uppercase fw-bold text-muted" style={{fontSize: '10px', letterSpacing: '1px'}}>Configuration</span>
            </div>
            <h1 className="fw-black display-6 m-0" style={{ color: theme.textMain, letterSpacing: '-1.5px' }}>
              System <span style={{ color: theme.accent }}>Preferences</span>
            </h1>
            <p className="text-muted small">Configure global hospital parameters and security protocols.</p>
          </div>
          
          <div className="d-flex gap-3">
            <button className="btn btn-lg bg-white border shadow-sm d-flex align-items-center gap-2 px-4" style={{ borderRadius: '15px', fontSize: '0.9rem', fontWeight: '600' }}>
              <RefreshCcw size={18} /> Reset
            </button>
            <button className="btn btn-lg shadow-sm d-flex align-items-center gap-2 px-4" 
              style={{ backgroundColor: theme.accent, color: '#fff', fontWeight: '700', borderRadius: '15px', border: 'none' }}>
              <Save size={18} /> Save Changes
            </button>
          </div>
        </div>

        <div className="row g-4">
          {/* NAVIGATION SIDEBAR */}
          <div className="col-xl-3">
            <div className="p-3 settings-card">
              <div className="nav flex-column">
                {tabs.map((tab) => (
                  <button key={tab.name} onClick={() => setActiveTab(tab.name)}
                    className={`btn nav-btn d-flex align-items-center justify-content-between p-3 border-0 ${activeTab === tab.name ? 'active shadow-md' : 'text-muted'}`}>
                    <div className="d-flex align-items-center gap-3">
                       <tab.icon size={18} /> {tab.name}
                    </div>
                    {activeTab === tab.name && <ChevronRight size={16} />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CONTENT AREA */}
          <div className="col-xl-9">
            <div className="p-4 p-md-5 settings-card min-vh-50">
              
              {activeTab === 'General' && (
                <div className="animate-in fade-in">
                  <h5 className="fw-bold mb-4 d-flex align-items-center gap-2" style={{color: theme.textMain}}>
                    <Globe size={22} style={{ color: theme.accent }} /> Hospital Identity
                  </h5>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label className="small fw-bold text-muted mb-2">Hospital Display Name</label>
                      <input type="text" className="form-control form-control-lg bg-light border-0 custom-input p-3" 
                        defaultValue="Flexiboard General Hospital" style={{ borderRadius: '15px', fontSize: '1rem' }} />
                    </div>
                    <div className="col-md-6">
                      <label className="small fw-bold text-muted mb-2">Admin Email Alias</label>
                      <input type="email" className="form-control form-control-lg bg-light border-0 custom-input p-3" 
                        defaultValue="admin@flexiboard.hms" style={{ borderRadius: '15px', fontSize: '1rem' }} />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Security' && (
                <div className="vstack gap-3 animate-in slide-in-from-bottom-2">
                  <h5 className="fw-bold mb-4 d-flex align-items-center gap-2" style={{color: theme.textMain}}>
                    <Lock size={22} className="text-warning" /> Security Protocols
                  </h5>
                  {[
                    { key: 'tfa', title: "Two-Factor Authentication", desc: "Require OTP for doctor and admin logins" },
                    { key: 'timeout', title: "Automatic Session Timeout", desc: "Logout after 30 mins of inactivity" },
                    { key: 'encrypt', title: "Database Encryption", desc: "AES-256 bit encryption for all patient records" }
                  ].map((item) => (
                    <div key={item.key} className="p-4 rounded-4 d-flex justify-content-between align-items-center border border-light bg-light-subtle" 
                         onClick={() => setSecuritySettings({...securitySettings, [item.key]: !securitySettings[item.key]})}
                         style={{ cursor: 'pointer', transition: '0.2s' }}>
                      <div>
                        <div className="fw-bold" style={{color: theme.textMain}}>{item.title}</div>
                        <div className="small text-muted">{item.desc}</div>
                      </div>
                      <div className="toggle-btn">
                        {securitySettings[item.key] ? 
                          <ToggleRight size={40} className="text-primary" /> : 
                          <ToggleLeft size={40} className="text-muted" />}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'System & Data' && (
                <div className="text-center py-5 animate-in fade-in">
                  <div className="p-4 bg-light d-inline-block rounded-circle mb-4">
                    <HardDrive size={48} className="text-primary" />
                  </div>
                  <h4 className="fw-bold" style={{color: theme.textMain}}>Database Management</h4>
                  <p className="text-muted small mx-auto mb-5" style={{ maxWidth: '400px' }}>
                    Your last automated backup was successful 4 hours ago. Cloud synchronization is currently active.
                  </p>
                  <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-outline-primary rounded-pill px-4 py-2 fw-bold">Download SQL Backup</button>
                    <button className="btn btn-primary rounded-pill px-4 py-2 fw-bold shadow-md">Cloud Sync Now</button>
                  </div>
                </div>
              )}

              {activeTab === 'Appearance' && (
                <div className="text-center py-5 animate-in fade-in">
                   <Palette size={48} className="text-muted mb-3 opacity-25" />
                   <p className="text-muted">Theme customization features coming soon.</p>
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;