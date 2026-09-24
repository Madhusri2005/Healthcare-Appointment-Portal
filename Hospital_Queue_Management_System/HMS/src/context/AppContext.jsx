
import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [allPatients, setAllPatients] = useState([]);
  const [doctors, setDoctors] = useState([]); // Added for Admin Staff Management
  const [doctorDept, setDoctorDept] = useState(localStorage.getItem("doctorDept") || "");

  // --- SYNC ENGINE ---
  const fetchAllData = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/patients');
      if (response.ok) {
        const data = await response.json();
        setAllPatients(data);
      }
    } catch (err) { 
      console.error("Backend Connection Failed. Is IntelliJ running?"); 
      // FALLBACK: If backend fails, try to load from localStorage so Admin isn't blank
      const localData = localStorage.getItem("patients");
      if (localData) setAllPatients(JSON.parse(localData));
    }
  };

  useEffect(() => {
    fetchAllData();
    const interval = setInterval(fetchAllData, 3000); 
    return () => clearInterval(interval);
  }, []);

  // Helper for sorting tokens
  const getTokenNum = (t) => {
    if (!t) return 0;
    const parts = t.split('-');
    return parseInt(parts[parts.length - 1]) || 0;
  };

  // --- DATA FOR DOCTORS (Filtered by Department) ---
  const patients = allPatients
    .filter(p => 
      p.department?.toLowerCase() === doctorDept?.toLowerCase() && 
      p.status === "Waiting"
    )
    .sort((a, b) => getTokenNum(a.token) - getTokenNum(b.token));

  const currentPatient = allPatients.find(p => 
    p.department?.toLowerCase() === doctorDept?.toLowerCase() && 
    p.status === "In Consultation"
  ) || null;

  const doctorCompleted = allPatients.filter(p => 
    p.department?.toLowerCase() === doctorDept?.toLowerCase() && 
    p.status === "Completed"
  );

  // --- DATA FOR ADMIN (Unfiltered - Total Hospital View) ---
  const adminStats = {
    total: allPatients.length,
    pending: allPatients.filter(p => p.status === "Waiting").length,
    active: allPatients.filter(p => p.status === "In Consultation" || p.status === "Calling").length,
    finished: allPatients.filter(p => p.status === "Completed").length
  };

  // --- ACTIONS ---
  const updateStatus = async (token, newStatus) => {
  try {
    const response = await fetch(`http://localhost:8081/api/patients/${token}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      // Ensure the status is sent as a proper JSON string
      body: JSON.stringify(newStatus) 
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Server Error Detail:", errorData);
      return;
    }
    
    // Refresh your local state here...
  } catch (err) {
    console.error("Fetch failed:", err);
  }
};

  const callNext = async () => {
    if (patients.length === 0) return alert("No waiting patients");
    if (currentPatient) return alert("Finish current session first");
    await updateStatus(patients[0].token, "In Consultation");
  };

  const completePatient = async () => {
    if (currentPatient) await updateStatus(currentPatient.token, "Completed");
  };

  return (
    <AppContext.Provider value={{ 
      // Doctor Data
      patients, 
      currentPatient, 
      completed: doctorCompleted, 
      
      // Admin Data (The fix for your Zeros)
      allPatients, 
      adminStats,
      doctors,
      setDoctors,

      // Controls
      callNext, 
      completePatient, 
      fetchAllData,
      updateStatus,
      doctorDept, 
      setDoctorDept 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);