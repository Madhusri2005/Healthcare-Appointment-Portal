
import { useEffect, useState } from "react";

export default function TokenDisplay() {
  const [tokens, setTokens] = useState([]);
  const departments = ["General Medicine", "Cardiology", "Orthopedics", "Pediatrics", "Neurology"];

  useEffect(() => {
    const fetchQueue = async () => {
      try {
        const res = await fetch('http://localhost:8081/api/patients');
        if (res.ok) {
          const data = await res.json();
          setTokens(data.filter(p => p.status !== "Completed"));
        }
      } catch (err) { console.error("Fetch failed", err); }
    };
    fetchQueue();
    const interval = setInterval(fetchQueue, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    // min-vh-100 allows the page to grow and scroll
    <div className="min-vh-100 text-white d-flex flex-column" style={{ backgroundColor: '#0f172a', fontFamily: 'sans-serif' }}>
      
      {/* STICKY HEADER */}
      <div className="p-3 sticky-top shadow-lg d-flex justify-content-between align-items-center" 
           style={{ backgroundColor: '#1e293b', borderBottom: '4px solid #3b82f6', zIndex: 1000 }}>
        <div>
          <h2 className="fw-black m-0 d-flex align-items-center" style={{ letterSpacing: '1px' }}>
            <span className="text-primary me-2">🏥</span> HMS LIVE <span className="text-primary ms-2">DISPLAY</span>
          </h2>
        </div>
        <div className="d-flex align-items-center gap-4">
            <div className="badge bg-danger animate-pulse px-3 py-2">LIVE QUEUE</div>
            <div className="fs-3 fw-bold font-monospace text-info">{new Date().toLocaleTimeString()}</div>
        </div>
      </div>

      {/* GRID CONTAINER - Allowing natural scroll */}
      <div className="container-fluid p-4">
        <div className="row g-4">
          {departments.map((dept) => {
            const deptTokens = tokens.filter(t => 
              t.department?.trim().toLowerCase() === dept.toLowerCase()
            );
            const current = deptTokens[0];
            const next = deptTokens[1];

            return (
              <div key={dept} className="col-12 col-xl-6">
                <div className="card border-0 shadow-lg" style={{ backgroundColor: '#1e293b', borderRadius: '20px', overflow: 'hidden' }}>
                  
                  {/* DEPT HEADER */}
                  <div className="p-3 text-center fw-bold" style={{ backgroundColor: '#334155', color: '#60a5fa', fontSize: '1.2rem', letterSpacing: '2px' }}>
                    {dept.toUpperCase()}
                  </div>
                  
                  <div className="d-flex" style={{ minHeight: '300px' }}>
                    {/* BIG NOW SERVING */}
                    <div className="col-8 d-flex flex-column justify-content-center align-items-center position-relative" 
                         style={{ background: 'linear-gradient(145deg, #1e293b, #0f172a)', borderRight: '1px solid #334155' }}>
                      <span className="badge bg-primary position-absolute top-0 start-0 m-3 opacity-75">CURRENT</span>
                      
                      <div className="display-1 fw-black text-warning mb-0" 
                           style={{ fontSize: '8rem', textShadow: '0 0 40px rgba(234,179,8,0.4)', lineHeight: '1' }}>
                        {current?.token || "---"}
                      </div>
                      <div className="fs-2 text-white opacity-90 mt-2 fw-light">{current?.name || "Waiting for Patient"}</div>
                    </div>

                    {/* NEXT IN LINE */}
                    <div className="col-4 p-4 d-flex flex-column justify-content-center" style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)' }}>
                      <h6 className="text-info fw-bold mb-4 small text-uppercase" style={{ letterSpacing: '2px' }}>Next in Line</h6>
                      {next ? (
                        <div className="p-3 rounded-4" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                          <div className="fw-bold text-info fs-3">{next.token}</div>
                          <div className="text-muted text-truncate">{next.name}</div>
                        </div>
                      ) : (
                        <div className="text-center py-4 rounded-4" style={{ border: '2px dashed #334155' }}>
                          <span className="text-muted small">No Upcoming</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* STICKY FOOTER MARQUEE */}
      <div className="mt-auto sticky-bottom">
        <div className="bg-primary p-2 shadow-lg">
          <marquee className="fw-bold text-white fs-5">
             📢 ATTENTION: PLEASE PROCEED TO YOUR RESPECTIVE DEPARTMENTS WHEN YOUR TOKEN APPEARS. 
             &nbsp;&nbsp; | &nbsp;&nbsp; TOTAL ACTIVE QUEUE: <span className="text-warning">{tokens.length}</span> PATIENTS 
             &nbsp;&nbsp; | &nbsp;&nbsp; THANK YOU FOR YOUR PATIENCE.
          </marquee>
        </div>
      </div>

      <style>{`
        .fw-black { font-weight: 900; }
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}