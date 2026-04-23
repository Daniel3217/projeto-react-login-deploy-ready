import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4285F4, #34A853)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {user ? (
        <div
          style={{
            background: "#fff",
            padding: 40,
            borderRadius: 20,
            textAlign: "center",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            width: 300,
            transition: "0.3s"
          }}
        >
          <img
            src={user.picture}
            alt="perfil"
            style={{
              width: 120,
              borderRadius: "50%",
              marginBottom: 20
            }}
          />

          <h2 style={{ color: "#4285F4" }}>{user.name}</h2>

          <p style={{ color: "#555", marginBottom: 20 }}>
            Você está logado com sucesso 🎉
          </p>

          <div
            style={{
              height: 5,
              width: "100%",
              background: "linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853)",
              borderRadius: 10
            }}
          />
        </div>
      ) : (
        <div style={{ color: "#fff", fontSize: 20 }}>
          Você não está logado
        </div>
      )}
    </div>
  );
}