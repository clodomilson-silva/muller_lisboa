import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Construindo o <span className="text-primary">Futuro</span> com Excelência</h1>
            <p className="hero-description">
              Há mais de 2 anos no mercado, a Muller & Lisboa oferece soluções completas 
              em construção civil e montagem industrial, sempre com qualidade, pontualidade e confiança.
            </p>
            
            <div className="hero-features">
              <div className="feature-item">
                <CheckCircle size={20} className="feature-icon" />
                <span>Construção Civil</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} className="feature-icon" />
                <span>Montagem Industrial</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} className="feature-icon" />
                <span>Reformas e Ampliações</span>
              </div>
            </div>

            <div className="hero-actions">
              <button className="cta-primary">
                Solicitar Orçamento
                <ArrowRight size={18} />
              </button>
              <button className="cta-secondary">
                Ver Portfólio
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-placeholder">
              <div className="floating-card card-1">
                <h4>+200</h4>
                <p>Projetos Entregues</p>
              </div>
              <div className="floating-card card-2">
                <h4>2+</h4>
                <p>Anos de Experiência</p>
              </div>
              <div className="floating-card card-3">
                <h4>100%</h4>
                <p>Clientes Satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;