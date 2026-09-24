
import React, { useState, useEffect } from 'react';
import { BarChart3, Users, Clock, Activity, RefreshCw, ArrowUpRight } from 'lucide-react';

const Reports = () => {
  const [stats, setStats] = useState({ patients: 0, doctors: 0, receptionists: 0 });
  const [isLoading, setIsLoading] = useState(true);

  // Theme configuration for consistent UI
  const theme = { 
    bg: "#f8fafc", 
    accent: "#4f46e5", 
    textMain: "#1e293b", 
    card: "#ffffff" 
  };

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        setIsLoading(true);
        // 1. Fetching real patient data from your Spring Boot backend
        const response = await fetch('http://localhost:8081/api/patients');
        
        if (!response.ok) throw new Error("Backend connection failed");
        
        const patientsData = await response.json();
        
        // 2. Update stats: Real data for patients, LocalStorage for others
        setStats({
          patients: patientsData.length || 0,
          doctors: JSON.parse(localStorage.getItem('doctors') || "[]").length,
          receptionists: JSON.parse(localStorage.getItem('receptionists') || "[]").length
        });
      } catch (error) {
        console.warn("Backend not reached, using local fallback:", error);
        // Fallback to ensure the screen isn't empty during demo
        setStats({
          patients: JSON.parse(localStorage.getItem('patients') || "[]").length,
          doctors: JSON.parse(localStorage.getItem('doctors') || "[]").length,
          receptionists: JSON.parse(localStorage.getItem('receptionists') || "[]").length
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchCounts();
  }, []);

  const kpis = [
    { label: "Total Patients", value: stats.patients, icon: Users, color: "#4f46e5" },
    { label: "Active Doctors", value: stats.doctors, icon: Activity, color: "#10b981" },
    { label: "Front Desk Staff", value: stats.receptionists, icon: Clock, color: "#f59e0b" },
  ];

  if (isLoading) return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <RefreshCw className="text-primary mb-2 animate-spin" size={40} />
      <p className="text-muted fw-bold">Syncing Live Intelligence...</p>
    </div>
  );

  return (
    <div style={{ backgroundColor: theme.bg, minHeight: '100vh', padding: '50px', marginLeft: '260px' }}>
      {/* Header Section */}
      <div className="mb-5">
        <h1 className="fw-black display-6">Analytics <span style={{ color: theme.accent }}>Intelligence</span></h1>
        <p className="text-muted">Real-time data synchronization with HMS Core Modules.</p>
      </div>

      {/* KPI Cards Row */}
      <div className="row g-4">
        {kpis.map((kpi, i) => (
          <div key={i} className="col-md-4">
            <div className="p-4 shadow-sm border-0" style={{ backgroundColor: theme.card, borderRadius: '24px' }}>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="p-3 rounded-4" style={{ backgroundColor: `${kpi.color}15`, color: kpi.color }}>
                  <kpi.icon size={24} />
                </div>
                <ArrowUpRight className="text-success" size={20} />
              </div>
              <h6 className="text-uppercase text-muted fw-bold small mb-1" style={{ fontSize: '11px', letterSpacing: '1px' }}>{kpi.label}</h6>
              <h2 className="fw-bold m-0">{kpi.value}</h2>
            </div>
          </div>
        ))}
      </div>
      
      {/* System Insights Section */}
      <div className="mt-5 p-5 bg-white rounded-5 shadow-sm border">
        <h5 className="fw-bold mb-4 d-flex align-items-center">
          <BarChart3 className="me-2 text-primary" /> Live Infrastructure Workload
        </h5>
        <p className="text-muted fs-5">
          The HMS engine is currently monitoring <b>{
            (Number(stats.patients) || 0) + 
            (Number(stats.doctors) || 0) + 
            (Number(stats.receptionists) || 0)
          }</b> active registry entries.
        </p>
        <div className="progress mt-4" style={{ height: '8px', borderRadius: '10px' }}>
          <div className="progress-bar" role="progressbar" style={{ width: '75%', backgroundColor: theme.accent }}></div>
        </div>
        <small className="text-muted mt-2 d-block">System Load: Optimized</small>
      </div>
    </div>
  );
};

export default Reports;