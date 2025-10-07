import React from 'react';
import { Award, Users, Calendar, Target } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    {
      icon: <Calendar size={32} />,
      number: "15+",
      label: "Anos de Experiência"
    },
    {
      icon: <Users size={32} />,
      number: "200+",
      label: "Projetos Entregues"
    },
    {
      icon: <Award size={32} />,
      number: "100%",
      label: "Clientes Satisfeitos"
    },
    {
      icon: <Target size={32} />,
      number: "24h",
      label: "Atendimento Rápido"
    }
  ];

  return (
    <section id="sobre" className="about section-padding">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Sobre a <span className="text-primary">Muller & Lisboa</span></h2>
            <p className="about-description">
              Fundada com o compromisso de entregar excelência em cada projeto, a Muller & Lisboa 
              é uma empresa especializada em construção civil que atende diversos segmentos do mercado.
            </p>
            
            <div className="about-features">
              <div className="feature-block">
                <h4>Nossa Missão</h4>
                <p>
                  Transformar sonhos em realidade através de construções de qualidade superior, 
                  sempre respeitando prazos e orçamentos estabelecidos.
                </p>
              </div>
              
              <div className="feature-block">
                <h4>Nossa Visão</h4>
                <p>
                  Ser reconhecida como referência em construção civil na região, destacando-se 
                  pela inovação, sustentabilidade e satisfação do cliente.
                </p>
              </div>
              
              <div className="feature-block">
                <h4>Nossos Valores</h4>
                <p>
                  Transparência, qualidade, pontualidade e compromisso com a satisfação total 
                  de nossos clientes em todos os projetos desenvolvidos.
                </p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <div className="about-img-placeholder">
                <span>Imagem da Equipe</span>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;