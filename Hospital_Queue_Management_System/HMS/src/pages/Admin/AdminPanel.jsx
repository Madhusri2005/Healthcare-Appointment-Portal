// import React, { useState } from 'react';
// import { 
//   ShieldCheck, 
//   UserCog, 
//   Fingerprint, 
//   Key, 
//   Activity, 
//   Lock, 
//   Unlock, 
//   MoreHorizontal, 
//   UserPlus,
//   RefreshCcw,
//   ShieldAlert
// } from 'lucide-react';

// const AdminPanel = () => {
//   // Theme Constants for Premium Dark Green Aesthetic
//   const theme = {
//     bg: "#011a13",
//     card: "#022c22",
//     accent: "#10b981",
//     border: "rgba(16, 185, 129, 0.15)",
//     textSecondary: "#6ee7b7",
//     danger: "#ef4444"
//   };

//   const [users] = useState([
//     { id: "USR-9901", name: "Dr. Aris Thorne", role: "Doctor", access: "High", lastLogin: "2 mins ago", status: "Active" },
//     { id: "USR-9902", name: "Alice Cooper", role: "Receptionist", access: "Medium", lastLogin: "15 mins ago", status: "Active" },
//     { id: "USR-9903", name: "System Automator", role: "Service", access: "Root", lastLogin: "Online", status: "Active" },
//     { id: "USR-9904", name: "Robert Wilson", role: "Receptionist", access: "Medium", lastLogin: "2 days ago", status: "Inactive" },
//   ]);

//   return (
//     <div style={{ backgroundColor: theme.bg, minHeight: '100vh', color: '#fff' }} className="p-4 p-lg-5 font-sans">
      
//       {/* HEADER SECTION */}
//       <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 gap-4">
//         <div>
//           <h1 className="display-5 fw-black mb-1" style={{ letterSpacing: '-2px' }}>
//             System <span style={{ color: theme.accent }}>Command</span> Center
//           </h1>
//           <p className="mb-0 opacity-75" style={{ color: theme.textSecondary }}>Administrative override, role-based access control, and security auditing.</p>
//         </div>
//         <div className="d-flex gap-3">
//           <button className="btn btn-lg d-flex align-items-center gap-2" 
//             style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: theme.danger, border: `1px solid ${theme.danger}44`, borderRadius: '15px' }}>
//             <ShieldAlert size={20} /> Emergency Lock
//           </button>
//           <button className="btn btn-lg shadow-lg d-flex align-items-center gap-2" 
//             style={{ backgroundColor: theme.accent, color: theme.bg, fontWeight: '800', borderRadius: '15px', border: 'none' }}>
//             <UserPlus size={20} /> Create Admin
//           </button>
//         </div>
//       </div>

//       {/* SECURITY OVERVIEW ROW */}
//       <div className="row g-4 mb-5">
//         {[
//           { label: "Security Level", value: "Strict", icon: Lock, color: theme.accent },
//           { label: "Active Sessions", value: "24", icon: Activity, color: "#3b82f6" },
//           { label: "Failed Attempts", value: "0", icon: ShieldCheck, color: "#10b981" },
//           { label: "Root Access", value: "02", icon: Fingerprint, color: "#f59e0b" },
//         ].map((stat, i) => (
//           <div key={i} className="col-12 col-md-6 col-xl-3">
//             <div className="p-4 h-100" style={{ backgroundColor: theme.card, borderRadius: '24px', border: `1px solid ${theme.border}` }}>
//               <div className="d-flex align-items-center gap-3 mb-3">
//                 <div className="p-2 rounded-3" style={{ backgroundColor: 'rgba(255,255,255,0.03)', color: stat.color }}>
//                   <stat.icon size={20} />
//                 </div>
//                 <span className="small fw-bold text-uppercase opacity-50" style={{ letterSpacing: '1px' }}>{stat.label}</span>
//               </div>
//               <h2 className="fw-black m-0 display-6">{stat.value}</h2>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="row g-4">
//         {/* ACCESS MANAGEMENT TABLE */}
//         <div className="col-xl-8">
//           <div className="p-4 shadow-lg h-100" style={{ backgroundColor: theme.card, borderRadius: '30px', border: `1px solid ${theme.border}` }}>
//             <div className="d-flex justify-content-between align-items-center mb-4 px-2">
//               <h4 className="fw-bold m-0 d-flex align-items-center gap-2">
//                 <UserCog size={22} className="text-info" /> User Permissions
//               </h4>
//               <button className="btn btn-sm text-white-50"><RefreshCcw size={16} /></button>
//             </div>

//             <div className="table-responsive">
//               <table className="table table-borderless align-middle text-white mb-0">
//                 <thead>
//                   <tr className="text-uppercase small opacity-50 border-bottom border-secondary" style={{ color: theme.textSecondary }}>
//                     <th className="pb-3 px-3">Entity</th>
//                     <th className="pb-3">Role</th>
//                     <th className="pb-3">Privilege</th>
//                     <th className="pb-3 text-end">Security Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {users.map((user, idx) => (
//                     <tr key={idx} className="border-bottom border-secondary" style={{ borderBottomColor: 'rgba(255,255,255,0.03) !important' }}>
//                       <td className="py-4 px-3">
//                         <div className="fw-bold">{user.name}</div>
//                         <div className="small opacity-50 font-monospace">{user.id}</div>
//                       </td>
//                       <td className="py-4">
//                         <span className="badge rounded-pill px-3 py-2" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: theme.textSecondary }}>
//                           {user.role}
//                         </span>
//                       </td>
//                       <td className="py-4">
//                         <div className="d-flex align-items-center gap-2">
//                           <div className={`rounded-circle ${user.access === 'High' || user.access === 'Root' ? 'bg-success' : 'bg-info'}`} style={{ width: '6px', height: '6px' }}></div>
//                           <span className="small fw-bold">{user.access}</span>
//                         </div>
//                       </td>
//                       <td className="py-4 text-end">
//                         <div className="d-flex justify-content-end gap-2">
//                           <button className="btn btn-sm px-3 py-2 border-secondary hover-effect" style={{ backgroundColor: 'rgba(0,0,0,0.2)', color: '#fff', borderRadius: '10px' }}>
//                             <Key size={14} className="me-1" /> Reset
//                           </button>
//                           <button className="btn btn-sm px-3 py-2 border-secondary" style={{ backgroundColor: 'rgba(0,0,0,0.2)', color: user.status === 'Active' ? theme.accent : theme.danger, borderRadius: '10px' }}>
//                             {user.status === 'Active' ? <Unlock size={14} /> : <Lock size={14} />}
//                           </button>
//                           <button className="btn btn-sm p-2 text-white-50"><MoreHorizontal size={18} /></button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         {/* SYSTEM AUDIT LOG */}
//         <div className="col-xl-4">
//           <div className="p-4 shadow-lg h-100" style={{ backgroundColor: theme.card, borderRadius: '30px', border: `1px solid ${theme.border}` }}>
//             <h4 className="fw-bold mb-4">Security Audit</h4>
//             <div className="vstack gap-4">
//               {[
//                 { event: "Root login from 192.168.1.1", time: "Just now", type: "critical" },
//                 { event: "Password changed: USR-9902", time: "14:20 PM", type: "info" },
//                 { event: "New Doctor account verified", time: "11:05 AM", type: "success" },
//                 { event: "System Backup Successful", time: "09:00 AM", type: "success" },
//                 { event: "Unauthorized API attempt blocked", time: "Yesterday", type: "warning" },
//               ].map((log, i) => (
//                 <div key={i} className="d-flex gap-3 align-items-start">
//                   <div className={`mt-1 rounded-circle flex-shrink-0`} 
//                        style={{ width: '10px', height: '10px', backgroundColor: log.type === 'critical' ? theme.danger : log.type === 'warning' ? '#f59e0b' : theme.accent }}></div>
//                   <div>
//                     <p className="small fw-bold mb-0 text-white">{log.event}</p>
//                     <p className="mb-0 text-uppercase" style={{ fontSize: '0.65rem', color: theme.textSecondary, letterSpacing: '0.5px' }}>{log.time}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button className="btn btn-link w-100 text-decoration-none mt-5 fw-bold" style={{ color: theme.accent }}>View Full Audit Trail</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, UserCog, Fingerprint, Key, Activity, 
  Lock, Unlock, MoreHorizontal, UserPlus, RefreshCcw, ShieldAlert
} from 'lucide-react';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [securityStats, setSecurityStats] = useState({ doctors: 0, receptionists: 0 });

  const theme = {
    bg: "#011a13",
    card: "#022c22",
    accent: "#10b981",
    border: "rgba(16, 185, 129, 0.15)",
    textSecondary: "#6ee7b7",
    danger: "#ef4444"
  };

  // FETCH REAL DATA FROM LOCALSTORAGE
  const syncUsers = () => {
    const doctors = JSON.parse(localStorage.getItem('doctors') || "[]");
    const receptionists = JSON.parse(localStorage.getItem('receptionists') || "[]");

    // Format merged data into a common "User" structure for the table
    const mergedUsers = [
      ...doctors.map(d => ({
        id: `DOC-${d.id || 'N/A'}`,
        name: d.name,
        role: "Doctor",
        access: "High",
        status: "Active"
      })),
      ...receptionists.map(r => ({
        id: `REC-${r.id || 'N/A'}`,
        name: r.name,
        role: "Receptionist",
        access: "Medium",
        status: "Active"
      }))
    ];

    setUsers(mergedUsers);
    setSecurityStats({ doctors: doctors.length, receptionists: receptionists.length });
  };

  useEffect(() => {
    syncUsers();
    window.addEventListener('storage', syncUsers);
    return () => window.removeEventListener('storage', syncUsers);
  }, []);

  return (
    <div style={{ backgroundColor: theme.bg, minHeight: '100vh', color: '#fff' }} className="p-4 p-lg-5 font-sans">
      
      {/* HEADER SECTION */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 gap-4">
        <div>
          <h1 className="display-5 fw-black mb-1" style={{ letterSpacing: '-2px' }}>
            System <span style={{ color: theme.accent }}>Command</span> Center
          </h1>
          <p className="mb-0 opacity-75" style={{ color: theme.textSecondary }}>Administrative override and security auditing for {users.length} registered staff.</p>
        </div>
        <div className="d-flex gap-3">
          <button className="btn btn-lg d-flex align-items-center gap-2" 
            style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: theme.danger, border: `1px solid ${theme.danger}44`, borderRadius: '15px' }}>
            <ShieldAlert size={20} /> Emergency Lock
          </button>
        </div>
      </div>

      {/* SECURITY OVERVIEW ROW */}
      <div className="row g-4 mb-5">
        {[
          { label: "Doctor Access", value: securityStats.doctors.toString().padStart(2, '0'), icon: Lock, color: theme.accent },
          { label: "Receptionist Access", value: securityStats.receptionists.toString().padStart(2, '0'), icon: Activity, color: "#3b82f6" },
          { label: "System Integrity", value: "Secure", icon: ShieldCheck, color: "#10b981" },
          { label: "Root Access", value: "01", icon: Fingerprint, color: "#f59e0b" },
        ].map((stat, i) => (
          <div key={i} className="col-12 col-md-6 col-xl-3">
            <div className="p-4 h-100" style={{ backgroundColor: theme.card, borderRadius: '24px', border: `1px solid ${theme.border}` }}>
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="p-2 rounded-3" style={{ backgroundColor: 'rgba(255,255,255,0.03)', color: stat.color }}>
                  <stat.icon size={20} />
                </div>
                <span className="small fw-bold text-uppercase opacity-50" style={{ letterSpacing: '1px' }}>{stat.label}</span>
              </div>
              <h2 className="fw-black m-0 display-6">{stat.value}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4">
        {/* ACCESS MANAGEMENT TABLE */}
        <div className="col-xl-8">
          <div className="p-4 shadow-lg h-100" style={{ backgroundColor: theme.card, borderRadius: '30px', border: `1px solid ${theme.border}` }}>
            <div className="d-flex justify-content-between align-items-center mb-4 px-2">
              <h4 className="fw-bold m-0 d-flex align-items-center gap-2">
                <UserCog size={22} className="text-info" /> User Permissions
              </h4>
              <button onClick={syncUsers} className="btn btn-sm text-white-50"><RefreshCcw size={16} /></button>
            </div>

            <div className="table-responsive">
              <table className="table table-borderless align-middle text-white mb-0">
                <thead>
                  <tr className="text-uppercase small opacity-50 border-bottom border-secondary" style={{ color: theme.textSecondary }}>
                    <th className="pb-3 px-3">Entity</th>
                    <th className="pb-3">Role</th>
                    <th className="pb-3">Privilege</th>
                    <th className="pb-3 text-end">Security Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? users.map((user, idx) => (
                    <tr key={idx} className="border-bottom border-secondary" style={{ borderBottomColor: 'rgba(255,255,255,0.03) !important' }}>
                      <td className="py-4 px-3">
                        <div className="fw-bold">{user.name}</div>
                        <div className="small opacity-50 font-monospace" style={{ fontSize: '10px' }}>{user.id}</div>
                      </td>
                      <td className="py-4">
                        <span className="badge rounded-pill px-3 py-2" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: theme.textSecondary }}>
                          {user.role}
                        </span>
                      </td>
                      <td className="py-4">
                        <div className="d-flex align-items-center gap-2">
                          <div className={`rounded-circle ${user.access === 'High' ? 'bg-success' : 'bg-info'}`} style={{ width: '6px', height: '6px' }}></div>
                          <span className="small fw-bold">{user.access}</span>
                        </div>
                      </td>
                      <td className="py-4 text-end">
                        <div className="d-flex justify-content-end gap-2">
                          <button className="btn btn-sm px-3 py-2 border-secondary" style={{ backgroundColor: 'rgba(0,0,0,0.2)', color: '#fff', borderRadius: '10px' }}>
                            <Key size={14} className="me-1" /> Reset
                          </button>
                          <button className="btn btn-sm px-3 py-2 border-secondary" style={{ backgroundColor: 'rgba(0,0,0,0.2)', color: theme.accent, borderRadius: '10px' }}>
                            <Unlock size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan="4" className="text-center py-5 opacity-50">No medical or desk staff found in system database.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* SYSTEM AUDIT LOG */}
        <div className="col-xl-4">
          <div className="p-4 shadow-lg h-100" style={{ backgroundColor: theme.card, borderRadius: '30px', border: `1px solid ${theme.border}` }}>
            <h4 className="fw-bold mb-4">Security Audit</h4>
            <div className="vstack gap-4">
              {[
                { event: `System synced with ${users.length} staff members`, time: "Just now", type: "success" },
                { event: `Access granted to ${securityStats.doctors} doctors`, time: "Live Sync", type: "info" },
                { event: "Database Integrity Check Successful", time: "09:00 AM", type: "success" },
                { event: "Encryption Layer Active (AES-256)", time: "Continuous", type: "info" },
              ].map((log, i) => (
                <div key={i} className="d-flex gap-3 align-items-start">
                  <div className={`mt-1 rounded-circle flex-shrink-0`} 
                       style={{ width: '10px', height: '10px', backgroundColor: log.type === 'info' ? '#3b82f6' : theme.accent }}></div>
                  <div>
                    <p className="small fw-bold mb-0 text-white">{log.event}</p>
                    <p className="mb-0 text-uppercase" style={{ fontSize: '0.65rem', color: theme.textSecondary, letterSpacing: '0.5px' }}>{log.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;