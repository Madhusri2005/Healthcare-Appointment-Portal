
import { useEffect, useState } from "react";

export default function MyToken() {
  const [tokenData, setTokenData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("tokenData");

    if (storedData) {
      setTokenData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        <h2 style={styles.title}>🎟️ My Token</h2>

        {tokenData ? (
          <div style={styles.box}>

            <p><b>Token:</b> {tokenData.token}</p>
            <p><b>Name:</b> {tokenData.name}</p>
            <p><b>Department:</b> {tokenData.department}</p>
            <p><b>Queue Position:</b> {tokenData.queuePosition}</p>
            <p><b>Estimated Time:</b> {tokenData.estimatedTime}</p>
            <p><b>Created At:</b> {tokenData.createdAt}</p>

            <p>
              <b>Status:</b>{" "}
              <span style={{ color: "green", fontWeight: "bold" }}>
                {tokenData.status}
              </span>
            </p>

          </div>
        ) : (
          <div style={styles.empty}>
            🚫 No Token Booked Yet
          </div>
        )}

      </div>
    </div>
  );
}

/* 🎨 STYLES */
const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#f4f6fb",
    padding: "20px",
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    background: "#fff",
    padding: "25px",
    borderRadius: "14px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
  },

  box: {
    padding: "15px",
    borderRadius: "10px",
    background: "#e3f2fd",
  },

  empty: {
    textAlign: "center",
    padding: "20px",
    color: "#888",
    fontWeight: "bold",
  },
};