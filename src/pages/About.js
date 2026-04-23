import { useEffect, useState } from "react";
import fotoDebora from "../assets/foto-debora.jpeg";
import fotoDaniel from "../assets/fotoDaniel.jpeg";
export default function About() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  const integrantes = [
    {
      nome: "Daniel Souza",
      formacao: "Engenharia de Software", // ✅ corrigido
      interesses: "React, Frontend, UI/UX",
      habilidades: "JavaScript, HTML, CSS, React",
      img: fotoDaniel,
      cor: "#4285F4"
    },

   {
  nome: "Débora",
  formacao: "Estudante de Tecnologia",
  interesses: "Design, Web, Aplicações modernas",
  habilidades: "HTML, CSS, JavaScript",
  img: fotoDebora, // 🔥 aqui
  cor: "#EA4335"
}
  ];

  return (
    <div
      style={{
        padding: 40,
        textAlign: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4285F4, #34A853)"
      }}
    >
      <h1 style={{ color: "#fff", marginBottom: 40 }}>
        👥 Apresentação da Dupla
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 30,
          flexWrap: "wrap"
        }}
      >
        {integrantes.map((p, i) => (
          <div
            key={i}
            style={{
              width: 280,
              padding: 25,
              borderRadius: 15,
              background: "#fff",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              transition: "0.3s"
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-10px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <img
              src={p.img || fotoDebora} // fallback
              alt="perfil"
              style={{
                width: 100,
                borderRadius: "50%",
                marginBottom: 15
              }}
            />

            <h2 style={{ color: p.cor }}>{p.nome}</h2>

            <p><strong>🎓 Formação:</strong> {p.formacao}</p>
            <p><strong>💡 Interesses:</strong> {p.interesses}</p>
            <p><strong>⚙️ Habilidades:</strong> {p.habilidades}</p>
          </div>
        ))}
      </div>
    </div>
  );
}