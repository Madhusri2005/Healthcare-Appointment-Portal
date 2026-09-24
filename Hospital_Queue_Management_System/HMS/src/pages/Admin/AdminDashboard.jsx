// // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // import { 
// // // // // // // // //   Users, 
// // // // // // // // //   Stethoscope, 
// // // // // // // // //   Activity, 
// // // // // // // // //   Clock, 
// // // // // // // // //   TrendingUp, 
// // // // // // // // //   AlertCircle, 
// // // // // // // // //   ArrowUpRight, 
// // // // // // // // //   Calendar,
// // // // // // // // //   LayoutDashboard,
// // // // // // // // //   RefreshCcw
// // // // // // // // // } from 'lucide-react';

// // // // // // // // // const AdminDashboard = () => {
// // // // // // // // //   // --- 1. STATE FOR LIVE ANALYTICS ---
// // // // // // // // //   const [stats, setStats] = useState({
// // // // // // // // //     totalDoctors: 0,
// // // // // // // // //     totalPatients: 0,
// // // // // // // // //     activeQueue: 0,
// // // // // // // // //     avgWaitTime: "18 mins" // Mocked for now
// // // // // // // // //   });
// // // // // // // // //   const [recentActivity, setRecentActivity] = useState([]);
// // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // //   const theme = {
// // // // // // // // //     bg: "#011a13",
// // // // // // // // //     card: "#022c22",
// // // // // // // // //     accent: "#10b981",
// // // // // // // // //     border: "rgba(16, 185, 129, 0.15)",
// // // // // // // // //     textMuted: "#6ee7b7"
// // // // // // // // //   };

// // // // // // // // //   // --- 2. LIVE STORAGE SYNC ---
// // // // // // // // //   useEffect(() => {
// // // // // // // // //    const syncDashboard = () => {
// // // // // // // // //   // Use the correct keys from our AppContext
// // // // // // // // //   const patients = JSON.parse(localStorage.getItem('patients') || '[]');
// // // // // // // // //   const completed = JSON.parse(localStorage.getItem('completed') || '[]');
// // // // // // // // //   const current = JSON.parse(localStorage.getItem('currentPatient') || 'null');

// // // // // // // // //   setStats({
// // // // // // // // //     totalDoctors: 5, // You can hardcode this or count your doctor list
// // // // // // // // //     totalPatients: patients.length + completed.length + (current ? 1 : 0),
// // // // // // // // //     activeQueue: patients.length,
// // // // // // // // //     avgWaitTime: patients.length > 5 ? "24 mins" : "12 mins"
// // // // // // // // //   });

// // // // // // // // //   // Map the patients to recent activity
// // // // // // // // //   const activity = patients.slice(0, 4).map(p => ({
// // // // // // // // //     text: `Token ${p.token} waiting for ${p.department}`,
// // // // // // // // //     time: p.time,
// // // // // // // // //     type: "queue"
// // // // // // // // //   }));
// // // // // // // // //   setRecentActivity(activity);
// // // // // // // // //   setLoading(false);
// // // // // // // // // };

// // // // // // // // //     syncDashboard();
// // // // // // // // //     const interval = setInterval(syncDashboard, 3000); // Live poll every 3s
// // // // // // // // //     return () => clearInterval(interval);
// // // // // // // // //   }, []);

// // // // // // // // //   if (loading) return (
// // // // // // // // //     <div className="vh-100 d-flex flex-column align-items-center justify-content-center" style={{backgroundColor: theme.bg, color: theme.accent}}>
// // // // // // // // //       <RefreshCcw className="spinner-border border-0 mb-3" size={40} />
// // // // // // // // //       <span className="fw-black text-uppercase tracking-widest">Initialising Dashboard...</span>
// // // // // // // // //     </div>
// // // // // // // // //   );

// // // // // // // // //   return (
// // // // // // // // //     <div style={{ backgroundColor: theme.bg, minHeight: '100vh', color: '#fff' }} className="p-4 p-lg-5">
      
// // // // // // // // //       {/* HEADER */}
// // // // // // // // //       <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 gap-4">
// // // // // // // // //         <div>
// // // // // // // // //           <h1 className="display-5 fw-black mb-1" style={{ letterSpacing: '-2px' }}>
// // // // // // // // //             System <span style={{ color: theme.accent }}>Overview</span>
// // // // // // // // //           </h1>
// // // // // // // // //           <p className="mb-0 opacity-75" style={{ color: theme.textMuted }}>Real-time hospital performance and resource monitoring.</p>
// // // // // // // // //         </div>
// // // // // // // // //         <div className="bg-dark p-2 px-4 rounded-pill border border-secondary d-flex align-items-center gap-3">
// // // // // // // // //           <div className="rounded-circle bg-success" style={{width: '10px', height: '10px', boxShadow: '0 0 10px #10b981'}}></div>
// // // // // // // // //           <span className="small fw-bold">SYSTEM LIVE: NODE_01</span>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* KPI GRID */}
// // // // // // // // //       <div className="row g-4 mb-5">
// // // // // // // // //         {[
// // // // // // // // //           { label: "Total Doctors", value: stats.totalDoctors, icon: Stethoscope, color: theme.accent },
// // // // // // // // //           { label: "Registered Patients", value: stats.totalPatients, icon: Users, color: "#3b82f6" },
// // // // // // // // //           { label: "Live Queue", value: stats.activeQueue, icon: Activity, color: "#f59e0b" },
// // // // // // // // //           { label: "Avg Wait Time", value: stats.avgWaitTime, icon: Clock, color: "#ef4444" },
// // // // // // // // //         ].map((kpi, i) => (
// // // // // // // // //           <div key={i} className="col-12 col-md-6 col-xl-3">
// // // // // // // // //             <div className="p-4 h-100 shadow-sm border border-secondary transition-all" 
// // // // // // // // //               style={{ backgroundColor: theme.card, borderRadius: '24px' }}>
// // // // // // // // //               <div className="d-flex justify-content-between mb-3">
// // // // // // // // //                 <div className="p-2 rounded-3 bg-dark" style={{color: kpi.color}}><kpi.icon size={24}/></div>
// // // // // // // // //                 <div className="text-success small fw-bold d-flex align-items-center gap-1">
// // // // // // // // //                   <ArrowUpRight size={14} /> +2.4%
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <p className="small fw-bold text-uppercase opacity-50 mb-1">{kpi.label}</p>
// // // // // // // // //               <h2 className="fw-black m-0 display-6">{kpi.value}</h2>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         ))}
// // // // // // // // //       </div>

// // // // // // // // //       <div className="row g-4">
// // // // // // // // //         {/* CHART REPLACEMENT / CAPACITY MONITOR */}
// // // // // // // // //         <div className="col-xl-8">
// // // // // // // // //           <div className="p-4 p-md-5 h-100 shadow-lg" style={{ backgroundColor: theme.card, borderRadius: '35px', border: `1px solid ${theme.border}` }}>
// // // // // // // // //             <div className="d-flex justify-content-between align-items-center mb-5">
// // // // // // // // //               <h4 className="fw-bold m-0 d-flex align-items-center gap-2">
// // // // // // // // //                 <TrendingUp size={22} className="text-info" /> Performance Insights
// // // // // // // // //               </h4>
// // // // // // // // //               <button className="btn btn-sm btn-dark border-secondary px-3 rounded-pill text-white-50">View Details</button>
// // // // // // // // //             </div>
            
// // // // // // // // //             <div className="row g-4 align-items-center">
// // // // // // // // //               <div className="col-md-6">
// // // // // // // // //                 <div className="display-1 fw-black" style={{color: theme.accent}}>88%</div>
// // // // // // // // //                 <h5 className="fw-bold">Efficiency Rating</h5>
// // // // // // // // //                 <p className="small opacity-50">Based on patient check-in speed and doctor availability over the last 24 hours.</p>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="col-md-6 vstack gap-4">
// // // // // // // // //                 <CapacityBar label="Cardiology Dept" val={stats.activeQueue > 3 ? 90 : 45} color={theme.accent} />
// // // // // // // // //                 <CapacityBar label="Neurology Dept" val={65} color="#3b82f6" />
// // // // // // // // //                 <CapacityBar label="General Medicine" val={82} color="#f59e0b" />
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* RECENT SYSTEM LOGS */}
// // // // // // // // //         <div className="col-xl-4">
// // // // // // // // //           <div className="p-4 h-100 shadow-lg" style={{ backgroundColor: theme.card, borderRadius: '35px', border: `1px solid ${theme.border}` }}>
// // // // // // // // //             <h4 className="fw-bold mb-4">Recent Activity</h4>
// // // // // // // // //             <div className="vstack gap-4">
// // // // // // // // //               {recentActivity.length > 0 ? recentActivity.map((log, i) => (
// // // // // // // // //                 <div key={i} className="d-flex gap-3 align-items-start">
// // // // // // // // //                   <div className="p-2 rounded-3 bg-dark text-info"><Activity size={16}/></div>
// // // // // // // // //                   <div>
// // // // // // // // //                     <p className="small fw-bold mb-0">{log.text}</p>
// // // // // // // // //                     <span className="text-uppercase opacity-25 fw-bold" style={{fontSize: '0.6rem'}}>{log.time}</span>
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //               )) : (
// // // // // // // // //                 <div className="text-center py-5 opacity-25">
// // // // // // // // //                   <AlertCircle size={32} className="mb-2 mx-auto" />
// // // // // // // // //                   <p className="small">No recent activity detected.</p>
// // // // // // // // //                 </div>
// // // // // // // // //               )}
// // // // // // // // //             </div>
// // // // // // // // //             <button className="btn btn-outline-secondary w-100 mt-5 border-dashed py-3 rounded-4 fw-bold">SYSTEM AUDIT LOG</button>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // // HELPERS
// // // // // // // // // const CapacityBar = ({ label, val, color }) => (
// // // // // // // // //   <div>
// // // // // // // // //     <div className="d-flex justify-content-between mb-2 small fw-bold">
// // // // // // // // //       <span>{label}</span>
// // // // // // // // //       <span style={{ color }}>{val}%</span>
// // // // // // // // //     </div>
// // // // // // // // //     <div className="progress bg-dark" style={{ height: '6px', borderRadius: '10px' }}>
// // // // // // // // //       <div className="progress-bar" style={{ width: `${val}%`, backgroundColor: color, borderRadius: '10px' }}></div>
// // // // // // // // //     </div>
// // // // // // // // //   </div>
// // // // // // // // // );

// // // // // // // // // export default AdminDashboard;
// // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // import { 
// // // // // // // // // //   Users, 
// // // // // // // // // //   Stethoscope, 
// // // // // // // // // //   Activity, 
// // // // // // // // // //   Clock, 
// // // // // // // // // //   TrendingUp, 
// // // // // // // // // //   AlertCircle, 
// // // // // // // // // //   ArrowUpRight, 
// // // // // // // // // //   RefreshCcw
// // // // // // // // // // } from 'lucide-react';
// // // // // // // // // // import { useApp } from "../../context/AppContext"; // Ensure this path is correct

// // // // // // // // // // const AdminDashboard = () => {
// // // // // // // // // //   const { patients, completed, currentPatient } = useApp();
// // // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // // //   const theme = {
// // // // // // // // // //     bg: "#011a13",
// // // // // // // // // //     card: "#022c22",
// // // // // // // // // //     accent: "#10b981",
// // // // // // // // // //     border: "rgba(16, 185, 129, 0.15)",
// // // // // // // // // //     textMuted: "#6ee7b7"
// // // // // // // // // //   };

// // // // // // // // // //   // Calculate dynamic stats
// // // // // // // // // //   const totalRegistered = patients.length + completed.length + (currentPatient ? 1 : 0);
// // // // // // // // // //   const efficiencyRating = totalRegistered > 0 
// // // // // // // // // //     ? Math.round(((completed.length + (currentPatient ? 0.5 : 0)) / totalRegistered) * 100) 
// // // // // // // // // //     : 0;

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     // Simulate a brief loading state for "Syncing" effect
// // // // // // // // // //     const timer = setTimeout(() => setLoading(false), 800);
// // // // // // // // // //     return () => clearTimeout(timer);
// // // // // // // // // //   }, []);

// // // // // // // // // //   if (loading) return (
// // // // // // // // // //     <div className="vh-100 d-flex flex-column align-items-center justify-content-center" style={{backgroundColor: theme.bg, color: theme.accent}}>
// // // // // // // // // //       <RefreshCcw className="spinner-border border-0 mb-3" size={40} />
// // // // // // // // // //       <span className="fw-bold text-uppercase tracking-widest">Syncing Global Data...</span>
// // // // // // // // // //     </div>
// // // // // // // // // //   );

// // // // // // // // // //   return (
// // // // // // // // // //     <div style={{ backgroundColor: theme.bg, minHeight: '100vh', color: '#fff' }} className="p-4 p-lg-5">
      
// // // // // // // // // //       {/* HEADER */}
// // // // // // // // // //       <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 gap-4">
// // // // // // // // // //         <div>
// // // // // // // // // //           <h1 className="display-5 fw-black mb-1" style={{ letterSpacing: '-2px' }}>
// // // // // // // // // //             System <span style={{ color: theme.accent }}>Overview</span>
// // // // // // // // // //           </h1>
// // // // // // // // // //           <p className="mb-0 opacity-75" style={{ color: theme.textMuted }}>Real-time hospital performance and resource monitoring.</p>
// // // // // // // // // //         </div>
// // // // // // // // // //         <div className="bg-dark p-2 px-4 rounded-pill border border-secondary d-flex align-items-center gap-3">
// // // // // // // // // //           <div className="rounded-circle bg-success" style={{width: '10px', height: '10px', boxShadow: '0 0 10px #10b981', animation: 'pulse 2s infinite'}}></div>
// // // // // // // // // //           <span className="small fw-bold">DATABASE CONNECTED</span>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* KPI GRID */}
// // // // // // // // // //       <div className="row g-4 mb-5">
// // // // // // // // // //         {[
// // // // // // // // // //           { label: "Total Doctors", value: 5, icon: Stethoscope, color: theme.accent },
// // // // // // // // // //           { label: "Registered Patients", value: totalRegistered, icon: Users, color: "#3b82f6" },
// // // // // // // // // //           { label: "Live Queue", value: patients.length, icon: Activity, color: "#f59e0b" },
// // // // // // // // // //           { label: "Avg Wait Time", value: patients.length > 3 ? "22 mins" : "12 mins", icon: Clock, color: "#ef4444" },
// // // // // // // // // //         ].map((kpi, i) => (
// // // // // // // // // //           <div key={i} className="col-12 col-md-6 col-xl-3">
// // // // // // // // // //             <div className="p-4 h-100 shadow-sm border border-secondary" 
// // // // // // // // // //               style={{ backgroundColor: theme.card, borderRadius: '24px' }}>
// // // // // // // // // //               <div className="d-flex justify-content-between mb-3">
// // // // // // // // // //                 <div className="p-2 rounded-3 bg-dark" style={{color: kpi.color}}><kpi.icon size={24}/></div>
// // // // // // // // // //                 <div className="text-success small fw-bold d-flex align-items-center gap-1">
// // // // // // // // // //                   <ArrowUpRight size={14} /> Live
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //               <p className="small fw-bold text-uppercase opacity-50 mb-1">{kpi.label}</p>
// // // // // // // // // //               <h2 className="fw-black m-0 display-6">{kpi.value}</h2>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>

// // // // // // // // // //       <div className="row g-4">
// // // // // // // // // //         {/* CAPACITY & EFFICIENCY MONITOR */}
// // // // // // // // // //         <div className="col-xl-8">
// // // // // // // // // //           <div className="p-4 p-md-5 h-100 shadow-lg" style={{ backgroundColor: theme.card, borderRadius: '35px', border: `1px solid ${theme.border}` }}>
// // // // // // // // // //             <div className="d-flex justify-content-between align-items-center mb-5">
// // // // // // // // // //               <h4 className="fw-bold m-0 d-flex align-items-center gap-2">
// // // // // // // // // //                 <TrendingUp size={22} className="text-info" /> Operational Insights
// // // // // // // // // //               </h4>
// // // // // // // // // //             </div>
            
// // // // // // // // // //             <div className="row g-4 align-items-center">
// // // // // // // // // //               <div className="col-md-6 text-center text-md-start">
// // // // // // // // // //                 <div className="display-1 fw-black" style={{color: theme.accent}}>{efficiencyRating}%</div>
// // // // // // // // // //                 <h5 className="fw-bold">Efficiency Rating</h5>
// // // // // // // // // //                 <p className="small opacity-50">Calculated by (Completed Visits / Total Registrations). Mark patients as complete to see this rise!</p>
// // // // // // // // // //               </div>
// // // // // // // // // //               <div className="col-md-6 vstack gap-4">
// // // // // // // // // //                 <CapacityBar label="Queue Load" val={patients.length > 5 ? 90 : patients.length * 15} color={theme.accent} />
// // // // // // // // // //                 <CapacityBar label="Resource Allocation" val={75} color="#3b82f6" />
// // // // // // // // // //                 <CapacityBar label="Server Health" val={98} color="#f59e0b" />
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* RECENT ACTIVITY LOGS */}
// // // // // // // // // //         <div className="col-xl-4">
// // // // // // // // // //           <div className="p-4 h-100 shadow-lg" style={{ backgroundColor: theme.card, borderRadius: '35px', border: `1px solid ${theme.border}` }}>
// // // // // // // // // //             <h4 className="fw-bold mb-4">Live Activity</h4>
// // // // // // // // // //             <div className="vstack gap-4">
// // // // // // // // // //               {patients.length > 0 || currentPatient ? (
// // // // // // // // // //                 <>
// // // // // // // // // //                   {currentPatient && (
// // // // // // // // // //                     <div className="d-flex gap-3 align-items-start p-2 rounded-3" style={{backgroundColor: 'rgba(16, 185, 129, 0.1)'}}>
// // // // // // // // // //                       <div className="p-2 rounded-3 bg-dark text-warning"><Activity size={16}/></div>
// // // // // // // // // //                       <div>
// // // // // // // // // //                         <p className="small fw-bold mb-0">IN CONSULTATION: {currentPatient.name}</p>
// // // // // // // // // //                         <span className="text-uppercase opacity-50 fw-bold" style={{fontSize: '0.6rem'}}>Token: {currentPatient.token}</span>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   )}
// // // // // // // // // //                   {patients.slice(0, 3).map((p, i) => (
// // // // // // // // // //                     <div key={i} className="d-flex gap-3 align-items-start">
// // // // // // // // // //                       <div className="p-2 rounded-3 bg-dark text-info"><RefreshCcw size={16}/></div>
// // // // // // // // // //                       <div>
// // // // // // // // // //                         <p className="small fw-bold mb-0">{p.name} joined queue</p>
// // // // // // // // // //                         <span className="text-uppercase opacity-25 fw-bold" style={{fontSize: '0.6rem'}}>{p.time}</span>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </>
// // // // // // // // // //               ) : (
// // // // // // // // // //                 <div className="text-center py-5 opacity-25">
// // // // // // // // // //                   <AlertCircle size={32} className="mb-2 mx-auto" />
// // // // // // // // // //                   <p className="small">Waiting for patient data...</p>
// // // // // // // // // //                 </div>
// // // // // // // // // //               )}
// // // // // // // // // //             </div>
// // // // // // // // // //             <button className="btn btn-outline-secondary w-100 mt-5 border-dashed py-3 rounded-4 fw-bold">DOWNLOAD FULL REPORT</button>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // // HELPER COMPONENT
// // // // // // // // // // const CapacityBar = ({ label, val, color }) => (
// // // // // // // // // //   <div>
// // // // // // // // // //     <div className="d-flex justify-content-between mb-2 small fw-bold">
// // // // // // // // // //       <span>{label}</span>
// // // // // // // // // //       <span style={{ color }}>{val}%</span>
// // // // // // // // // //     </div>
// // // // // // // // // //     <div className="progress bg-dark" style={{ height: '6px', borderRadius: '10px' }}>
// // // // // // // // // //       <div className="progress-bar progress-bar-animated progress-bar-striped" 
// // // // // // // // // //            style={{ width: `${val}%`, backgroundColor: color, borderRadius: '10px' }}></div>
// // // // // // // // // //     </div>
// // // // // // // // // //   </div>
// // // // // // // // // // );

// // // // // // // // // // export default AdminDashboard;
// // // // // // // // import React from 'react';
// // // // // // // // import { useApp } from "../../context/AppContext"; // Import your live data
// // // // // // // // import { 
// // // // // // // //   Users, Stethoscope, Activity, Clock, TrendingUp, 
// // // // // // // //   AlertCircle, ArrowUpRight, BarChart3, ShieldCheck, Zap 
// // // // // // // // } from 'lucide-react';

// // // // // // // // const AdminDashboard = () => {
// // // // // // // //   // Use the global context to get LIVE data from MySQL
// // // // // // // //   const { patients, completed, currentPatient } = useApp();

// // // // // // // //   const theme = {
// // // // // // // //     bg: "#f8fafc",      // Soft Slate Blue-Grey
// // // // // // // //     card: "#ffffff",    // Pure White
// // // // // // // //     accent: "#4f46e5",  // Indigo
// // // // // // // //     textMain: "#1e293b",
// // // // // // // //     textMuted: "#64748b",
// // // // // // // //     border: "#e2e8f0"
// // // // // // // //   };

// // // // // // // //   // Calculations based on live data
// // // // // // // //   const totalRegistered = patients.length + completed.length + (currentPatient ? 1 : 0);
// // // // // // // //   const activeQueueCount = patients.length;

// // // // // // // // return (
// // // // // // // //     <div style={{ 
// // // // // // // //       backgroundColor: theme.bg, 
// // // // // // // //       minHeight: '100vh', 
// // // // // // // //       width: '100%',
// // // // // // // //       color: theme.textMain,
// // // // // // // //       // CRITICAL FOR MOBILE SCROLL:
// // // // // // // //       position: 'relative',
// // // // // // // //       overflowX: 'hidden',
// // // // // // // //       overflowY: 'auto', 
// // // // // // // //       WebkitOverflowScrolling: 'touch' // Smooth scroll for iOS
// // // // // // // //     }} className="p-3 p-md-5">
      
// // // // // // // //       {/* WRAPPER: We use a container to ensure content doesn't touch the edges 
// // // // // // // //           and handles the flexible width.
// // // // // // // //       */}
// // // // // // // //       <div className="container-fluid" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
// // // // // // // //         {/* HEADER SECTION */}
// // // // // // // //         <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 mb-md-5 gap-3">
// // // // // // // //           <div>
// // // // // // // //             <h1 className="fw-bold tracking-tight mb-1" style={{ fontSize: 'calc(1.5rem + 1vw)' }}>
// // // // // // // //               Hospital <span style={{ color: theme.accent }}>Analytics</span>
// // // // // // // //             </h1>
// // // // // // // //             <p className="small" style={{ color: theme.textMuted }}>Live monitoring of clinical operations.</p>
// // // // // // // //           </div>
          
// // // // // // // //           {/* Status Badge - Hidden on very small phones to save space */}
// // // // // // // //           <div className="d-inline-flex">
// // // // // // // //             <div className="badge bg-white text-dark border p-2 px-3 shadow-sm rounded-pill d-flex align-items-center gap-2">
// // // // // // // //               <div className="rounded-circle bg-success" style={{width: '8px', height: '8px', animation: 'pulse 2s infinite'}}></div>
// // // // // // // //               <span style={{ fontSize: '10px', fontWeight: 'bold' }}>SYSTEM LIVE</span>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* KPI GRID - row-cols-1 ensures 1 column on mobile, row-cols-md-2 for tablets, etc. */}
// // // // // // // //         <div className="row g-3 g-md-4 mb-4 mb-md-5">
// // // // // // // //           {[
// // // // // // // //             { label: "Total Doctors", value: "12", icon: Stethoscope, color: "#4f46e5" },
// // // // // // // //             { label: "Total Patients", value: totalRegistered, icon: Users, color: "#0ea5e9" },
// // // // // // // //             { label: "Active Queue", value: activeQueueCount, icon: Activity, color: "#f59e0b" },
// // // // // // // //             { label: "Wait Time", value: activeQueueCount > 5 ? "25m" : "12m", icon: Clock, color: "#10b981" },
// // // // // // // //           ].map((kpi, i) => (
// // // // // // // //             <div key={i} className="col-12 col-sm-6 col-xl-3">
// // // // // // // //               <div className="p-3 p-md-4 shadow-sm h-100" 
// // // // // // // //                 style={{ backgroundColor: theme.card, borderRadius: '16px', border: `1px solid ${theme.border}` }}>
// // // // // // // //                 <div className="d-flex align-items-center gap-3 mb-2">
// // // // // // // //                   <div className="p-2 rounded-lg" style={{backgroundColor: `${kpi.color}10`, color: kpi.color}}>
// // // // // // // //                     <kpi.icon size={20}/>
// // // // // // // //                   </div>
// // // // // // // //                   <span className="small fw-bold text-uppercase opacity-75" style={{ fontSize: '10px' }}>
// // // // // // // //                     {kpi.label}
// // // // // // // //                   </span>
// // // // // // // //                 </div>
// // // // // // // //                 <h2 className="fw-bold m-0">{kpi.value}</h2>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>

// // // // // // // //         <div className="row g-4">
// // // // // // // //           {/* PERFORMANCE BOX */}
// // // // // // // //           <div className="col-xl-8">
// // // // // // // //             <div className="p-4 shadow-sm h-100" style={{ backgroundColor: theme.card, borderRadius: '20px', border: `1px solid ${theme.border}` }}>
// // // // // // // //               <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
// // // // // // // //                 <BarChart3 size={20} className="text-primary" /> Load Factor
// // // // // // // //               </h5>
              
// // // // // // // //               <div className="row g-4 align-items-center">
// // // // // // // //                 <div className="col-md-5 text-center text-md-start">
// // // // // // // //                   <div className="display-4 fw-bold" style={{color: theme.accent}}>
// // // // // // // //                     {activeQueueCount > 10 ? "82%" : "94%"}
// // // // // // // //                   </div>
// // // // // // // //                   <p className="small text-muted mb-4">Operational efficiency rating</p>
// // // // // // // //                 </div>
// // // // // // // //                 <div className="col-md-7 vstack gap-3">
// // // // // // // //                   <CapacityBar label="Cardiology" val={activeQueueCount * 12} color="#4f46e5" />
// // // // // // // //                   <CapacityBar label="Emergency" val={70} color="#ef4444" />
// // // // // // // //                   <CapacityBar label="General" val={55} color="#10b981" />
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* TRAFFIC BOX */}
// // // // // // // //           <div className="col-xl-4">
// // // // // // // //             <div className="p-4 shadow-sm" style={{ backgroundColor: theme.card, borderRadius: '20px', border: `1px solid ${theme.border}` }}>
// // // // // // // //               <h5 className="fw-bold mb-4 text-center text-xl-start">Live Traffic</h5>
// // // // // // // //               <div className="vstack gap-2">
// // // // // // // //                 {patients.length > 0 ? patients.slice(0, 4).map((p, i) => (
// // // // // // // //                   <div key={i} className="d-flex gap-3 align-items-center p-2 rounded-3 border-bottom border-light">
// // // // // // // //                     <div className="bg-light p-2 rounded-circle d-none d-sm-block"><Zap size={12} className="text-warning" /></div>
// // // // // // // //                     <div className="flex-grow-1">
// // // // // // // //                       <p className="small fw-bold mb-0">{p.name}</p>
// // // // // // // //                       <span className="text-muted" style={{fontSize: '0.7rem'}}>Token {p.token}</span>
// // // // // // // //                     </div>
// // // // // // // //                     <div className="badge bg-light text-dark small">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
// // // // // // // //                   </div>
// // // // // // // //                 )) : (
// // // // // // // //                   <div className="text-center py-4 opacity-50 small">No active patients.</div>
// // // // // // // //                 )}
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
      
// // // // // // // //       {/* PADDING FOR BOTTOM NAVBAR (If you have one) */}
// // // // // // // //       <div style={{ height: '80px' }}></div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // // export default AdminDashboard;
// // // // // // // import React from 'react';
// // // // // // // import { useApp } from "../../context/AppContext"; 
// // // // // // // import { 
// // // // // // //   Users, Stethoscope, Activity, Clock, TrendingUp, 
// // // // // // //   AlertCircle, ArrowUpRight, BarChart3, ShieldCheck, Zap 
// // // // // // // } from 'lucide-react';

// // // // // // // // --- 1. HELPER COMPONENT (Defined outside to avoid SyntaxErrors) ---
// // // // // // // const CapacityBar = ({ label, val, color }) => (
// // // // // // //   <div className="mb-3">
// // // // // // //     <div className="d-flex justify-content-between mb-1 small fw-bold">
// // // // // // //       <span style={{ fontSize: '12px' }}>{label}</span>
// // // // // // //       <span style={{ color, fontSize: '12px' }}>{val}%</span>
// // // // // // //     </div>
// // // // // // //     <div className="progress" style={{ height: '6px', backgroundColor: '#f1f5f9', borderRadius: '10px' }}>
// // // // // // //       <div className="progress-bar" style={{ 
// // // // // // //         width: `${val > 100 ? 100 : val}%`, 
// // // // // // //         backgroundColor: color, 
// // // // // // //         borderRadius: '10px',
// // // // // // //         transition: 'width 0.5s ease'
// // // // // // //       }}></div>
// // // // // // //     </div>
// // // // // // //   </div>
// // // // // // // );

// // // // // // // // --- 2. MAIN DASHBOARD COMPONENT ---
// // // // // // // const AdminDashboard = () => {
// // // // // // //   const { patients, completed, currentPatient } = useApp();

// // // // // // //   const theme = {
// // // // // // //     bg: "#f8fafc",      // Soft Slate Blue-Grey
// // // // // // //     card: "#ffffff",    // Pure White
// // // // // // //     accent: "#4f46e5",  // Indigo
// // // // // // //     textMain: "#1e293b",
// // // // // // //     textMuted: "#64748b",
// // // // // // //     border: "#e2e8f0"
// // // // // // //   };

// // // // // // //   const totalRegistered = (patients?.length || 0) + (completed?.length || 0) + (currentPatient ? 1 : 0);
// // // // // // //   const activeQueueCount = patients?.length || 0;

// // // // // // //   return (
// // // // // // //     <div style={{ 
// // // // // // //       backgroundColor: theme.bg, 
// // // // // // //       minHeight: '100vh', 
// // // // // // //       width: '100%',
// // // // // // //       color: theme.textMain,
// // // // // // //       // MOBILE SCROLL FIXES:
// // // // // // //       position: 'fixed', // Helps break out of parent "overflow:hidden"
// // // // // // //       top: 0,
// // // // // // //       left: 0,
// // // // // // //       right: 0,
// // // // // // //       bottom: 0,
// // // // // // //       overflowX: 'hidden',
// // // // // // //       overflowY: 'scroll', // Forced scroll
// // // // // // //       WebkitOverflowScrolling: 'touch',
// // // // // // //       zIndex: 1
// // // // // // //     }} className="p-3 p-md-5">
      
// // // // // // //       <div className="container-fluid" style={{ maxWidth: '1400px', margin: '0 auto', paddingBottom: '100px' }}>
        
// // // // // // //         {/* HEADER SECTION */}
// // // // // // //         <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 mb-md-5 gap-3">
// // // // // // //           <div>
// // // // // // //             <h1 className="fw-bold tracking-tight mb-1" style={{ fontSize: 'calc(1.4rem + 1vw)', letterSpacing: '-1px' }}>
// // // // // // //               Hospital <span style={{ color: theme.accent }}>Analytics</span>
// // // // // // //             </h1>
// // // // // // //             <p className="small m-0" style={{ color: theme.textMuted }}>Live monitoring of clinical operations.</p>
// // // // // // //           </div>
          
// // // // // // //           <div className="d-inline-flex">
// // // // // // //             <div className="badge bg-white text-dark border p-2 px-3 shadow-sm rounded-pill d-flex align-items-center gap-2">
// // // // // // //               <div className="rounded-circle bg-success" style={{width: '8px', height: '8px', boxShadow: '0 0 5px rgba(25, 135, 84, 0.5)'}}></div>
// // // // // // //               <span style={{ fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.5px' }}>SYSTEM LIVE</span>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* KPI GRID */}
// // // // // // //         <div className="row g-3 g-md-4 mb-4 mb-md-5">
// // // // // // //           {[
// // // // // // //             { label: "Total Doctors", value: "12", icon: Stethoscope, color: "#4f46e5" },
// // // // // // //             { label: "Total Patients", value: totalRegistered, icon: Users, color: "#0ea5e9" },
// // // // // // //             { label: "Active Queue", value: activeQueueCount, icon: Activity, color: "#f59e0b" },
// // // // // // //             { label: "Wait Time", value: activeQueueCount > 5 ? "25m" : "12m", icon: Clock, color: "#10b981" },
// // // // // // //           ].map((kpi, i) => (
// // // // // // //             <div key={i} className="col-12 col-sm-6 col-xl-3">
// // // // // // //               <div className="p-3 p-md-4 shadow-sm h-100" 
// // // // // // //                 style={{ backgroundColor: theme.card, borderRadius: '16px', border: `1px solid ${theme.border}` }}>
// // // // // // //                 <div className="d-flex align-items-center gap-3 mb-2">
// // // // // // //                   <div className="p-2 rounded-lg" style={{backgroundColor: `${kpi.color}10`, color: kpi.color}}>
// // // // // // //                     <kpi.icon size={20}/>
// // // // // // //                   </div>
// // // // // // //                   <span className="small fw-bold text-uppercase opacity-75" style={{ fontSize: '10px' }}>
// // // // // // //                     {kpi.label}
// // // // // // //                   </span>
// // // // // // //                 </div>
// // // // // // //                 <h2 className="fw-bold m-0" style={{ fontSize: '1.75rem' }}>{kpi.value}</h2>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //         <div className="row g-4">
// // // // // // //           {/* PERFORMANCE BOX */}
// // // // // // //           <div className="col-xl-8">
// // // // // // //             <div className="p-4 shadow-sm h-100" style={{ backgroundColor: theme.card, borderRadius: '20px', border: `1px solid ${theme.border}` }}>
// // // // // // //               <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
// // // // // // //                 <BarChart3 size={20} className="text-primary" /> Load Factor
// // // // // // //               </h5>
              
// // // // // // //               <div className="row g-4 align-items-center">
// // // // // // //                 <div className="col-md-5 text-center text-md-start">
// // // // // // //                   <div className="display-4 fw-bold" style={{color: theme.accent}}>
// // // // // // //                     {activeQueueCount > 10 ? "82%" : "94%"}
// // // // // // //                   </div>
// // // // // // //                   <p className="small text-muted mb-4">Operational efficiency rating</p>
// // // // // // //                 </div>
// // // // // // //                 <div className="col-md-7 vstack gap-1">
// // // // // // //                   <CapacityBar label="Cardiology" val={Math.min(activeQueueCount * 12, 100)} color="#4f46e5" />
// // // // // // //                   <CapacityBar label="Emergency" val={70} color="#ef4444" />
// // // // // // //                   <CapacityBar label="General OPD" val={55} color="#10b981" />
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* TRAFFIC BOX */}
// // // // // // //           <div className="col-xl-4">
// // // // // // //             <div className="p-4 shadow-sm" style={{ backgroundColor: theme.card, borderRadius: '20px', border: `1px solid ${theme.border}` }}>
// // // // // // //               <h5 className="fw-bold mb-4 text-center text-xl-start">Live Traffic</h5>
// // // // // // //               <div className="vstack gap-2">
// // // // // // //                 {patients && patients.length > 0 ? patients.slice(0, 4).map((p, i) => (
// // // // // // //                   <div key={i} className="d-flex gap-3 align-items-center p-2 rounded-3 border-bottom border-light">
// // // // // // //                     <div className="bg-light p-2 rounded-circle d-none d-sm-block"><Zap size={12} className="text-warning" /></div>
// // // // // // //                     <div className="flex-grow-1">
// // // // // // //                       <p className="small fw-bold mb-0 text-truncate" style={{maxWidth: '120px'}}>{p.name}</p>
// // // // // // //                       <span className="text-muted" style={{fontSize: '0.7rem'}}>Token {p.token}</span>
// // // // // // //                     </div>
// // // // // // //                     <div className="badge bg-light text-dark small font-monospace">
// // // // // // //                       {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 )) : (
// // // // // // //                   <div className="text-center py-4 opacity-50 small">
// // // // // // //                     <AlertCircle size={24} className="mb-2 mx-auto d-block" />
// // // // // // //                     No active patients.
// // // // // // //                   </div>
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default AdminDashboard;
// // // // // // import React, { useState } from 'react';
// // // // // // import { useApp } from "../../context/AppContext"; 
// // // // // // import { 
// // // // // //   Users, Stethoscope, Activity, Clock, BarChart3, 
// // // // // //   Zap, LayoutDashboard, Settings, LogOut, Menu, X, Shield
// // // // // // } from 'lucide-react';

// // // // // // // --- HELPER: CAPACITY BAR ---
// // // // // // const CapacityBar = ({ label, val, color }) => (
// // // // // //   <div className="mb-3">
// // // // // //     <div className="d-flex justify-content-between mb-1 small fw-bold">
// // // // // //       <span style={{ fontSize: '12px', color: '#64748b' }}>{label}</span>
// // // // // //       <span style={{ color, fontSize: '12px' }}>{val}%</span>
// // // // // //     </div>
// // // // // //     <div className="progress" style={{ height: '6px', backgroundColor: '#f1f5f9', borderRadius: '10px' }}>
// // // // // //       <div className="progress-bar" style={{ 
// // // // // //         width: `${val}%`, 
// // // // // //         backgroundColor: color, 
// // // // // //         borderRadius: '10px',
// // // // // //         transition: 'width 0.5s ease'
// // // // // //       }}></div>
// // // // // //     </div>
// // // // // //   </div>
// // // // // // );

// // // // // // const AdminDashboard = () => {
// // // // // //   const { patients, completed, currentPatient } = useApp();
// // // // // //   const [isSidebarOpen, setSidebarOpen] = useState(false);

// // // // // //   const theme = {
// // // // // //     bg: "#f8fafc",
// // // // // //     sidebar: "#1e293b",
// // // // // //     card: "#ffffff",
// // // // // //     accent: "#4f46e5",
// // // // // //     border: "#e2e8f0"
// // // // // //   };

// // // // // //   const totalRegistered = (patients?.length || 0) + (completed?.length || 0) + (currentPatient ? 1 : 0);
// // // // // //   const activeQueueCount = patients?.length || 0;

// // // // // //   return (
// // // // // //     <div style={{ backgroundColor: theme.bg, minHeight: '100vh', display: 'flex' }}>
      
// // // // // //       {/* --- SIDEBAR --- */}
// // // // // //       <div style={{
// // // // // //         width: '260px',
// // // // // //         backgroundColor: theme.sidebar,
// // // // // //         color: 'white',
// // // // // //         height: '100vh',
// // // // // //         position: 'fixed',
// // // // // //         left: 0,
// // // // // //         top: 0,
// // // // // //         zIndex: 1000,
// // // // // //         transition: 'transform 0.3s ease',
// // // // // //         transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
// // // // // //       }} className="d-md-block shadow-lg">
// // // // // //         <style>{`
// // // // // //           @media (min-width: 768px) { .d-md-block { transform: translateX(0) !important; } }
// // // // // //         `}</style>
        
// // // // // //         <div className="p-4">
// // // // // //           <div className="d-flex align-items-center gap-2 mb-5">
// // // // // //             <div className="p-2 bg-primary rounded-3"><Shield size={20}/></div>
// // // // // //             <h5 className="fw-bold m-0">HMS PRO</h5>
// // // // // //           </div>

// // // // // //           <div className="vstack gap-3">
// // // // // //             <SidebarItem icon={<LayoutDashboard size={18}/>} label="Dashboard" active />
// // // // // //             <SidebarItem icon={<Users size={18}/>} label="Patients" />
// // // // // //             <SidebarItem icon={<Stethoscope size={18}/>} label="Doctors" />
// // // // // //             <SidebarItem icon={<Settings size={18}/>} label="Settings" />
// // // // // //             <div className="mt-5 pt-5 border-top border-secondary">
// // // // // //                <SidebarItem icon={<LogOut size={18}/>} label="Logout" color="#f87171" />
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* --- MAIN CONTENT --- */}
// // // // // //       <div style={{ 
// // // // // //         flex: 1, 
// // // // // //         marginLeft: '0px', // Adjusted by CSS for desktop
// // // // // //         paddingLeft: '0px',
// // // // // //         overflowY: 'auto',
// // // // // //         height: '100vh'
// // // // // //       }} className="main-content-wrapper">
// // // // // //         <style>{`
// // // // // //           @media (min-width: 768px) { .main-content-wrapper { margin-left: 260px; } }
// // // // // //         `}</style>

// // // // // //         {/* TOP NAV (MOBILE ONLY) */}
// // // // // //         <div className="d-md-none bg-white p-3 border-bottom d-flex justify-content-between align-items-center sticky-top">
// // // // // //           <h6 className="fw-bold m-0 text-primary">HMS PRO</h6>
// // // // // //           <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="btn p-0 text-dark">
// // // // // //             {isSidebarOpen ? <X size={24}/> : <Menu size={24}/>}
// // // // // //           </button>
// // // // // //         </div>

// // // // // //         <div className="p-4 p-md-5">
// // // // // //           {/* HEADER */}
// // // // // //           <div className="mb-5">
// // // // // //             <h1 className="fw-bold tracking-tight text-slate-900" style={{ fontSize: '1.8rem' }}>
// // // // // //               System <span style={{ color: theme.accent }}>Analytics</span>
// // // // // //             </h1>
// // // // // //             <p className="text-muted small">Hospital performance monitoring and live traffic.</p>
// // // // // //           </div>

// // // // // //           {/* KPI GRID */}
// // // // // //           <div className="row g-4 mb-5">
// // // // // //             <KPICard label="Active Queue" value={activeQueueCount} icon={<Activity/>} color="#f59e0b" />
// // // // // //             <KPICard label="Total Patients" value={totalRegistered} icon={<Users/>} color="#4f46e5" />
// // // // // //             <KPICard label="Wait Time" value={activeQueueCount > 5 ? "24m" : "12m"} icon={<Clock/>} color="#10b981" />
// // // // // //             <KPICard label="Efficiency" value="92%" icon={<Zap/>} color="#ef4444" />
// // // // // //           </div>

// // // // // //           {/* DATA SECTION */}
// // // // // //           <div className="row g-4">
// // // // // //             <div className="col-xl-8">
// // // // // //               <div className="p-4 shadow-sm h-100" style={{ backgroundColor: theme.card, borderRadius: '20px', border: `1px solid ${theme.border}` }}>
// // // // // //                 <h6 className="fw-bold mb-4 text-uppercase tracking-wider opacity-75">Load Factor by Dept</h6>
// // // // // //                 <div className="row g-4 align-items-center">
// // // // // //                   <div className="col-md-4 text-center text-md-start">
// // // // // //                     <div className="display-4 fw-bold" style={{color: theme.accent}}>{activeQueueCount > 8 ? "High" : "Optimal"}</div>
// // // // // //                     <p className="small text-muted">System Throughput</p>
// // // // // //                   </div>
// // // // // //                   <div className="col-md-8">
// // // // // //                     <CapacityBar label="Cardiology" val={activeQueueCount * 12} color="#4f46e5" />
// // // // // //                     <CapacityBar label="Emergency" val={80} color="#ef4444" />
// // // // // //                     <CapacityBar label="General OPD" val={55} color="#10b981" />
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             <div className="col-xl-4">
// // // // // //               <div className="p-4 shadow-sm" style={{ backgroundColor: theme.card, borderRadius: '20px', border: `1px solid ${theme.border}` }}>
// // // // // //                 <h6 className="fw-bold mb-4 text-uppercase tracking-wider opacity-75">Live Patient Traffic</h6>
// // // // // //                 <div className="vstack gap-3">
// // // // // //                   {patients?.slice(0, 5).map((p, i) => (
// // // // // //                     <div key={i} className="d-flex justify-content-between align-items-center p-2 rounded-3 bg-light-subtle border-bottom">
// // // // // //                       <div>
// // // // // //                         <p className="small fw-bold mb-0">{p.name}</p>
// // // // // //                         <span style={{fontSize: '10px'}} className="text-muted">Token {p.token}</span>
// // // // // //                       </div>
// // // // // //                       <div className="badge bg-white text-dark border fw-normal" style={{fontSize: '10px'}}>NOW</div>
// // // // // //                     </div>
// // // // // //                   ))}
// // // // // //                   {(!patients || patients.length === 0) && <p className="text-center small text-muted py-3">No live traffic.</p>}
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // // --- SUB-COMPONENTS ---
// // // // // // const SidebarItem = ({ icon, label, active, color }) => (
// // // // // //   <div className="d-flex align-items-center gap-3 p-2 px-3 rounded-3 transition-all" 
// // // // // //        style={{ 
// // // // // //          backgroundColor: active ? 'rgba(79, 70, 229, 0.15)' : 'transparent',
// // // // // //          color: color || (active ? '#818cf8' : '#94a3b8'),
// // // // // //          cursor: 'pointer',
// // // // // //          fontSize: '14px',
// // // // // //          fontWeight: active ? '600' : '400'
// // // // // //        }}>
// // // // // //     {icon} {label}
// // // // // //   </div>
// // // // // // );

// // // // // // const KPICard = ({ label, value, icon, color }) => (
// // // // // //   <div className="col-12 col-sm-6 col-xl-3">
// // // // // //     <div className="p-4 shadow-sm border-0 h-100" style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
// // // // // //       <div className="d-flex align-items-center gap-3 mb-2">
// // // // // //         <div className="p-2 rounded-3" style={{backgroundColor: `${color}10`, color: color}}>{icon}</div>
// // // // // //         <span className="small fw-bold text-uppercase opacity-50" style={{ fontSize: '10px' }}>{label}</span>
// // // // // //       </div>
// // // // // //       <h3 className="fw-bold m-0">{value}</h3>
// // // // // //     </div>
// // // // // //   </div>
// // // // // // );

// // // // // // export default AdminDashboard;
// // // // // import React from 'react';
// // // // // import { useApp } from "../../context/AppContext"; 
// // // // // import { 
// // // // //   Users, Activity, Clock, BarChart3, 
// // // // //   Zap, Stethoscope
// // // // // } from 'lucide-react';

// // // // // // --- HELPER: CAPACITY BAR ---
// // // // // const CapacityBar = ({ label, val, color }) => (
// // // // //   <div className="mb-3">
// // // // //     <div className="d-flex justify-content-between mb-1 small fw-bold">
// // // // //       <span style={{ fontSize: '12px', color: '#64748b' }}>{label}</span>
// // // // //       <span style={{ color, fontSize: '12px' }}>{val}%</span>
// // // // //     </div>
// // // // //     <div className="progress" style={{ height: '6px', backgroundColor: '#f1f5f9', borderRadius: '10px' }}>
// // // // //       <div className="progress-bar" style={{ 
// // // // //         width: `${val}%`, 
// // // // //         backgroundColor: color, 
// // // // //         borderRadius: '10px',
// // // // //         transition: 'width 0.5s ease'
// // // // //       }}></div>
// // // // //     </div>
// // // // //   </div>
// // // // // );

// // // // // const AdminDashboard = () => {
// // // // //   const { patients, completed, currentPatient } = useApp();

// // // // //   const theme = {
// // // // //     bg: "#f8fafc",
// // // // //     card: "#ffffff",
// // // // //     accent: "#4f46e5",
// // // // //     border: "#e2e8f0"
// // // // //   };

// // // // //   const totalRegistered = (patients?.length || 0) + (completed?.length || 0) + (currentPatient ? 1 : 0);
// // // // //   const activeQueueCount = patients?.length || 0;

// // // // //   return (
// // // // //     <div style={{ 
// // // // //       backgroundColor: theme.bg, 
// // // // //       minHeight: '100vh', 
// // // // //       width: '100%',
// // // // //       // This margin-left ensures we don't overlap your existing sidebar
// // // // //       marginLeft: 'var(--sidebar-width, 260px)', 
// // // // //       overflowX: 'hidden'
// // // // //     }} className="admin-main-content">
      
// // // // //       {/* MOBILE OVERRIDE: If screen is small, remove margin so it fills the screen */}
// // // // //       <style>{`
// // // // //         @media (max-width: 768px) {
// // // // //           .admin-main-content { margin-left: 0 !important; }
// // // // //         }
// // // // //       `}</style>

// // // // //       <div className="p-3 p-md-5">
// // // // //         {/* HEADER */}
// // // // //         <div className="mb-5 d-flex justify-content-between align-items-center">
// // // // //           <div>
// // // // //             <h1 className="fw-bold tracking-tight" style={{ fontSize: '1.8rem', color: '#1e293b' }}>
// // // // //               System <span style={{ color: theme.accent }}>Analytics</span>
// // // // //             </h1>
// // // // //             <p className="text-muted small m-0">Live hospital performance monitoring.</p>
// // // // //           </div>
// // // // //           <div className="badge bg-white text-dark border p-2 px-3 shadow-sm rounded-pill d-none d-md-flex align-items-center gap-2">
// // // // //               <div className="rounded-circle bg-success" style={{width: '8px', height: '8px'}}></div>
// // // // //               <span className="small fw-bold">SERVER ONLINE</span>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* KPI GRID */}
// // // // //         <div className="row g-3 g-md-4 mb-5">
// // // // //           <KPICard label="Active Queue" value={activeQueueCount} icon={<Activity/>} color="#f59e0b" />
// // // // //           <KPICard label="Total Patients" value={totalRegistered} icon={<Users/>} color="#4f46e5" />
// // // // //           <KPICard label="Wait Time" value={activeQueueCount > 5 ? "24m" : "12m"} icon={<Clock/>} color="#10b981" />
// // // // //           <KPICard label="Doctors Active" value="12" icon={<Stethoscope/>} color="#6366f1" />
// // // // //         </div>

// // // // //         {/* DATA SECTION */}
// // // // //         <div className="row g-4">
// // // // //           <div className="col-xl-8">
// // // // //             <div className="p-4 shadow-sm h-100" style={{ backgroundColor: theme.card, borderRadius: '20px', border: `1px solid ${theme.border}` }}>
// // // // //               <h6 className="fw-bold mb-4 text-uppercase tracking-wider opacity-75">Load Factor by Dept</h6>
// // // // //               <div className="row g-4 align-items-center">
// // // // //                 <div className="col-md-4 text-center text-md-start">
// // // // //                   <div className="display-4 fw-bold" style={{color: theme.accent}}>{activeQueueCount > 8 ? "High" : "Optimal"}</div>
// // // // //                   <p className="small text-muted">System Throughput</p>
// // // // //                 </div>
// // // // //                 <div className="col-md-8">
// // // // //                   <CapacityBar label="Cardiology" val={Math.min(activeQueueCount * 12, 100)} color="#4f46e5" />
// // // // //                   <CapacityBar label="Emergency" val={80} color="#ef4444" />
// // // // //                   <CapacityBar label="General OPD" val={55} color="#10b981" />
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="col-xl-4">
// // // // //             <div className="p-4 shadow-sm h-100" style={{ backgroundColor: theme.card, borderRadius: '20px', border: `1px solid ${theme.border}` }}>
// // // // //               <h6 className="fw-bold mb-4 text-uppercase tracking-wider opacity-75">Live Traffic</h6>
// // // // //               <div className="vstack gap-3">
// // // // //                 {patients?.slice(0, 5).map((p, i) => (
// // // // //                   <div key={i} className="d-flex justify-content-between align-items-center p-2 rounded-3 border-bottom border-light">
// // // // //                     <div>
// // // // //                       <p className="small fw-bold mb-0 text-truncate" style={{maxWidth: '120px'}}>{p.name}</p>
// // // // //                       <span style={{fontSize: '10px'}} className="text-muted text-uppercase">Token {p.token}</span>
// // // // //                     </div>
// // // // //                     <Zap size={14} className="text-warning" />
// // // // //                   </div>
// // // // //                 ))}
// // // // //                 {(!patients || patients.length === 0) && <p className="text-center small text-muted py-3">No live traffic.</p>}
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // // --- SUB-COMPONENT ---
// // // // // const KPICard = ({ label, value, icon, color }) => (
// // // // //   <div className="col-12 col-sm-6 col-xl-3">
// // // // //     <div className="p-4 shadow-sm border-0 h-100" style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
// // // // //       <div className="d-flex align-items-center gap-3 mb-2">
// // // // //         <div className="p-2 rounded-3" style={{backgroundColor: `${color}10`, color: color}}>{icon}</div>
// // // // //         <span className="small fw-bold text-uppercase opacity-50" style={{ fontSize: '10px' }}>{label}</span>
// // // // //       </div>
// // // // //       <h3 className="fw-bold m-0">{value}</h3>
// // // // //     </div>
// // // // //   </div>
// // // // // );

// // // // // export default AdminDashboard;
// // // // import React from 'react';
// // // // import { useApp } from "../../context/AppContext"; 
// // // // import { 
// // // //   Users, Activity, Clock, BarChart3, 
// // // //   Zap, Stethoscope, ArrowUpRight 
// // // // } from 'lucide-react';

// // // // // --- HELPER: CAPACITY BAR ---
// // // // const CapacityBar = ({ label, val, color }) => (
// // // //   <div className="mb-3">
// // // //     <div className="d-flex justify-content-between mb-1 fw-bold" style={{ fontSize: '11px' }}>
// // // //       <span style={{ color: '#64748b' }}>{label}</span>
// // // //       <span style={{ color }}>{val}%</span>
// // // //     </div>
// // // //     <div className="progress" style={{ height: '6px', backgroundColor: '#f1f5f9', borderRadius: '10px' }}>
// // // //       <div className="progress-bar" style={{ 
// // // //         width: `${val}%`, 
// // // //         backgroundColor: color, 
// // // //         borderRadius: '10px',
// // // //         transition: 'width 0.5s ease'
// // // //       }}></div>
// // // //     </div>
// // // //   </div>
// // // // );

// // // // const AdminDashboard = () => {
// // // //   const { patients, completed, currentPatient } = useApp();

// // // //   const theme = {
// // // //     bg: "#f8fafc",
// // // //     card: "#ffffff",
// // // //     accent: "#4f46e5",
// // // //     border: "#e2e8f0"
// // // //   };

// // // //   const totalRegistered = (patients?.length || 0) + (completed?.length || 0) + (currentPatient ? 1 : 0);
// // // //   const activeQueueCount = patients?.length || 0;

// // // //   return (
// // // //     <div style={{ 
// // // //       backgroundColor: theme.bg, 
// // // //       minHeight: '100vh', 
// // // //       width: '100%',
// // // //       // Matches your sidebar width from the screenshot
// // // //       marginLeft: 'var(--sidebar-width, 260px)', 
// // // //       overflowX: 'hidden',
// // // //       paddingBottom: '50px'
// // // //     }} className="admin-main-content">
      
// // // //       <style>{`
// // // //         @media (max-width: 768px) {
// // // //           .admin-main-content { margin-left: 0 !important; }
// // // //         }
// // // //         .custom-card {
// // // //             transition: transform 0.2s ease;
// // // //             border-radius: 20px;
// // // //             border: 1px solid #e2e8f0;
// // // //             background: #ffffff;
// // // //         }
// // // //       `}</style>

// // // //       <div className="container-fluid p-4 p-md-5">
        
// // // //         {/* HEADER SECTION */}
// // // //         <div className="mb-5">
// // // //           <div className="d-flex align-items-center gap-2 mb-1">
// // // //             <div style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: theme.accent }}></div>
// // // //             <span className="text-muted fw-bold text-uppercase" style={{ fontSize: '10px', letterSpacing: '1px' }}>Analytics Dashboard</span>
// // // //           </div>
// // // //           <h1 className="fw-bold" style={{ fontSize: '2rem', color: '#1e293b' }}>
// // // //             System <span style={{ color: theme.accent }}>Analytics</span>
// // // //           </h1>
// // // //           <p className="text-muted small">Real-time clinical throughput and patient flow.</p>
// // // //         </div>

// // // //         {/* KPI GRID */}
// // // //         <div className="row g-3 g-md-4 mb-5">
// // // //           <KPICard label="Active Queue" value={activeQueueCount} icon={<Activity size={20}/>} color="#f59e0b" />
// // // //           <KPICard label="Total Patients" value={totalRegistered} icon={<Users size={20}/>} color="#4f46e5" />
// // // //           <KPICard label="Wait Time" value={activeQueueCount > 5 ? "24m" : "12m"} icon={<Clock size={20}/>} color="#10b981" />
// // // //           <KPICard label="Staff Active" value="12" icon={<Stethoscope size={20}/>} color="#6366f1" />
// // // //         </div>

// // // //         {/* DATA SECTION */}
// // // //         <div className="row g-4">
// // // //           {/* LOAD FACTOR */}
// // // //           <div className="col-xl-8">
// // // //             <div className="p-4 shadow-sm custom-card h-100">
// // // //               <div className="d-flex justify-content-between align-items-center mb-4">
// // // //                 <h6 className="fw-bold m-0 text-uppercase tracking-wider opacity-75" style={{ fontSize: '11px' }}>Departmental Load Factor</h6>
// // // //                 <BarChart3 size={16} className="text-muted" />
// // // //               </div>
              
// // // //               <div className="row g-4 align-items-center">
// // // //                 <div className="col-md-5 text-center text-md-start border-end-md">
// // // //                   <div className="display-4 fw-bold mb-0" style={{ color: theme.accent, letterSpacing: '-2px' }}>
// // // //                     {activeQueueCount > 8 ? "82%" : "94%"}
// // // //                   </div>
// // // //                   <h6 className="fw-bold text-dark mt-2">Optimal Efficiency</h6>
// // // //                   <p className="small text-muted mb-0">System performance is stable based on current token volume.</p>
// // // //                 </div>
// // // //                 <div className="col-md-7 ps-md-4">
// // // //                   <CapacityBar label="Cardiology" val={Math.min(activeQueueCount * 12, 100)} color="#4f46e5" />
// // // //                   <CapacityBar label="Emergency" val={80} color="#ef4444" />
// // // //                   <CapacityBar label="General OPD" val={55} color="#10b981" />
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* LIVE TRAFFIC */}
// // // //           <div className="col-xl-4">
// // // //             <div className="p-4 shadow-sm custom-card h-100">
// // // //               <div className="d-flex justify-content-between align-items-center mb-4">
// // // //                 <h6 className="fw-bold m-0 text-uppercase tracking-wider opacity-75" style={{ fontSize: '11px' }}>Live Patient Traffic</h6>
// // // //                 <div className="spinner-grow spinner-grow-sm text-success" role="status"></div>
// // // //               </div>
              
// // // //               <div className="vstack gap-2">
// // // //                 {patients && patients.length > 0 ? patients.slice(0, 5).map((p, i) => (
// // // //                   <div key={i} className="d-flex justify-content-between align-items-center p-2 px-3 rounded-3 bg-light border-0">
// // // //                     <div className="d-flex align-items-center gap-3">
// // // //                       <div className="bg-white p-2 rounded-circle shadow-sm"><Zap size={14} className="text-warning" /></div>
// // // //                       <div>
// // // //                         <p className="small fw-bold mb-0 text-truncate" style={{ maxWidth: '110px' }}>{p.name}</p>
// // // //                         <span style={{ fontSize: '10px' }} className="text-muted text-uppercase">Token {p.token}</span>
// // // //                       </div>
// // // //                     </div>
// // // //                     <span className="badge bg-white text-primary border-0 shadow-sm fw-bold" style={{ fontSize: '9px' }}>ACTIVE</span>
// // // //                   </div>
// // // //                 )) : (
// // // //                   <div className="text-center py-4">
// // // //                     <p className="small text-muted m-0">No active patients in queue.</p>
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // --- SUB-COMPONENT ---
// // // // const KPICard = ({ label, value, icon, color }) => (
// // // //   <div className="col-12 col-sm-6 col-xl-3">
// // // //     <div className="p-4 shadow-sm custom-card h-100">
// // // //       <div className="d-flex justify-content-between align-items-start mb-3">
// // // //         <div className="p-2 rounded-3" style={{ backgroundColor: `${color}15`, color: color }}>
// // // //           {icon}
// // // //         </div>
// // // //         <ArrowUpRight size={14} className="text-muted opacity-50" />
// // // //       </div>
// // // //       <p className="small fw-bold text-uppercase opacity-50 mb-1" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>{label}</p>
// // // //       <h3 className="fw-bold m-0" style={{ color: '#1e293b' }}>{value}</h3>
// // // //     </div>
// // // //   </div>
// // // // );

// // // // export default AdminDashboard;
// // // import React from 'react';
// // // import { useApp } from "../../context/AppContext"; 
// // // import { 
// // //   Users, Activity, Clock, BarChart3, 
// // //   Zap, Stethoscope, ArrowUpRight 
// // // } from 'lucide-react';

// // // const AdminDashboard = () => {
// // //   const { patients, completed, currentPatient } = useApp();

// // //   const totalRegistered = (patients?.length || 0) + (completed?.length || 0) + (currentPatient ? 1 : 0);
// // //   const activeQueueCount = patients?.length || 0;

// // //   return (
// // //     <div style={{ 
// // //       // 1. POSITIONING: Stay to the right of your 260px sidebar
// // //       marginLeft: '260px', 
// // //       backgroundColor: '#f8fafc',
// // //       // 2. SCROLLING: Subtract top navbar height (approx 70px) and force scroll
// // //       height: 'calc(100vh - 70px)', 
// // //       overflowY: 'auto',
// // //       overflowX: 'hidden',
// // //       display: 'block',
// // //       WebkitOverflowScrolling: 'touch'
// // //     }} className="dashboard-scroll-container">
      
// // //       <style>{`
// // //         @media (max-width: 768px) {
// // //           .dashboard-scroll-container { 
// // //             margin-left: 0 !important; 
// // //             height: auto !important;
// // //             overflow-y: visible !important;
// // //           }
// // //         }
// // //         .stat-card {
// // //           background: white;
// // //           padding: 24px;
// // //           border-radius: 20px;
// // //           border: 1px solid #e2e8f0;
// // //           height: 100%;
// // //           box-shadow: 0 1px 3px rgba(0,0,0,0.02);
// // //         }
// // //         .progress { background-color: #f1f5f9; border-radius: 10px; height: 6px; }
// // //       `}</style>

// // //       <div className="container-fluid p-4 p-md-5">
        
// // //         {/* HEADER */}
// // //         <div className="mb-4">
// // //           <div className="d-flex align-items-center gap-2 mb-2">
// // //             <div style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: '#4f46e5' }}></div>
// // //             <span className="text-muted fw-bold" style={{ fontSize: '10px', letterSpacing: '1px' }}>ANALYTICS DASHBOARD</span>
// // //           </div>
// // //           <h1 className="fw-bold h2 m-0">System <span style={{ color: '#4f46e5' }}>Analytics</span></h1>
// // //           <p className="text-muted small">Real-time clinical throughput and patient flow.</p>
// // //         </div>

// // //         {/* KPI CARDS */}
// // //         <div className="row g-4 mb-4">
// // //           <div className="col-12 col-sm-6 col-xl-3">
// // //             <div className="stat-card">
// // //               <div className="d-flex justify-content-between"><Activity size={20} color="#f59e0b" /><ArrowUpRight size={14} className="text-muted"/></div>
// // //               <p className="small text-muted fw-bold mt-3 mb-1" style={{fontSize:'10px'}}>ACTIVE QUEUE</p>
// // //               <h2 className="fw-bold m-0">{activeQueueCount}</h2>
// // //             </div>
// // //           </div>
// // //           <div className="col-12 col-sm-6 col-xl-3">
// // //             <div className="stat-card">
// // //               <div className="d-flex justify-content-between"><Users size={20} color="#4f46e5" /><ArrowUpRight size={14} className="text-muted"/></div>
// // //               <p className="small text-muted fw-bold mt-3 mb-1" style={{fontSize:'10px'}}>TOTAL PATIENTS</p>
// // //               <h2 className="fw-bold m-0">{totalRegistered}</h2>
// // //             </div>
// // //           </div>
// // //           <div className="col-12 col-sm-6 col-xl-3">
// // //             <div className="stat-card">
// // //               <div className="d-flex justify-content-between"><Clock size={20} color="#10b981" /><ArrowUpRight size={14} className="text-muted"/></div>
// // //               <p className="small text-muted fw-bold mt-3 mb-1" style={{fontSize:'10px'}}>WAIT TIME</p>
// // //               <h2 className="fw-bold m-0">12m</h2>
// // //             </div>
// // //           </div>
// // //           <div className="col-12 col-sm-6 col-xl-3">
// // //             <div className="stat-card">
// // //               <div className="d-flex justify-content-between"><Stethoscope size={20} color="#6366f1" /><ArrowUpRight size={14} className="text-muted"/></div>
// // //               <p className="small text-muted fw-bold mt-3 mb-1" style={{fontSize:'10px'}}>STAFF ACTIVE</p>
// // //               <h2 className="fw-bold m-0">12</h2>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* LOWER SECTION */}
// // //         <div className="row g-4">
// // //           <div className="col-xl-8">
// // //             <div className="stat-card">
// // //               <div className="row align-items-center">
// // //                 <div className="col-md-5">
// // //                   <h1 className="display-4 fw-bold text-primary mb-0">94%</h1>
// // //                   <p className="fw-bold">Optimal Efficiency</p>
// // //                   <p className="small text-muted">System is performing within target parameters.</p>
// // //                 </div>
// // //                 <div className="col-md-7 border-start ps-md-4">
// // //                   <label className="small fw-bold text-muted">Cardiology</label>
// // //                   <div className="progress mb-3"><div className="progress-bar" style={{width: '70%', backgroundColor:'#4f46e5'}}></div></div>
// // //                   <label className="small fw-bold text-muted">Emergency</label>
// // //                   <div className="progress mb-3"><div className="progress-bar bg-danger" style={{width: '80%'}}></div></div>
// // //                   <label className="small fw-bold text-muted">General OPD</label>
// // //                   <div className="progress"><div className="progress-bar bg-success" style={{width: '55%'}}></div></div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
          
// // //           <div className="col-xl-4">
// // //             <div className="stat-card">
// // //               <h6 className="fw-bold mb-4">LIVE PATIENT TRAFFIC</h6>
// // //               <div className="vstack gap-3">
// // //                 {patients?.slice(0, 4).map((p, i) => (
// // //                   <div key={i} className="d-flex justify-content-between align-items-center p-2 bg-light rounded">
// // //                     <span className="small fw-bold text-truncate" style={{maxWidth:'120px'}}>{p.name}</span>
// // //                     <span className="badge bg-white text-dark border">Token {p.token}</span>
// // //                   </div>
// // //                 ))}
// // //                 {(!patients || patients.length === 0) && <p className="text-center small text-muted py-4">No live traffic.</p>}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AdminDashboard;
// // import React, { useEffect, useState } from 'react';
// // import { useApp } from "../../context/AppContext"; 
// // import { 
// //   Users, Activity, Clock, BarChart3, 
// //   Zap, Stethoscope, ArrowUpRight 
// // } from 'lucide-react';

// // const AdminDashboard = () => {
// //   // Pulling live data from AppContext
// //   const { patients, completed, currentPatient } = useApp();
// //   const [staffCount, setStaffCount] = useState(0);

// //   // DYNAMIC CALCULATIONS
// //   // Total Patients = Waiting (patients) + Done (completed) + Currently being treated (currentPatient)
// //   const totalRegistered = (patients?.length || 0) + (completed?.length || 0) + (currentPatient ? 1 : 0);
  
// //   // Active Queue = Patients currently waiting to be called
// //   const activeQueueCount = patients?.length || 0;

// //   useEffect(() => {
// //     // SYNC STAFF COUNT: Pulling real counts from Doctors and Receptionists
// //     const syncStaff = () => {
// //       const doctors = JSON.parse(localStorage.getItem('doctors') || "[]");
// //       const receptionists = JSON.parse(localStorage.getItem('receptionists') || "[]");
// //       setStaffCount(doctors.length + receptionists.length);
// //     };

// //     syncStaff();
// //     window.addEventListener('storage', syncStaff);
// //     return () => window.removeEventListener('storage', syncStaff);
// //   }, []);

// //   return (
// //     <div style={{ 
// //       marginLeft: '260px', 
// //       backgroundColor: '#f8fafc',
// //       height: 'calc(100vh - 70px)', 
// //       overflowY: 'auto',
// //       overflowX: 'hidden',
// //       display: 'block',
// //       WebkitOverflowScrolling: 'touch'
// //     }} className="dashboard-scroll-container">
      
// //       <style>{`
// //         @media (max-width: 768px) {
// //           .dashboard-scroll-container { 
// //             margin-left: 0 !important; 
// //             height: auto !important;
// //             overflow-y: visible !important;
// //           }
// //         }
// //         .stat-card {
// //           background: white;
// //           padding: 24px;
// //           border-radius: 20px;
// //           border: 1px solid #e2e8f0;
// //           height: 100%;
// //           transition: transform 0.2s ease;
// //         }
// //         .stat-card:hover { transform: translateY(-3px); }
// //         .progress { background-color: #f1f5f9; border-radius: 10px; height: 6px; }
// //       `}</style>

// //       <div className="container-fluid p-4 p-md-5">
        
// //         {/* HEADER */}
// //         <div className="mb-4">
// //           <div className="d-flex align-items-center gap-2 mb-2">
// //             <div style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: '#4f46e5' }}></div>
// //             <span className="text-muted fw-bold" style={{ fontSize: '10px', letterSpacing: '1px' }}>LIVE SYSTEM STATUS</span>
// //           </div>
// //           <h1 className="fw-bold h2 m-0">Admin <span style={{ color: '#4f46e5' }}>Command</span></h1>
// //           <p className="text-muted small">Monitoring live data from Patient, Doctor, and Receptionist modules.</p>
// //         </div>

// //         {/* KPI CARDS - ALL DYNAMIC NOW */}
// //         <div className="row g-4 mb-4">
// //           <div className="col-12 col-sm-6 col-xl-3">
// //             <div className="stat-card">
// //               <div className="d-flex justify-content-between"><Activity size={20} color="#f59e0b" /><ArrowUpRight size={14} className="text-muted"/></div>
// //               <p className="small text-muted fw-bold mt-3 mb-1" style={{fontSize:'10px'}}>ACTIVE QUEUE</p>
// //               <h2 className="fw-bold m-0">{activeQueueCount}</h2>
// //             </div>
// //           </div>
          
// //           <div className="col-12 col-sm-6 col-xl-3">
// //             <div className="stat-card">
// //               <div className="d-flex justify-content-between"><Users size={20} color="#4f46e5" /><ArrowUpRight size={14} className="text-muted"/></div>
// //               <p className="small text-muted fw-bold mt-3 mb-1" style={{fontSize:'10px'}}>TOTAL VISITS</p>
// //               <h2 className="fw-bold m-0">{totalRegistered}</h2>
// //             </div>
// //           </div>

// //           <div className="col-12 col-sm-6 col-xl-3">
// //             <div className="stat-card">
// //               <div className="d-flex justify-content-between"><Clock size={20} color="#10b981" /><ArrowUpRight size={14} className="text-muted"/></div>
// //               <p className="small text-muted fw-bold mt-3 mb-1" style={{fontSize:'10px'}}>COMPLETED</p>
// //               <h2 className="fw-bold m-0">{completed?.length || 0}</h2>
// //             </div>
// //           </div>

// //           <div className="col-12 col-sm-6 col-xl-3">
// //             <div className="stat-card">
// //               <div className="d-flex justify-content-between"><Stethoscope size={20} color="#6366f1" /><ArrowUpRight size={14} className="text-muted"/></div>
// //               <p className="small text-muted fw-bold mt-3 mb-1" style={{fontSize:'10px'}}>STAFF ONLINE</p>
// //               <h2 className="fw-bold m-0">{staffCount}</h2>
// //             </div>
// //           </div>
// //         </div>

// //         {/* LOWER SECTION */}
// //         <div className="row g-4">
// //           <div className="col-xl-8">
// //             <div className="stat-card">
// //               <h6 className="fw-bold mb-4">FLOW EFFICIENCY</h6>
// //               <div className="row align-items-center">
// //                 <div className="col-md-5 text-center">
// //                   {/* Efficiency calculated by completed vs total */}
// //                   <h1 className="display-4 fw-bold text-primary mb-0">
// //                     {totalRegistered > 0 ? Math.round((completed.length / totalRegistered) * 100) : 0}%
// //                   </h1>
// //                   <p className="fw-bold">Throughput Rate</p>
// //                   <p className="small text-muted">Percentage of patients processed today.</p>
// //                 </div>
// //                 <div className="col-md-7 border-start ps-md-4">
// //                   <label className="small fw-bold text-muted d-flex justify-content-between">
// //                     <span>In Waiting</span>
// //                     <span>{activeQueueCount}</span>
// //                   </label>
// //                   <div className="progress mb-3">
// //                     <div className="progress-bar" style={{width: `${(activeQueueCount/totalRegistered)*100}%`, backgroundColor:'#f59e0b'}}></div>
// //                   </div>

// //                   <label className="small fw-bold text-muted d-flex justify-content-between">
// //                     <span>Being Treated</span>
// //                     <span>{currentPatient ? 1 : 0}</span>
// //                   </label>
// //                   <div className="progress mb-3">
// //                     <div className="progress-bar bg-primary" style={{width: currentPatient ? '20%' : '0%'}}></div>
// //                   </div>

// //                   <label className="small fw-bold text-muted d-flex justify-content-between">
// //                     <span>Discharged</span>
// //                     <span>{completed.length}</span>
// //                   </label>
// //                   <div className="progress">
// //                     <div className="progress-bar bg-success" style={{width: `${(completed.length/totalRegistered)*100}%`}}></div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
          
// //           <div className="col-xl-4">
// //             <div className="stat-card">
// //               <h6 className="fw-bold mb-4">LIVE QUEUE MONITOR</h6>
// //               <div className="vstack gap-2">
// //                 {/* Shows the actual names from the real patient queue */}
// //                 {patients?.slice(0, 5).map((p, i) => (
// //                   <div key={i} className="d-flex justify-content-between align-items-center p-3 bg-light rounded-3 border-start border-primary border-4">
// //                     <div className="d-flex flex-column">
// //                       <span className="small fw-bold text-truncate" style={{maxWidth:'140px'}}>{p.name}</span>
// //                       <span className="text-muted" style={{fontSize: '10px'}}>{p.department || 'General'}</span>
// //                     </div>
// //                     <span className="badge bg-white text-primary border border-primary-subtle">#{p.token || i+1}</span>
// //                   </div>
// //                 ))}
// //                 {(!patients || patients.length === 0) && (
// //                   <div className="text-center py-5">
// //                     <Activity size={32} className="text-muted opacity-25 mb-2" />
// //                     <p className="small text-muted">No patients currently in queue</p>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;
// import React, { useEffect, useState } from 'react';
// import { useApp } from "../../context/AppContext"; 
// import { 
//   Users, Activity, Clock, BarChart3, 
//   Zap, Stethoscope, ArrowUpRight 
// } from 'lucide-react';

// const AdminDashboard = () => {
//   // Use allPatients and adminStats for a global hospital view
//   const { allPatients, adminStats, doctors } = useApp();
//   const [staffCount, setStaffCount] = useState(0);

//   // DYNAMIC CALCULATIONS (Using global stats from Context)
//   const totalRegistered = adminStats?.total || 0;
//   const activeQueueCount = adminStats?.pending || 0;
//   const completedCount = adminStats?.finished || 0;
//   const inConsultationCount = adminStats?.active || 0;

//   useEffect(() => {
//     // Sync Staff: Combine doctors from context + receptionists from storage
//     const syncStaff = () => {
//       const receptionists = JSON.parse(localStorage.getItem('receptionists') || "[]");
//       // Use doctors from context (synced with your Staff Directory)
//       setStaffCount((doctors?.length || 0) + receptionists.length);
//     };

//     syncStaff();
//     window.addEventListener('storage', syncStaff);
//     return () => window.removeEventListener('storage', syncStaff);
//   }, [doctors]);

//   return (
//     <div style={{ 
//       marginLeft: '260px', 
//       backgroundColor: '#f8fafc',
//       height: 'calc(100vh - 70px)', 
//       overflowY: 'auto',
//       overflowX: 'hidden',
//       display: 'block',
//       WebkitOverflowScrolling: 'touch'
//     }} className="dashboard-scroll-container">
      
//       <style>{`
//         @media (max-width: 768px) {
//           .dashboard-scroll-container { 
//             margin-left: 0 !important; 
//             height: auto !important;
//             overflow-y: visible !important;
//           }
//         }
//         .stat-card {
//           background: white;
//           padding: 24px;
//           border-radius: 20px;
//           border: 1px solid #e2e8f0;
//           height: 100%;
//           transition: transform 0.2s ease;
//         }
//         .stat-card:hover { transform: translateY(-3px); }
//         .progress { background-color: #f1f5f9; border-radius: 10px; height: 6px; }
//       `}</style>

//       <div className="container-fluid p-4 p-md-5">
        
//         {/* HEADER */}
//         <div className="mb-4">
//           <div className="d-flex align-items-center gap-2 mb-2">
//             <div style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: '#4f46e5' }}></div>
//             <span className="text-muted fw-bold" style={{ fontSize: '10px', letterSpacing: '1px' }}>LIVE SYSTEM STATUS</span>
//           </div>
//           <h1 className="fw-bold h2 m-0">Admin <span style={{ color: '#4f46e5' }}>Command</span></h1>
//           <p className="text-muted small">Global oversight of all hospital departments and staff.</p>
//         </div>

//         {/* KPI CARDS */}
//         <div className="row g-4 mb-4">
//           <div className="col-12 col-sm-6 col-xl-3">
//             <div className="stat-card">
//               <div className="d-flex justify-content-between"><Activity size={20} color="#f59e0b" /><ArrowUpRight size={14} className="text-muted"/></div>
//               <p className="small text-muted fw-bold mt-3 mb-1" style={{fontSize:'10px'}}>ACTIVE QUEUE</p>
//               <h2 className="fw-bold m-0">{activeQueueCount}</h2>
//             </div>
//           </div>
          
//           <div className="col-12 col-sm-6 col-xl-3">
//             <div className="stat-card">
//               <div className="d-flex justify-content-between"><Users size={20} color="#4f46e5" /><ArrowUpRight size={14} className="text-muted"/></div>
//               <p className="small text-muted fw-bold mt-3 mb-1" style={{fontSize:'10px'}}>TOTAL VISITS</p>
//               <h2 className="fw-bold m-0">{totalRegistered}</h2>
//             </div>
//           </div>

//           <div className="col-12 col-sm-6 col-xl-3">
//             <div className="stat-card">
//               <div className="d-flex justify-content-between"><Clock size={20} color="#10b981" /><ArrowUpRight size={14} className="text-muted"/></div>
//               <p className="small text-muted fw-bold mt-3 mb-1" style={{fontSize:'10px'}}>COMPLETED</p>
//               <h2 className="fw-bold m-0">{completedCount}</h2>
//             </div>
//           </div>

//           <div className="col-12 col-sm-6 col-xl-3">
//             <div className="stat-card">
//               <div className="d-flex justify-content-between"><Stethoscope size={20} color="#6366f1" /><ArrowUpRight size={14} className="text-muted"/></div>
//               <p className="small text-muted fw-bold mt-3 mb-1" style={{fontSize:'10px'}}>STAFF ONLINE</p>
//               <h2 className="fw-bold m-0">{staffCount}</h2>
//             </div>
//           </div>
//         </div>

//         {/* LOWER SECTION */}
//         <div className="row g-4">
//           <div className="col-xl-8">
//             <div className="stat-card">
//               <h6 className="fw-bold mb-4">FLOW EFFICIENCY</h6>
//               <div className="row align-items-center">
//                 <div className="col-md-5 text-center">
//                   <h1 className="display-4 fw-bold text-primary mb-0">
//                     {totalRegistered > 0 ? Math.round((completedCount / totalRegistered) * 100) : 0}%
//                   </h1>
//                   <p className="fw-bold">Throughput Rate</p>
//                   <p className="small text-muted">Percentage of total hospital traffic processed.</p>
//                 </div>
//                 <div className="col-md-7 border-start ps-md-4">
//                   <label className="small fw-bold text-muted d-flex justify-content-between">
//                     <span>In Waiting</span>
//                     <span>{activeQueueCount}</span>
//                   </label>
//                   <div className="progress mb-3">
//                     <div className="progress-bar" style={{width: `${totalRegistered > 0 ? (activeQueueCount/totalRegistered)*100 : 0}%`, backgroundColor:'#f59e0b'}}></div>
//                   </div>

//                   <label className="small fw-bold text-muted d-flex justify-content-between">
//                     <span>Being Treated</span>
//                     <span>{inConsultationCount}</span>
//                   </label>
//                   <div className="progress mb-3">
//                     <div className="progress-bar bg-primary" style={{width: `${totalRegistered > 0 ? (inConsultationCount/totalRegistered)*100 : 0}%`}}></div>
//                   </div>

//                   <label className="small fw-bold text-muted d-flex justify-content-between">
//                     <span>Discharged</span>
//                     <span>{completedCount}</span>
//                   </label>
//                   <div className="progress">
//                     <div className="progress-bar bg-success" style={{width: `${totalRegistered > 0 ? (completedCount/totalRegistered)*100 : 0}%`}}></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="col-xl-4">
//             <div className="stat-card">
//               <h6 className="fw-bold mb-4">GLOBAL LIVE MONITOR</h6>
//               <div className="vstack gap-2">
//                 {/* Shows the latest 5 patients across ALL departments */}
//                 {allPatients?.filter(p => p.status === "Waiting").slice(0, 5).map((p, i) => (
//                   <div key={i} className="d-flex justify-content-between align-items-center p-3 bg-light rounded-3 border-start border-primary border-4">
//                     <div className="d-flex flex-column">
//                       <span className="small fw-bold text-truncate" style={{maxWidth:'140px'}}>{p.name}</span>
//                       <span className="text-muted text-uppercase" style={{fontSize: '9px', letterSpacing: '0.5px'}}>{p.department}</span>
//                     </div>
//                     <span className="badge bg-white text-primary border border-primary-subtle">#{p.token}</span>
//                   </div>
//                 ))}
//                 {allPatients?.filter(p => p.status === "Waiting").length === 0 && (
//                   <div className="text-center py-5">
//                     <Activity size={32} className="text-muted opacity-25 mb-2" />
//                     <p className="small text-muted">Hospital queue is empty</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useEffect, useState } from 'react';
import { useApp } from "../../context/AppContext"; 
import { 
  Users, Activity, Clock, Globe, 
  UserCheck, Stethoscope, ArrowUpRight 
} from 'lucide-react';

const AdminDashboard = () => {
  const { allPatients, adminStats, doctors } = useApp();
  const [staffCount, setStaffCount] = useState(0);

  // --- DYNAMIC CALCULATIONS ---
  const totalRegistered = adminStats?.total || 0;
  const activeQueueCount = adminStats?.pending || 0;
  const completedCount = adminStats?.finished || 0;
  const inConsultationCount = adminStats?.active || 0;

  // NEW: Separate counts for Online and Walk-in
  // Updated for case-insensitivity and null-checks
  const onlineCount = allPatients?.filter(p => 
    p.type?.toLowerCase() === 'online'
  ).length || 0;

  const walkinCount = allPatients?.filter(p => 
    p.type?.toLowerCase() !== 'online'
  ).length || 0;

  useEffect(() => {
    const syncStaff = () => {
      const receptionists = JSON.parse(localStorage.getItem('receptionists') || "[]");
      setStaffCount((doctors?.length || 0) + receptionists.length);
    };
    syncStaff();
    window.addEventListener('storage', syncStaff);
    return () => window.removeEventListener('storage', syncStaff);
  }, [doctors]);

  return (
    <div style={{ 
      marginLeft: '260px', 
      backgroundColor: '#f8fafc',
      height: 'calc(100vh - 70px)', 
      overflowY: 'auto',
      display: 'block'
    }} className="dashboard-scroll-container">
      
      <style>{`
        .stat-card {
          background: white;
          padding: 24px;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          height: 100%;
          transition: transform 0.2s ease;
        }
        .stat-card:hover { transform: translateY(-3px); }
        .progress { background-color: #f1f5f9; border-radius: 10px; height: 6px; }
      `}</style>

      <div className="container-fluid p-4 p-md-5">
        
        {/* HEADER */}
        <div className="mb-4">
          <h1 className="fw-bold h2 m-0">Admin <span style={{ color: '#4f46e5' }}>Command</span></h1>
          <p className="text-muted small">Global oversight of all hospital departments and staff.</p>
        </div>

        {/* PRIMARY KPI CARDS */}
        <div className="row g-4 mb-4">
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="stat-card" style={{ borderLeft: '4px solid #f59e0b' }}>
              <div className="d-flex justify-content-between"><Activity size={20} color="#f59e0b" /><ArrowUpRight size={14} className="text-muted"/></div>
              <p className="small text-muted fw-bold mt-3 mb-1" style={{fontSize:'10px'}}>WAITING QUEUE</p>
              <h2 className="fw-bold m-0">{activeQueueCount}</h2>
            </div>
          </div>
          
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="stat-card" style={{ borderLeft: '4px solid #4f46e5' }}>
              <div className="d-flex justify-content-between"><Users size={20} color="#4f46e5" /><ArrowUpRight size={14} className="text-muted"/></div>
              <p className="small text-muted fw-bold mt-3 mb-1" style={{fontSize:'10px'}}>TOTAL VISITS</p>
              <h2 className="fw-bold m-0">{totalRegistered}</h2>
            </div>
          </div>

          {/* NEW: ONLINE COUNT CARD */}
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="stat-card" style={{ borderLeft: '4px solid #3b82f6' }}>
              <div className="d-flex justify-content-between"><Globe size={20} color="#3b82f6" /><ArrowUpRight size={14} className="text-muted"/></div>
              <p className="small text-muted fw-bold mt-3 mb-1" style={{fontSize:'10px'}}>ONLINE APPOINTMENTS</p>
              <h2 className="fw-bold m-0 text-primary">{onlineCount}</h2>
            </div>
          </div>

          {/* NEW: WALK-IN COUNT CARD */}
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="stat-card" style={{ borderLeft: '4px solid #ec4899' }}>
              <div className="d-flex justify-content-between"><UserCheck size={20} color="#ec4899" /><ArrowUpRight size={14} className="text-muted"/></div>
              <p className="small text-muted fw-bold mt-3 mb-1" style={{fontSize:'10px'}}>WALK-IN PATIENTS</p>
              <h2 className="fw-bold m-0" style={{ color: '#ec4899' }}>{walkinCount}</h2>
            </div>
          </div>
        </div>

        {/* LOWER SECTION */}
        <div className="row g-4">
          <div className="col-xl-8">
            <div className="stat-card">
              <h6 className="fw-bold mb-4">FLOW EFFICIENCY & CHANNEL SPLIT</h6>
              <div className="row align-items-center">
                <div className="col-md-5 text-center">
                  <h1 className="display-4 fw-bold text-primary mb-0">
                    {totalRegistered > 0 ? Math.round((completedCount / totalRegistered) * 100) : 0}%
                  </h1>
                  <p className="fw-bold">Throughput Rate</p>
                  
                  {/* CHANNEL SPLIT PERCENTAGE */}
                  <div className="mt-3 p-2 rounded bg-light">
                    <div className="d-flex justify-content-around small fw-bold">
                      <span className="text-primary">Online: {totalRegistered > 0 ? Math.round((onlineCount/totalRegistered)*100) : 0}%</span>
                      <span style={{ color: '#ec4899' }}>Walk-in: {totalRegistered > 0 ? Math.round((walkinCount/totalRegistered)*100) : 0}%</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-7 border-start ps-md-4">
                  <label className="small fw-bold text-muted d-flex justify-content-between">
                    <span>Discharged Patients</span>
                    <span>{completedCount}</span>
                  </label>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-success" style={{width: `${totalRegistered > 0 ? (completedCount/totalRegistered)*100 : 0}%`}}></div>
                  </div>

                  <label className="small fw-bold text-muted d-flex justify-content-between">
                    <span>Online Appointments</span>
                    <span>{onlineCount}</span>
                  </label>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-primary" style={{width: `${totalRegistered > 0 ? (onlineCount/totalRegistered)*100 : 0}%`}}></div>
                  </div>

                  <label className="small fw-bold text-muted d-flex justify-content-between">
                    <span>Walk-in Patients</span>
                    <span>{walkinCount}</span>
                  </label>
                  <div className="progress mb-3">
                    <div className="progress-bar" style={{width: `${totalRegistered > 0 ? (walkinCount/totalRegistered)*100 : 0}%`, backgroundColor: '#ec4899'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-xl-4">
            <div className="stat-card">
              <h6 className="fw-bold mb-4">LIVE QUEUE MONITOR</h6>
              <div className="vstack gap-2">
                {allPatients?.filter(p => p.status === "Waiting").slice(0, 5).map((p, i) => (
                  <div key={i} className="d-flex justify-content-between align-items-center p-3 bg-light rounded-3 border-start border-primary border-4">
                    <div className="d-flex flex-column">
                      <span className="small fw-bold text-truncate" style={{maxWidth:'140px'}}>{p.name}</span>
                      <span className="text-muted text-uppercase" style={{fontSize: '9px'}}>{p.type} • {p.department}</span>
                    </div>
                    <span className="badge bg-white text-primary border">#{p.token}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;