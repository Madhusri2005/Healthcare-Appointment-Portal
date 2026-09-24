
export default function AdminSidebar() {
  const theme = {
    bg: "#011a13",
    card: "#022c22",
    accent: "#10b981",
    border: "rgba(16, 185, 129, 0.15)"
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white"
      style={{
        width: "260px",
        height: "100vh",
        position: "fixed",
        backgroundColor: theme.bg, // Matches your Admin Pages
        borderRight: `1px solid ${theme.border}`,
        left: "0",
        top: "0"
      }}
    >
      {/* ... rest of the code ... */}
      {/* Update NavLink style */}
      <NavLink
        to={item.path}
        className={({ isActive }) => 
          `nav-link d-flex align-items-center gap-2 p-2 mb-2 ${isActive ? 'text-dark' : 'text-white-50'}`
        }
        style={({ isActive }) => ({
          backgroundColor: isActive ? theme.accent : 'transparent',
          borderRadius: '12px',
          fontWeight: isActive ? '800' : '400'
        })}
      >
        <i className={`bi ${item.icon}`}></i> {item.title}
      </NavLink>
    </div>
  );
}