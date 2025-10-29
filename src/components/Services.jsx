import React from 'react';
import { Home, Building, Wrench, Hammer } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Home size={40} />,
      title: "Construção Civil",
      description: "Casas, sobrados e condomínios residenciais com acabamento de primeira qualidade.",
      features: ["Projetos personalizados", "Acompanhamento técnico", "Garantia de qualidade"]
    },
    
    {
      icon: <Wrench size={40} />,
      title: "Reformas e Ampliações",
      description: "Renovação e ampliação de espaços existentes com máxima eficiência.",
      features: ["Reforma completa", "Ampliações seguras", "Modernização"]
    },
    {
      icon: <Hammer size={40} />,
      title: "Projetos Industriais",
      description: "Construções industriais, galpões e estruturas especializadas.",
      features: ["Estruturas robustas", "Normas técnicas", "Segurança industrial"]
    }
  ];

  return (
    <section id="servicos" className="services section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2>Nossos <span className="text-primary">Serviços</span></h2>
          <p className="section-description">
            Oferecemos soluções completas em construção civil, desde projetos residenciais 
            até grandes empreendimentos comerciais e industriais.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Precisa de um projeto personalizado?</h3>
            <p>Nossa equipe está pronta para transformar suas ideias em realidade.</p>
            <a href="#contato" className="cta-button">
              Solicitar Orçamento Gratuito
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;