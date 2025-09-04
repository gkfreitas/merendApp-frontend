// src/Testimonials.jsx
import React from "react";
import "./App.css"; // mantém a identidade visual

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana Souza",
      role: "Gestora Escolar",
      text: "O MerendApp facilitou muito a gestão da merenda na nossa escola. Agora conseguimos planejar melhor as compras e evitar desperdícios."
    },
    {
      name: "Carlos Lima",
      role: "Distribuidor de Alimentos",
      text: "Com o MerendApp, encontrei novas escolas interessadas nos meus produtos. A plataforma é simples e me ajuda a expandir minha rede de clientes."
    },
    {
      name: "Fernanda Oliveira",
      role: "Secretária de Educação Municipal",
      text: "A transparência e a praticidade do MerendApp nos permitem acompanhar todo o fluxo de distribuição de alimentos. É uma solução inovadora para o setor público."
    }
  ];

  return (
    <section className="testimonials-section py-5 bg-light" id="testimonials">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Depoimentos</h2>
          <p className="text-muted">
            Veja o que nossos usuários dizem sobre o MerendApp
          </p>
        </div>
        <div className="row g-4">
          {testimonials.map((t, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <div className="card-body d-flex flex-column">
                  <p className="card-text mb-4">“{t.text}”</p>
                  <div className="mt-auto">
                    <h6 className="mb-0 fw-bold">{t.name}</h6>
                    <small className="text-muted">{t.role}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
