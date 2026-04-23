import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [jsonUser, setJsonUser] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 cria objeto JSON do usuário
    const user = {
      name,
      email,
      password
    };

    // salva no localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // exibe no console
    console.log("USUÁRIO CADASTRADO (JSON):", user);

    // salva para mostrar na tela também
    setJsonUser(user);

    // redireciona (opcional)
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          width: 380,
          padding: 30,
          background: "#fff",
          borderRadius: 10,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          textAlign: "center"
        }}
      >
        <h2>Criar conta</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Cadastrar
          </button>
        </form>

        {/* 🔥 EXIBIÇÃO DO JSON NA TELA */}
        {jsonUser && (
          <div
            style={{
              marginTop: 20,
              textAlign: "left",
              background: "#f0f0f0",
              padding: 10,
              borderRadius: 8,
              fontSize: 12
            }}
          >
            <strong>JSON gerado:</strong>
            <pre>{JSON.stringify(jsonUser, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: 10,
  marginBottom: 10,
  borderRadius: 6,
  border: "1px solid #ddd"
};

const buttonStyle = {
  width: "100%",
  padding: 10,
  background: "#4285F4",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  cursor: "pointer"
};