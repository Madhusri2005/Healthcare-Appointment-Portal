// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { 
// // // // //   Monitor, Search, Play, CheckCircle, XCircle, 
// // // // //   Clock, Globe, UserCheck, RefreshCw, AlertCircle, 
// // // // //   Volume2, Trash2, Zap // Fixed: Changed 'zap' to 'Zap'
// // // // // } from 'lucide-react';

// // // // // const AdminQueue = () => {
// // // // //   // --- 1. STATE & THEME ---
// // // // //   const [queue, setQueue] = useState([]);
// // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // //   const [searchTerm, setSearchTerm] = useState("");

// // // // //   const theme = {
// // // // //     bg: "#011a13",
// // // // //     card: "#022c22",
// // // // //     accent: "#10b981",
// // // // //     border: "rgba(16, 185, 129, 0.15)",
// // // // //     walkin: "#f59e0b",
// // // // //     online: "#3b82f6"
// // // // //   };

// // // // //   // --- 2. LIVE SYNC ENGINE (LocalStorage) ---
// // // // //  const syncQueue = () => {
// // // // //   const savedData = localStorage.getItem('patients'); // Match the AppContext key
// // // // //   if (savedData) {
// // // // //     const parsedData = JSON.parse(savedData);
// // // // //     setQueue(parsedData);
// // // // //   }
// // // // //   setIsLoading(false);
// // // // // };

// // // // //   useEffect(() => {
// // // // //     syncQueue();

// // // // //     // Listen for changes from other tabs (Receptionist Portal)
// // // // //     window.addEventListener('storage', syncQueue);
    
// // // // //     // Polling fallback every 2 seconds
// // // // //     const interval = setInterval(syncQueue, 2000);

// // // // //     return () => {
// // // // //       window.removeEventListener('storage', syncQueue);
// // // // //       clearInterval(interval);
// // // // //     };
// // // // //   }, []);

// // // // //   // --- 3. ACTIONS ---
// // // // //   const handleCall = (id) => {
// // // // //     const updated = queue.map(p => 
// // // // //       p.id === id ? { ...p, status: 'Calling' } : { ...p, status: p.status === 'Calling' ? 'Waiting' : p.status }
// // // // //     );
// // // // //     localStorage.setItem('flexiboard_active_queue', JSON.stringify(updated));
// // // // //     setQueue(updated);
// // // // //   };

// // // // //   const handleComplete = (id) => {
// // // // //     const updated = queue.filter(p => p.id !== id);
// // // // //     localStorage.setItem('flexiboard_active_queue', JSON.stringify(updated));
// // // // //     setQueue(updated);
// // // // //   };

// // // // //   // --- 4. DYNAMIC FILTERING ---
// // // // //   const filteredQueue = queue.filter(p => 
// // // // //     p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
// // // // //     p.id.toString().includes(searchTerm)
// // // // //   );

// // // // //   if (isLoading) return (
// // // // //     <div className="vh-100 d-flex flex-column align-items-center justify-content-center" style={{backgroundColor: theme.bg, color: theme.accent}}>
// // // // //       <RefreshCw className="spinner-border border-0 mb-3" size={40} />
// // // // //       <h5 className="fw-black text-uppercase tracking-tighter">Syncing Live Tokens...</h5>
// // // // //     </div>
// // // // //   );

// // // // //   return (
// // // // //     <div style={{ backgroundColor: theme.bg, minHeight: '100vh', color: '#fff' }} className="p-4 p-lg-5">
      
// // // // //       {/* HEADER */}
// // // // //       <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 gap-4">
// // // // //         <div>
// // // // //           <h1 className="display-5 fw-black mb-1" style={{ letterSpacing: '-2px' }}>
// // // // //             Queue <span style={{ color: theme.accent }}>Command</span>
// // // // //           </h1>
// // // // //           <p className="mb-0 opacity-75" style={{ color: theme.accent }}>Live system monitoring for Flexiboard.</p>
// // // // //         </div>
        
// // // // //         <div className="position-relative">
// // // // //           <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" size={18} />
// // // // //           <input 
// // // // //             type="text" 
// // // // //             className="form-control form-control-lg ps-5" 
// // // // //             placeholder="Search Token or Name..."
// // // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // // //             style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}`, color: '#fff', borderRadius: '15px', width: '320px' }}
// // // // //           />
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="row g-4">
// // // // //         {/* ONLINE PORTAL */}
// // // // //         <div className="col-xl-6">
// // // // //           <SectionHeader title="Online Portal" count={filteredQueue.filter(p => p.type === 'Online').length} color={theme.online} icon={Globe} />
// // // // //           <div className="vstack gap-3">
// // // // //             {filteredQueue.filter(p => p.type === 'Online').map(p => (
// // // // //               <TokenCard key={p.id} p={p} theme={theme} accent={theme.online} onCall={() => handleCall(p.id)} onDone={() => handleComplete(p.id)} />
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* WALK-IN CENTER */}
// // // // //         <div className="col-xl-6">
// // // // //           <SectionHeader title="Walk-in Center" count={filteredQueue.filter(p => p.type === 'Walk-in').length} color={theme.walkin} icon={UserCheck} />
// // // // //           <div className="vstack gap-3">
// // // // //             {filteredQueue.filter(p => p.type === 'Walk-in').map(p => (
// // // // //               <TokenCard key={p.id} p={p} theme={theme} accent={theme.walkin} onCall={() => handleCall(p.id)} onDone={() => handleComplete(p.id)} />
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // // --- SUB-COMPONENTS ---

// // // // // const SectionHeader = ({ title, count, color, icon: Icon }) => (
// // // // //   <div className="mb-4 d-flex align-items-center gap-3 p-3 rounded-4" style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderLeft: `6px solid ${color}` }}>
// // // // //     <Icon size={24} style={{ color }} />
// // // // //     <h4 className="fw-bold m-0">{title}</h4>
// // // // //     <span className="badge rounded-pill ms-auto px-3" style={{ backgroundColor: color, color: '#000' }}>{count}</span>
// // // // //   </div>
// // // // // );

// // // // // const TokenCard = ({ p, theme, accent, onCall, onDone }) => {
// // // // //   const isCalling = p.status === 'Calling';

// // // // //   return (
// // // // //     <div className="p-4 position-relative overflow-hidden transition-all shadow-sm" 
// // // // //       style={{ 
// // // // //         backgroundColor: theme.card, 
// // // // //         borderRadius: '24px', 
// // // // //         border: isCalling ? `2px solid ${theme.accent}` : `1px solid ${theme.border}`,
// // // // //         boxShadow: isCalling ? `0 0 20px ${theme.accent}33` : 'none',
// // // // //         transform: isCalling ? 'scale(1.02)' : 'scale(1)'
// // // // //       }}>
      
// // // // //       {isCalling && (
// // // // //         <div className="position-absolute top-0 start-0 w-100 bg-success text-dark text-center py-1 small fw-black">
// // // // //           <Zap size={12} className="me-1 inline" /> NOW CALLING
// // // // //         </div>
// // // // //       )}

// // // // //       <div className="d-flex justify-content-between align-items-center mt-2">
// // // // //         <div className="d-flex align-items-center gap-4">
// // // // //           <div className="h2 fw-black mb-0" style={{ color: accent }}>#{p.id}</div>
// // // // //           <div>
// // // // //             <h5 className="fw-bold mb-1">{p.name}</h5>
// // // // //             <div className="d-flex gap-3 small opacity-50 fw-bold">
// // // // //               <span className="text-uppercase" style={{fontSize: '0.65rem'}}>{p.doctor}</span>
// // // // //               <span className="text-uppercase" style={{fontSize: '0.65rem'}}><Clock size={10} className="me-1"/> {p.time}</span>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="d-flex gap-2">
// // // // //           <button onClick={onCall} className={`btn p-2 rounded-3 border-secondary ${isCalling ? 'bg-success text-dark' : 'bg-dark text-success'}`}>
// // // // //             <Volume2 size={20} />
// // // // //           </button>
// // // // //           <button onClick={onDone} className="btn p-2 rounded-3 bg-dark border-secondary text-white-50 hover-bright">
// // // // //             <CheckCircle size={20} />
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AdminQueue;
// // // // import React, { useState, useEffect } from 'react';
// // // // import { 
// // // //   Search, Play, CheckCircle, XCircle, 
// // // //   Clock, Globe, UserCheck, RefreshCw, 
// // // //   Volume2, Trash2, Zap, ArrowUpRight
// // // // } from 'lucide-react';

// // // // const AdminQueue = () => {
// // // //   // --- 1. STATE & THEME ---
// // // //   const [queue, setQueue] = useState([]);
// // // //   const [isLoading, setIsLoading] = useState(true);
// // // //   const [searchTerm, setSearchTerm] = useState("");

// // // //   const theme = {
// // // //     bg: "#f8fafc",
// // // //     card: "#ffffff",
// // // //     accent: "#4f46e5", // Indigo
// // // //     border: "#e2e8f0",
// // // //     textMain: "#1e293b",
// // // //     walkin: "#f59e0b", // Amber
// // // //     online: "#3b82f6"  // Blue
// // // //   };

// // // //   // --- 2. LIVE SYNC ENGINE ---
// // // //   const syncQueue = () => {
// // // //     const savedData = localStorage.getItem('patients'); 
// // // //     if (savedData) {
// // // //       const parsedData = JSON.parse(savedData);
// // // //       setQueue(parsedData);
// // // //     }
// // // //     setIsLoading(false);
// // // //   };

// // // //   useEffect(() => {
// // // //     syncQueue();
// // // //     window.addEventListener('storage', syncQueue);
// // // //     const interval = setInterval(syncQueue, 2000);
// // // //     return () => {
// // // //       window.removeEventListener('storage', syncQueue);
// // // //       clearInterval(interval);
// // // //     };
// // // //   }, []);

// // // //   // --- 3. ACTIONS ---
// // // //   const handleCall = (id) => {
// // // //     const updated = queue.map(p => 
// // // //       p.id === id ? { ...p, status: 'Calling' } : { ...p, status: p.status === 'Calling' ? 'Waiting' : p.status }
// // // //     );
// // // //     localStorage.setItem('patients', JSON.stringify(updated));
// // // //     setQueue(updated);
// // // //   };

// // // //   const handleComplete = (id) => {
// // // //     const updated = queue.filter(p => p.id !== id);
// // // //     localStorage.setItem('patients', JSON.stringify(updated));
// // // //     setQueue(updated);
// // // //   };

// // // //   const filteredQueue = queue.filter(p => 
// // // //     (p.name || "").toLowerCase().includes(searchTerm.toLowerCase()) || 
// // // //     p.token?.toString().includes(searchTerm)
// // // //   );

// // // //   if (isLoading) return (
// // // //     <div className="vh-100 d-flex flex-column align-items-center justify-content-center" style={{backgroundColor: theme.bg, color: theme.accent}}>
// // // //       <RefreshCw className="spinner-border border-0 mb-3" size={40} />
// // // //       <h5 className="fw-bold text-uppercase tracking-wider">Syncing Live Tokens...</h5>
// // // //     </div>
// // // //   );

// // // //   return (
// // // //     <div style={{ 
// // // //       backgroundColor: theme.bg, 
// // // //       minHeight: '100vh', 
// // // //       marginLeft: 'var(--sidebar-width, 260px)', 
// // // //       overflowX: 'hidden' 
// // // //     }} className="admin-queue-container">
      
// // // //       <style>{`
// // // //         @media (max-width: 768px) { .admin-queue-container { margin-left: 0 !important; } }
// // // //         .token-card { transition: all 0.3s ease; border-radius: 24px; border: 1px solid ${theme.border}; }
// // // //         .token-card:hover { transform: translateY(-3px); box-shadow: 0 10px 20px -5px rgba(0,0,0,0.05); }
// // // //         .calling-pulse { border: 2px solid ${theme.accent} !important; animation: pulse-border 2s infinite; }
// // // //         @keyframes pulse-border { 
// // // //           0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4); }
// // // //           70% { box-shadow: 0 0 0 10px rgba(79, 70, 229, 0); }
// // // //           100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
// // // //         }
// // // //       `}</style>

// // // //       <div className="p-4 p-md-5 mt-2">
// // // //         {/* HEADER */}
// // // //         <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 gap-4">
// // // //           <div>
// // // //             <div className="d-flex align-items-center gap-2 mb-2">
// // // //                <div style={{width: '40px', height: '4px', backgroundColor: theme.accent, borderRadius: '10px'}}></div>
// // // //                <span className="text-uppercase fw-bold text-muted" style={{fontSize: '10px', letterSpacing: '1px'}}>Live System Monitor</span>
// // // //             </div>
// // // //             <h1 className="fw-black display-6 m-0" style={{ color: theme.textMain, letterSpacing: '-1.5px' }}>
// // // //               Queue <span style={{ color: theme.accent }}>Command</span>
// // // //             </h1>
// // // //             <p className="text-muted small">Managing live patient flow and token broadcast.</p>
// // // //           </div>
          
// // // //           <div className="position-relative">
// // // //             <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={18} />
// // // //             <input 
// // // //               type="text" className="form-control border-0 shadow-sm ps-5" 
// // // //               placeholder="Search Token or Name..."
// // // //               onChange={(e) => setSearchTerm(e.target.value)}
// // // //               style={{ borderRadius: '15px', width: '300px', height: '50px' }}
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         <div className="row g-4">
// // // //           {/* ONLINE PORTAL */}
// // // //           <div className="col-xl-6">
// // // //             <SectionHeader title="Online Appointments" count={filteredQueue.filter(p => p.type === 'Online').length} color={theme.online} icon={Globe} />
// // // //             <div className="vstack gap-3">
// // // //               {filteredQueue.filter(p => p.type === 'Online').map(p => (
// // // //                 <TokenCard key={p.id} p={p} theme={theme} accent={theme.online} onCall={() => handleCall(p.id)} onDone={() => handleComplete(p.id)} />
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* WALK-IN CENTER */}
// // // //           <div className="col-xl-6">
// // // //             <SectionHeader title="Walk-in Registry" count={filteredQueue.filter(p => p.type === 'Walk-in').length} color={theme.walkin} icon={UserCheck} />
// // // //             <div className="vstack gap-3">
// // // //               {filteredQueue.filter(p => p.type === 'Walk-in').map(p => (
// // // //                 <TokenCard key={p.id} p={p} theme={theme} accent={theme.walkin} onCall={() => handleCall(p.id)} onDone={() => handleComplete(p.id)} />
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const SectionHeader = ({ title, count, color, icon: Icon }) => (
// // // //   <div className="mb-4 d-flex align-items-center gap-3 p-3 rounded-4 bg-white border shadow-sm">
// // // //     <div className="p-2 rounded-3" style={{backgroundColor: `${color}15`, color: color}}>
// // // //       <Icon size={20} />
// // // //     </div>
// // // //     <h5 className="fw-bold m-0" style={{fontSize: '1rem'}}>{title}</h5>
// // // //     <span className="badge rounded-pill ms-auto px-3 py-2" style={{ backgroundColor: color, color: '#fff', fontSize: '12px' }}>{count} Active</span>
// // // //   </div>
// // // // );

// // // // const TokenCard = ({ p, theme, accent, onCall, onDone }) => {
// // // //   const isCalling = p.status === 'Calling';

// // // //   return (
// // // //     <div className={`p-4 bg-white token-card ${isCalling ? 'calling-pulse' : ''} position-relative overflow-hidden`}>
      
// // // //       {isCalling && (
// // // //         <div className="position-absolute top-0 start-0 w-100 bg-primary text-white text-center py-1 small fw-bold" style={{fontSize: '10px'}}>
// // // //           <Zap size={10} className="me-1 mb-1" /> BROADCASTING LIVE
// // // //         </div>
// // // //       )}

// // // //       <div className="d-flex justify-content-between align-items-center pt-2">
// // // //         <div className="d-flex align-items-center gap-4">
// // // //           <div className="display-6 fw-black mb-0" style={{ color: accent, letterSpacing: '-2px' }}>
// // // //             #{p.token || p.id}
// // // //           </div>
// // // //           <div>
// // // //             <h5 className="fw-bold mb-1" style={{color: theme.textMain}}>{p.name}</h5>
// // // //             <div className="d-flex align-items-center gap-3 text-muted" style={{fontSize: '0.75rem'}}>
// // // //               <span className="fw-bold"><Stethoscope size={12} className="me-1"/> {p.doctor || "General"}</span>
// // // //               <span><Clock size={12} className="me-1"/> {p.time || "Just now"}</span>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <div className="d-flex gap-2">
// // // //           <button onClick={onCall} className={`btn btn-sm rounded-circle p-3 shadow-sm ${isCalling ? 'btn-primary' : 'btn-light text-primary'}`}>
// // // //             <Volume2 size={20} />
// // // //           </button>
// // // //           <button onClick={onDone} className="btn btn-sm btn-light rounded-circle p-3 shadow-sm text-success">
// // // //             <CheckCircle size={20} />
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // Internal icon for card
// // // // const Stethoscope = ({ size, className }) => (
// // // //   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.8 2.3A.3.3 0 1 0 5 2a.3.3 0 0 0-.2.3Z"/><path d="M10 9.85V3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6.85a4.95 4.95 0 0 0 9.9 0Z"/><path d="M14 21a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6.85a4.95 4.95 0 0 0-9.9 0V21Z"/><path d="M10 9.85a4.95 4.95 0 0 1 4.1 4.3"/><path d="M14 14.15a4.95 4.95 0 0 1-4.1-4.3"/></svg>
// // // // );

// // // // export default AdminQueue;
// // // import React, { useState, useEffect } from 'react';
// // // import { useApp } from "../../context/AppContext"; // Using your Global Logic
// // // import { 
// // //   Search, Play, CheckCircle, XCircle, 
// // //   Clock, Globe, UserCheck, RefreshCw, 
// // //   Volume2, Trash2, Zap, ArrowUpRight, Stethoscope
// // // } from 'lucide-react';

// // // const AdminQueue = () => {
// // //   const { patients, setPatients, setCompleted, completed } = useApp();
// // //   const [searchTerm, setSearchTerm] = useState("");

// // //   const theme = {
// // //     bg: "#f8fafc",
// // //     card: "#ffffff",
// // //     accent: "#4f46e5",
// // //     border: "#e2e8f0",
// // //     textMain: "#1e293b",
// // //     walkin: "#f59e0b", 
// // //     online: "#3b82f6"  
// // //   };

// // //   // --- ACTIONS (Updating Global State) ---
  
// // //   const handleCall = (id) => {
// // //     // Updates status to 'Calling' which reflects globally
// // //     const updated = patients.map(p => 
// // //       p.id === id ? { ...p, status: 'Calling' } : { ...p, status: p.status === 'Calling' ? 'Waiting' : p.status }
// // //     );
// // //     setPatients(updated);
// // //   };

// // //   const handleComplete = (patient) => {
// // //     // 1. Remove from active queue
// // //     const updatedQueue = patients.filter(p => p.id !== patient.id);
// // //     setPatients(updatedQueue);
    
// // //     // 2. Add to completed history for Reports
// // //     const newFinishedPatient = { ...patient, status: 'Completed', completedAt: new Date().toLocaleTimeString() };
// // //     setCompleted([...completed, newFinishedPatient]);
// // //   };

// // //   const filteredQueue = patients.filter(p => 
// // //     (p.name || "").toLowerCase().includes(searchTerm.toLowerCase()) || 
// // //     p.token?.toString().includes(searchTerm)
// // //   );

// // //   return (
// // //     <div style={{ 
// // //       backgroundColor: theme.bg, 
// // //       minHeight: '100vh', 
// // //       marginLeft: '260px', // Matches your Admin Sidebar
// // //       overflowX: 'hidden' 
// // //     }} className="admin-queue-container">
      
// // //       <style>{`
// // //         @media (max-width: 768px) { .admin-queue-container { margin-left: 0 !important; } }
// // //         .token-card { transition: all 0.3s ease; border-radius: 24px; border: 1px solid ${theme.border}; }
// // //         .token-card:hover { transform: translateY(-3px); box-shadow: 0 10px 20px -5px rgba(0,0,0,0.05); }
// // //         .calling-pulse { border: 2px solid ${theme.accent} !important; animation: pulse-border 2s infinite; }
// // //         @keyframes pulse-border { 
// // //           0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4); }
// // //           70% { box-shadow: 0 0 0 10px rgba(79, 70, 229, 0); }
// // //           100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
// // //         }
// // //       `}</style>

// // //       <div className="p-4 p-md-5 mt-2">
// // //         {/* HEADER */}
// // //         <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 gap-4">
// // //           <div>
// // //             <div className="d-flex align-items-center gap-2 mb-2">
// // //                <div style={{width: '40px', height: '4px', backgroundColor: theme.accent, borderRadius: '10px'}}></div>
// // //                <span className="text-uppercase fw-bold text-muted" style={{fontSize: '10px', letterSpacing: '1px'}}>Live Queue Controller</span>
// // //             </div>
// // //             <h1 className="fw-black display-6 m-0" style={{ color: theme.textMain, letterSpacing: '-1.5px' }}>
// // //               Patient <span style={{ color: theme.accent }}>Traffic</span>
// // //             </h1>
// // //             <p className="text-muted small">Real-time sync with Reception and Doctor modules.</p>
// // //           </div>
          
// // //           <div className="position-relative">
// // //             <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={18} />
// // //             <input 
// // //               type="text" className="form-control border-0 shadow-sm ps-5" 
// // //               placeholder="Search by name or token..."
// // //               onChange={(e) => setSearchTerm(e.target.value)}
// // //               style={{ borderRadius: '15px', width: '300px', height: '50px' }}
// // //             />
// // //           </div>
// // //         </div>

// // //         <div className="row g-4">
// // //           {/* ONLINE SECTION */}
// // //           <div className="col-xl-6">
// // //             <SectionHeader title="Online Appointments" count={filteredQueue.filter(p => p.type === 'Online').length} color={theme.online} icon={Globe} />
// // //             <div className="vstack gap-3">
// // //               {filteredQueue.filter(p => p.type === 'Online').map(p => (
// // //                 <TokenCard key={p.id} p={p} theme={theme} accent={theme.online} onCall={() => handleCall(p.id)} onDone={() => handleComplete(p)} />
// // //               ))}
// // //               {filteredQueue.filter(p => p.type === 'Online').length === 0 && <EmptyState text="No online patients" />}
// // //             </div>
// // //           </div>

// // //           {/* WALK-IN SECTION */}
// // //           <div className="col-xl-6">
// // //             <SectionHeader title="Walk-in Registry" count={filteredQueue.filter(p => p.type !== 'Online').length} color={theme.walkin} icon={UserCheck} />
// // //             <div className="vstack gap-3">
// // //               {filteredQueue.filter(p => p.type !== 'Online').map(p => (
// // //                 <TokenCard key={p.id} p={p} theme={theme} accent={theme.walkin} onCall={() => handleCall(p.id)} onDone={() => handleComplete(p)} />
// // //               ))}
// // //               {filteredQueue.filter(p => p.type !== 'Online').length === 0 && <EmptyState text="No walk-in patients" />}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const SectionHeader = ({ title, count, color, icon: Icon }) => (
// // //   <div className="mb-4 d-flex align-items-center gap-3 p-3 rounded-4 bg-white border shadow-sm">
// // //     <div className="p-2 rounded-3" style={{backgroundColor: `${color}15`, color: color}}>
// // //       <Icon size={20} />
// // //     </div>
// // //     <h5 className="fw-bold m-0" style={{fontSize: '1rem'}}>{title}</h5>
// // //     <span className="badge rounded-pill ms-auto px-3 py-2" style={{ backgroundColor: color, color: '#fff', fontSize: '12px' }}>{count} in Queue</span>
// // //   </div>
// // // );

// // // const TokenCard = ({ p, theme, accent, onCall, onDone }) => {
// // //   const isCalling = p.status === 'Calling';

// // //   return (
// // //     <div className={`p-4 bg-white token-card ${isCalling ? 'calling-pulse' : ''} position-relative overflow-hidden`}>
// // //       {isCalling && (
// // //         <div className="position-absolute top-0 start-0 w-100 bg-primary text-white text-center py-1 small fw-bold" style={{fontSize: '10px'}}>
// // //           <Zap size={10} className="me-1 mb-1" /> ACTIVE CALL
// // //         </div>
// // //       )}

// // //       <div className="d-flex justify-content-between align-items-center pt-2">
// // //         <div className="d-flex align-items-center gap-4">
// // //           <div className="display-6 fw-black mb-0" style={{ color: accent, letterSpacing: '-2px' }}>
// // //             #{p.token || p.id?.toString().slice(-2)}
// // //           </div>
// // //           <div>
// // //             <h5 className="fw-bold mb-1" style={{color: theme.textMain}}>{p.name}</h5>
// // //             <div className="d-flex align-items-center gap-3 text-muted" style={{fontSize: '0.75rem'}}>
// // //               <span className="fw-bold d-flex align-items-center gap-1">
// // //                 <Stethoscope size={14} className="text-primary"/> {p.department || "OPD"}
// // //               </span>
// // //               <span className="d-flex align-items-center gap-1">
// // //                 <Clock size={14}/> {p.time || "Waiting"}
// // //               </span>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="d-flex gap-2">
// // //           <button onClick={onCall} title="Announce Patient" className={`btn btn-sm rounded-circle p-3 shadow-sm ${isCalling ? 'btn-primary text-white' : 'btn-light text-primary'}`}>
// // //             <Volume2 size={20} />
// // //           </button>
// // //           <button onClick={onDone} title="Complete Checkup" className="btn btn-sm btn-light rounded-circle p-3 shadow-sm text-success">
// // //             <CheckCircle size={20} />
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const EmptyState = ({ text }) => (
// // //   <div className="text-center py-5 border rounded-4 border-dashed bg-white opacity-50">
// // //     <p className="m-0 small fw-bold">{text}</p>
// // //   </div>
// // // );

// // // export default AdminQueue;
// // import React, { useState } from 'react';
// // import { useApp } from "../../context/AppContext"; 
// // import { 
// //   Search, CheckCircle, Clock, Globe, 
// //   UserCheck, Volume2, Zap, Stethoscope
// // } from 'lucide-react';

// // const AdminQueue = () => {
// //   // 1. Get global data and update function from AppContext
// //   const { allPatients, updateStatus } = useApp();
// //   const [searchTerm, setSearchTerm] = useState("");

// //   const theme = {
// //     bg: "#f8fafc",
// //     card: "#ffffff",
// //     accent: "#4f46e5",
// //     border: "#e2e8f0",
// //     textMain: "#1e293b",
// //     walkin: "#f59e0b", 
// //     online: "#3b82f6"  
// //   };

// //   // --- ACTIONS (Syncing with Backend) ---
  
// //   const handleCall = (token) => {
// //     // Send PATCH request to /api/patients/{token}/status
// //     updateStatus(token, "Calling");
    
// //     // Optional: Add Voice Announcement logic here
// //     const msg = new SpeechSynthesisUtterance(`Patient with token ${token}, please proceed to consultation`);
// //     window.speechSynthesis.speak(msg);
// //   };

// //   const handleComplete = (token) => {
// //     // Send PATCH request to /api/patients/{token}/status
// //     updateStatus(token, "Completed");
// //   };

// //   // 2. Filter from the GLOBAL patient list
// //   const activePatients = allPatients.filter(p => 
// //     p.status !== "Completed" && 
// //     ((p.name || "").toLowerCase().includes(searchTerm.toLowerCase()) || 
// //      p.token?.toString().includes(searchTerm))
// //   );

// //   return (
// //     <div style={{ 
// //       backgroundColor: theme.bg, 
// //       minHeight: '100vh', 
// //       marginLeft: '260px', 
// //       overflowX: 'hidden' 
// //     }} className="admin-queue-container">
      
// //       <style>{`
// //         @media (max-width: 768px) { .admin-queue-container { margin-left: 0 !important; } }
// //         .token-card { transition: all 0.3s ease; border-radius: 24px; border: 1px solid ${theme.border}; }
// //         .token-card:hover { transform: translateY(-3px); box-shadow: 0 10px 20px -5px rgba(0,0,0,0.05); }
// //         .calling-pulse { border: 2px solid ${theme.accent} !important; animation: pulse-border 2s infinite; }
// //         @keyframes pulse-border { 
// //           0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4); }
// //           70% { box-shadow: 0 0 0 10px rgba(79, 70, 229, 0); }
// //           100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
// //         }
// //       `}</style>

// //       <div className="p-4 p-md-5 mt-2">
// //         {/* HEADER */}
// //         <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 gap-4">
// //           <div>
// //             <div className="d-flex align-items-center gap-2 mb-2">
// //                <div style={{width: '40px', height: '4px', backgroundColor: theme.accent, borderRadius: '10px'}}></div>
// //                <span className="text-uppercase fw-bold text-muted" style={{fontSize: '10px', letterSpacing: '1px'}}>Live Queue Controller</span>
// //             </div>
// //             <h1 className="fw-black display-6 m-0" style={{ color: theme.textMain, letterSpacing: '-1.5px' }}>
// //               Patient <span style={{ color: theme.accent }}>Traffic</span>
// //             </h1>
// //             <p className="text-muted small">Real-time sync with Reception and Doctor modules via API.</p>
// //           </div>
          
// //           <div className="position-relative">
// //             <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={18} />
// //             <input 
// //               type="text" className="form-control border-0 shadow-sm ps-5" 
// //               placeholder="Search by name or token..."
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               style={{ borderRadius: '15px', width: '300px', height: '50px' }}
// //             />
// //           </div>
// //         </div>

// //         <div className="row g-4">
// //           {/* ONLINE SECTION */}
// //           <div className="col-xl-6">
// //             <SectionHeader title="Online Appointments" count={activePatients.filter(p => p.type === 'Online').length} color={theme.online} icon={Globe} />
// //             <div className="vstack gap-3">
// //               {activePatients.filter(p => p.type === 'Online').map(p => (
// //                 <TokenCard key={p.id} p={p} theme={theme} accent={theme.online} onCall={() => handleCall(p.token)} onDone={() => handleComplete(p.token)} />
// //               ))}
// //               {activePatients.filter(p => p.type === 'Online').length === 0 && <EmptyState text="No online patients" />}
// //             </div>
// //           </div>

// //           {/* WALK-IN SECTION */}
// //           <div className="col-xl-6">
// //             <SectionHeader title="Walk-in Registry" count={activePatients.filter(p => p.type !== 'Online').length} color={theme.walkin} icon={UserCheck} />
// //             <div className="vstack gap-3">
// //               {activePatients.filter(p => p.type !== 'Online').map(p => (
// //                 <TokenCard key={p.id} p={p} theme={theme} accent={theme.walkin} onCall={() => handleCall(p.token)} onDone={() => handleComplete(p.token)} />
// //               ))}
// //               {activePatients.filter(p => p.type !== 'Online').length === 0 && <EmptyState text="No walk-in patients" />}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Sub-components stay clean
// // const SectionHeader = ({ title, count, color, icon: Icon }) => (
// //   <div className="mb-4 d-flex align-items-center gap-3 p-3 rounded-4 bg-white border shadow-sm">
// //     <div className="p-2 rounded-3" style={{backgroundColor: `${color}15`, color: color}}>
// //       <Icon size={20} />
// //     </div>
// //     <h5 className="fw-bold m-0" style={{fontSize: '1rem'}}>{title}</h5>
// //     <span className="badge rounded-pill ms-auto px-3 py-2" style={{ backgroundColor: color, color: '#fff', fontSize: '12px' }}>{count} in Queue</span>
// //   </div>
// // );

// // const TokenCard = ({ p, theme, accent, onCall, onDone }) => {
// //   const isCalling = p.status === 'Calling' || p.status === 'In Consultation';

// //   return (
// //     <div className={`p-4 bg-white token-card ${isCalling ? 'calling-pulse' : ''} position-relative overflow-hidden`}>
// //       {isCalling && (
// //         <div className="position-absolute top-0 start-0 w-100 bg-primary text-white text-center py-1 small fw-bold" style={{fontSize: '10px'}}>
// //           <Zap size={10} className="me-1 mb-1" /> {p.status.toUpperCase()}
// //         </div>
// //       )}

// //       <div className="d-flex justify-content-between align-items-center pt-2">
// //         <div className="d-flex align-items-center gap-4">
// //           <div className="display-6 fw-black mb-0" style={{ color: accent, letterSpacing: '-2px' }}>
// //             #{p.token}
// //           </div>
// //           <div>
// //             <h5 className="fw-bold mb-1" style={{color: theme.textMain}}>{p.name}</h5>
// //             <div className="d-flex align-items-center gap-3 text-muted" style={{fontSize: '0.75rem'}}>
// //               <span className="fw-bold d-flex align-items-center gap-1">
// //                 <Stethoscope size={14} className="text-primary"/> {p.department}
// //               </span>
// //               <span className="d-flex align-items-center gap-1">
// //                 <Clock size={14}/> {p.status}
// //               </span>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="d-flex gap-2">
// //           <button onClick={onCall} title="Call Patient" className={`btn btn-sm rounded-circle p-3 shadow-sm ${isCalling ? 'btn-primary text-white' : 'btn-light text-primary'}`}>
// //             <Volume2 size={20} />
// //           </button>
// //           <button onClick={onDone} title="Complete Visit" className="btn btn-sm btn-light rounded-circle p-3 shadow-sm text-success">
// //             <CheckCircle size={20} />
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const EmptyState = ({ text }) => (
// //   <div className="text-center py-5 border rounded-4 border-dashed bg-white opacity-50">
// //     <p className="m-0 small fw-bold">{text}</p>
// //   </div>
// // );

// // export default AdminQueue;
// import React, { useState } from 'react';
// import { useApp } from "../../context/AppContext"; 
// import { 
//   Search, CheckCircle, Clock, Globe, 
//   UserCheck, Volume2, Zap, Stethoscope
// } from 'lucide-react';

// const AdminQueue = () => {
//   const { allPatients, updateStatus } = useApp();
//   const [searchTerm, setSearchTerm] = useState("");

//   const theme = {
//     bg: "#f8fafc",
//     card: "#ffffff",
//     accent: "#4f46e5",
//     border: "#e2e8f0",
//     textMain: "#1e293b",
//     walkin: "#f59e0b", 
//     online: "#3b82f6"  
//   };

//   const handleCall = (token) => {
//     updateStatus(token, "Calling");
//     const msg = new SpeechSynthesisUtterance(`Patient with token ${token}, please proceed to consultation`);
//     window.speechSynthesis.speak(msg);
//   };

//   const handleComplete = (token) => {
//     updateStatus(token, "Completed");
//   };

//   // 1. FILTER ACTIVE PATIENTS (Case-Insensitive Search)
//   const activePatients = allPatients.filter(p => 
//     p.status !== "Completed" && 
//     ((p.name || "").toLowerCase().includes(searchTerm.toLowerCase()) || 
//      p.token?.toString().includes(searchTerm))
//   );

//   // 2. SEPARATE LISTS (Case-Insensitive Type Check)
//   const onlinePatients = activePatients.filter(p => p.type?.toLowerCase() === 'online');
//   const walkinPatients = activePatients.filter(p => p.type?.toLowerCase() !== 'online');

//   return (
//     <div style={{ 
//       backgroundColor: theme.bg, 
//       minHeight: '100vh', 
//       marginLeft: '260px', 
//       overflowX: 'hidden' 
//     }} className="admin-queue-container">
      
//       <style>{`
//         @media (max-width: 768px) { .admin-queue-container { margin-left: 0 !important; } }
//         .token-card { transition: all 0.3s ease; border-radius: 24px; border: 1px solid ${theme.border}; overflow: hidden; }
//         .token-card:hover { transform: translateY(-3px); box-shadow: 0 10px 20px -5px rgba(0,0,0,0.05); }
//         .calling-pulse { border: 2px solid ${theme.accent} !important; animation: pulse-border 2s infinite; }
//         @keyframes pulse-border { 
//           0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4); }
//           70% { box-shadow: 0 0 0 10px rgba(79, 70, 229, 0); }
//           100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
//         }
//       `}</style>

//       <div className="p-4 p-md-5 mt-2">
//         <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 gap-4">
//           <div>
//             <div className="d-flex align-items-center gap-2 mb-2">
//                <div style={{width: '40px', height: '4px', backgroundColor: theme.accent, borderRadius: '10px'}}></div>
//                <span className="text-uppercase fw-bold text-muted" style={{fontSize: '10px', letterSpacing: '1px'}}>Live Queue Controller</span>
//             </div>
//             <h1 className="fw-black display-6 m-0" style={{ color: theme.textMain, letterSpacing: '-1.5px' }}>
//               Patient <span style={{ color: theme.accent }}>Traffic</span>
//             </h1>
//           </div>
          
//           <div className="position-relative">
//             <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={18} />
//             <input 
//               type="text" className="form-control border-0 shadow-sm ps-5" 
//               placeholder="Search by name or token..."
//               onChange={(e) => setSearchTerm(e.target.value)}
//               style={{ borderRadius: '15px', width: '300px', height: '50px' }}
//             />
//           </div>
//         </div>

//         <div className="row g-4">
//           {/* ONLINE SECTION */}
//           <div className="col-xl-6">
//             <SectionHeader title="Online Appointments" count={onlinePatients.length} color={theme.online} icon={Globe} />
//             <div className="vstack gap-3">
//               {onlinePatients.map(p => (
//                 <TokenCard key={p.id} p={p} theme={theme} accent={theme.online} onCall={() => handleCall(p.token)} onDone={() => handleComplete(p.token)} />
//               ))}
//               {onlinePatients.length === 0 && <EmptyState text="No online patients in queue" />}
//             </div>
//           </div>

//           {/* WALK-IN SECTION */}
//           <div className="col-xl-6">
//             <SectionHeader title="Walk-in Registry" count={walkinPatients.length} color={theme.walkin} icon={UserCheck} />
//             <div className="vstack gap-3">
//               {walkinPatients.map(p => (
//                 <TokenCard key={p.id} p={p} theme={theme} accent={theme.walkin} onCall={() => handleCall(p.token)} onDone={() => handleComplete(p.token)} />
//               ))}
//               {walkinPatients.length === 0 && <EmptyState text="No walk-in patients in queue" />}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const SectionHeader = ({ title, count, color, icon: Icon }) => (
//   <div className="mb-4 d-flex align-items-center gap-3 p-3 rounded-4 bg-white border shadow-sm">
//     <div className="p-2 rounded-3" style={{backgroundColor: `${color}15`, color: color}}>
//       <Icon size={20} />
//     </div>
//     <h5 className="fw-bold m-0" style={{fontSize: '1rem'}}>{title}</h5>
//     <span className="badge rounded-pill ms-auto px-3 py-2" style={{ backgroundColor: color, color: '#fff', fontSize: '12px' }}>{count} Active</span>
//   </div>
// );

// const TokenCard = ({ p, theme, accent, onCall, onDone }) => {
//   const isCalling = p.status === 'Calling' || p.status === 'In Consultation';

//   return (
//     <div className={`p-4 bg-white token-card ${isCalling ? 'calling-pulse' : ''} position-relative`}>
//       {isCalling && (
//         <div className="position-absolute top-0 start-0 w-100 bg-primary text-white text-center py-1 small fw-bold" style={{fontSize: '10px', zIndex: 2}}>
//           <Zap size={10} className="me-1 mb-1" /> {p.status.toUpperCase()}
//         </div>
//       )}

//       <div className="d-flex justify-content-between align-items-center pt-2">
//         <div className="d-flex align-items-center gap-4">
//           <div className="display-6 fw-black mb-0" style={{ color: accent, letterSpacing: '-2px' }}>
//             #{p.token}
//           </div>
//           <div>
//             <h5 className="fw-bold mb-1" style={{color: theme.textMain}}>{p.name}</h5>
//             <div className="d-flex align-items-center gap-3 text-muted" style={{fontSize: '0.75rem'}}>
//               <span className="fw-bold d-flex align-items-center gap-1">
//                 <Stethoscope size={14} className="text-primary"/> {p.department}
//               </span>
//               <span className="d-flex align-items-center gap-1">
//                 <Clock size={14}/> {p.status}
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="d-flex gap-2">
//           <button onClick={onCall} title="Call Patient" className={`btn btn-sm rounded-circle p-3 shadow-sm ${isCalling ? 'btn-primary text-white' : 'btn-light text-primary'}`}>
//             <Volume2 size={20} />
//           </button>
//           <button onClick={onDone} title="Complete Visit" className="btn btn-sm btn-light rounded-circle p-3 shadow-sm text-success">
//             <CheckCircle size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const EmptyState = ({ text }) => (
//   <div className="text-center py-5 border rounded-4 border-dashed bg-white opacity-50">
//     <p className="m-0 small fw-bold text-muted">{text}</p>
//   </div>
// );

// export default AdminQueue;
import React, { useState } from 'react';
import { useApp } from "../../context/AppContext"; 
import { 
  Search, CheckCircle, Clock, Globe, 
  UserCheck, Volume2, Zap, Stethoscope
} from 'lucide-react';

const AdminQueue = () => {
  const { allPatients, updateStatus } = useApp();
  const [searchTerm, setSearchTerm] = useState("");

  const theme = {
    bg: "#f8fafc",
    card: "#ffffff",
    accent: "#4f46e5",
    border: "#e2e8f0",
    textMain: "#1e293b",
    walkin: "#f59e0b", 
    online: "#3b82f6"  
  };

  const handleCall = (token) => {
    updateStatus(token, "Calling");
    const msg = new SpeechSynthesisUtterance(`Patient with token ${token}, please proceed to consultation`);
    window.speechSynthesis.speak(msg);
  };

  const handleComplete = (token) => {
    updateStatus(token, "Completed");
  };

  const activePatients = allPatients.filter(p => 
    p.status !== "Completed" && 
    ((p.name || "").toLowerCase().includes(searchTerm.toLowerCase()) || 
     p.token?.toString().includes(searchTerm))
  );

  const onlinePatients = activePatients.filter(p => p.type?.toLowerCase() === 'online');
  const walkinPatients = activePatients.filter(p => p.type?.toLowerCase() !== 'online');

  return (
    <div style={{ 
      backgroundColor: theme.bg, 
      minHeight: '100vh', 
      marginLeft: '260px', 
      // FIX: Ensure the container allows vertical scrolling
      overflowY: 'auto',
      display: 'block',
      position: 'relative'
    }} className="admin-queue-container">
      
      <style>{`
        @media (max-width: 768px) { 
            .admin-queue-container { margin-left: 0 !important; } 
        }
        /* Custom scrollbar for better look */
        .admin-queue-container::-webkit-scrollbar { width: 6px; }
        .admin-queue-container::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        
        .token-card { transition: all 0.3s ease; border-radius: 24px; border: 1px solid ${theme.border}; overflow: hidden; }
        .token-card:hover { transform: translateY(-3px); box-shadow: 0 10px 20px -5px rgba(0,0,0,0.05); }
        .calling-pulse { border: 2px solid ${theme.accent} !important; animation: pulse-border 2s infinite; }
        @keyframes pulse-border { 
          0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(79, 70, 229, 0); }
          100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
        }
      `}</style>

      {/* Added pb-5 (padding bottom) to ensure last card is visible */}
      <div className="p-4 p-md-5 mt-2 pb-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 gap-4">
          <div>
            <div className="d-flex align-items-center gap-2 mb-2">
               <div style={{width: '40px', height: '4px', backgroundColor: theme.accent, borderRadius: '10px'}}></div>
               <span className="text-uppercase fw-bold text-muted" style={{fontSize: '10px', letterSpacing: '1px'}}>Live Queue Controller</span>
            </div>
            <h1 className="fw-black display-6 m-0" style={{ color: theme.textMain, letterSpacing: '-1.5px' }}>
              Patient <span style={{ color: theme.accent }}>Traffic</span>
            </h1>
          </div>
          
          <div className="position-relative">
            <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={18} />
            <input 
              type="text" className="form-control border-0 shadow-sm ps-5" 
              placeholder="Search by name or token..."
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ borderRadius: '15px', width: '300px', height: '50px' }}
            />
          </div>
        </div>

        <div className="row g-4 mb-5">
          {/* ONLINE SECTION */}
          <div className="col-xl-6">
            <SectionHeader title="Online Appointments" count={onlinePatients.length} color={theme.online} icon={Globe} />
            <div className="vstack gap-3">
              {onlinePatients.map(p => (
                <TokenCard key={p.id} p={p} theme={theme} accent={theme.online} onCall={() => handleCall(p.token)} onDone={() => handleComplete(p.token)} />
              ))}
              {onlinePatients.length === 0 && <EmptyState text="No online patients in queue" />}
            </div>
          </div>

          {/* WALK-IN SECTION */}
          <div className="col-xl-6">
            <SectionHeader title="Walk-in Registry" count={walkinPatients.length} color={theme.walkin} icon={UserCheck} />
            <div className="vstack gap-3">
              {walkinPatients.map(p => (
                <TokenCard key={p.id} p={p} theme={theme} accent={theme.walkin} onCall={() => handleCall(p.token)} onDone={() => handleComplete(p.token)} />
              ))}
              {walkinPatients.length === 0 && <EmptyState text="No walk-in patients in queue" />}
            </div>
          </div>
        </div>
        
        {/* Extra spacer for the bottom of the page */}
        <div style={{ height: '100px' }}></div>
      </div>
    </div>
  );
};

// ... SectionHeader, TokenCard, and EmptyState remain the same as your code ...
const SectionHeader = ({ title, count, color, icon: Icon }) => (
    <div className="mb-4 d-flex align-items-center gap-3 p-3 rounded-4 bg-white border shadow-sm">
      <div className="p-2 rounded-3" style={{backgroundColor: `${color}15`, color: color}}>
        <Icon size={20} />
      </div>
      <h5 className="fw-bold m-0" style={{fontSize: '1rem'}}>{title}</h5>
      <span className="badge rounded-pill ms-auto px-3 py-2" style={{ backgroundColor: color, color: '#fff', fontSize: '12px' }}>{count} Active</span>
    </div>
  );
  
  const TokenCard = ({ p, theme, accent, onCall, onDone }) => {
    const isCalling = p.status === 'Calling' || p.status === 'In Consultation';
  
    return (
      <div className={`p-4 bg-white token-card ${isCalling ? 'calling-pulse' : ''} position-relative`}>
        {isCalling && (
          <div className="position-absolute top-0 start-0 w-100 bg-primary text-white text-center py-1 small fw-bold" style={{fontSize: '10px', zIndex: 2}}>
            <Zap size={10} className="me-1 mb-1" /> {p.status.toUpperCase()}
          </div>
        )}
  
        <div className="d-flex justify-content-between align-items-center pt-2">
          <div className="d-flex align-items-center gap-4">
            <div className="display-6 fw-black mb-0" style={{ color: accent, letterSpacing: '-2px' }}>
              #{p.token}
            </div>
            <div>
              <h5 className="fw-bold mb-1" style={{color: theme.textMain}}>{p.name}</h5>
              <div className="d-flex align-items-center gap-3 text-muted" style={{fontSize: '0.75rem'}}>
                <span className="fw-bold d-flex align-items-center gap-1">
                  <Stethoscope size={14} className="text-primary"/> {p.department}
                </span>
                <span className="d-flex align-items-center gap-1">
                  <Clock size={14}/> {p.status}
                </span>
              </div>
            </div>
          </div>
  
          <div className="d-flex gap-2">
            <button onClick={onCall} title="Call Patient" className={`btn btn-sm rounded-circle p-3 shadow-sm ${isCalling ? 'btn-primary text-white' : 'btn-light text-primary'}`}>
              <Volume2 size={20} />
            </button>
            <button onClick={onDone} title="Complete Visit" className="btn btn-sm btn-light rounded-circle p-3 shadow-sm text-success">
              <CheckCircle size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const EmptyState = ({ text }) => (
    <div className="text-center py-5 border rounded-4 border-dashed bg-white opacity-50">
      <p className="m-0 small fw-bold text-muted">{text}</p>
    </div>
  );

export default AdminQueue;