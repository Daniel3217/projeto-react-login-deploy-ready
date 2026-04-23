import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/");
    }
  }, [navigate]);

  const handleSuccess = (credentialResponse) => {
    try {
      const user = jwtDecode(credentialResponse.credential);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #eef2f3, #cfd9df)",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          width: 380,
          padding: 40,
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
          textAlign: "center"
        }}
      >
        <h1 style={{ marginBottom: 25 }}>
          <span style={{ color: "#4285F4" }}>G</span>
          <span style={{ color: "#EA4335" }}>o</span>
          <span style={{ color: "#FBBC05" }}>o</span>
          <span style={{ color: "#4285F4" }}>g</span>
          <span style={{ color: "#34A853" }}>l</span>
          <span style={{ color: "#EA4335" }}>e</span>
        </h1>

        <p style={{ marginBottom: 25, color: "#666" }}>
          Faça login para continuar
        </p>

        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => console.log("Erro no login")}
        />
      </div>
    </div>
  );
}