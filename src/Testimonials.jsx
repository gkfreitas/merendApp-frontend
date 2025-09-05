import React, { useEffect, useRef } from "react";
import { Carousel } from "bootstrap";
import "./App.css";

export default function Testimonials() {
  const carouselRef = useRef(null);

  const testimonials = [
    {
      name: "Ana Souza",
      role: "Gestora Escolar",
      text:
        "O MerendApp facilitou muito a gestão da merenda na nossa escola. Agora conseguimos planejar melhor as compras e evitar desperdícios."
    },
    {
      name: "Carlos Lima",
      role: "Distribuidor de Alimentos",
      text:
        "Com o MerendApp, encontrei novas escolas interessadas nos meus produtos. A plataforma é simples e me ajuda a expandir minha rede de clientes."
    },
    {
      name: "Fernanda Oliveira",
      role: "Secretária de Educação Municipal",
      text:
        "A transparência e a praticidade do MerendApp nos permitem acompanhar todo o fluxo de distribuição de alimentos. É uma solução inovadora para o setor público."
    }
  ];

  useEffect(() => {
    if (!carouselRef.current) return;
    const instance = Carousel.getOrCreateInstance(carouselRef.current, {
      interval: 4000,   
      ride: "carousel", 
      pause: false,    
      wrap: true,
      keyboard: true,
      touch: true
    });
    return () => instance.dispose();
  }, []);

  return (
    <section className="testimonials-section py-5 bg-light" id="testimonials">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Depoimentos</h2>
          <p className="text-muted">Veja o que nossos usuários dizem sobre o MerendApp</p>
        </div>

        <div
          id="testimonialsCarousel"
          className="carousel slide"
          ref={carouselRef}
        >
          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#testimonialsCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="carousel-inner">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="d-flex justify-content-center">
                  <div className="card shadow-sm border-0 rounded-4 w-75">
                    <div className="card-body text-center">
                      <p className="card-text fs-5 fst-italic">“{t.text}”</p>
                      <h6 className="mt-4 mb-0 fw-bold">{t.name}</h6>
                      <small className="text-muted">{t.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
