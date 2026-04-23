import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setUser(JSON.parse(data));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/#/login";
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    fontSize: 14,
    padding: "6px 10px",
    borderRadius: 6
  };

  return (
    <nav
      style={{
        padding: "12px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #eaeaea",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        fontFamily: "Arial"
      }}
    >
      {/* LOGO */}
      <div style={{ fontWeight: "bold", fontSize: 22 }}>
        <span style={{ color: "#4285F4" }}>G</span>
        <span style={{ color: "#EA4335" }}>o</span>
        <span style={{ color: "#FBBC05" }}>o</span>
        <span style={{ color: "#4285F4" }}>g</span>
        <span style={{ color: "#34A853" }}>l</span>
        <span style={{ color: "#EA4335" }}>e</span>
      </div>

      {/* LINKS */}
      <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/about">Dupla</Link>

        {/* 🔥 LOGIN + CADASTRO (GARANTIDO) */}
        {!user ? (
          <>
            <Link style={linkStyle} to="/login">Login</Link>
            <Link style={linkStyle} to="/register">Cadastro</Link>
          </>
        ) : (
          <>
            <span style={{ fontSize: 14, color: "#333" }}>
              👋 {user.name}
            </span>

            <button
              onClick={handleLogout}
              style={{
                background: "#EA4335",
                color: "#fff",
                border: "none",
                padding: "7px 14px",
                borderRadius: 8,
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Sair
            </button>
          </>
        )}
      </div>
    </nav>
  );
}