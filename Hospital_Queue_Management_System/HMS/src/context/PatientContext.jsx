import { createContext, useContext, useState } from "react";

const PatientContext = createContext();

export function PatientProvider({ children }) {
  const [token, setToken] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [queue, setQueue] = useState([]);

  // 🔹 BOOK TOKEN
  const bookToken = (data) => {
    const newToken = {
      id: Date.now(),
      tokenNo: Math.floor(Math.random() * 1000),
      department: data.department,
      doctor: data.doctor,
      time: new Date().toLocaleTimeString(),
      position: 3,
      status: "Pending",
    };

    setToken(newToken);

    // 🔔 Notification
    setNotifications((prev) => [
      ...prev,
      { id: Date.now(), message: "Token booked successfully", time: new Date().toLocaleTimeString() },
    ]);
  };

  return (
    <PatientContext.Provider
      value={{
        token,
        setToken,
        notifications,
        setNotifications,
        queue,
        setQueue,
        bookToken,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
}

export const usePatient = () => useContext(PatientContext);