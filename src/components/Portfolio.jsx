import React from 'react';
import { Download, FileText, Building, Calendar, Award } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const handleDownloadPDF = () => {
    // Aqui você colocará o caminho do seu PDF quando adicionar o arquivo
    const pdfPath = '/portfolio-muller-lisboa.pdf';
    
    // Cria um elemento de link temporário para forçar o download
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Portfolio-Muller-Lisboa.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const portfolioStats = [
    {
      icon: <Building size={32} />,
      number: "200+",
      label: "Projetos Executados"
    },
    {
      icon: <Calendar size={32} />,
      number: "2+",
      label: "Anos de Experiência"
    },
    {
      icon: <Award size={32} />,
      number: "100%",
      label: "Clientes Satisfeitos"
    }
  ];

  return (
    <section id="portfolio" className="portfolio section-padding bg-light">
      <div className="container">
        <div className="section-header text-center">
          <h2>Nosso <span className="text-primary">Portfólio</span></h2>
          <p className="section-description">
            Conheça nossos principais projetos realizados com excelência e dedicação. 
            Baixe nosso portfólio completo e veja a qualidade do nosso trabalho.
          </p>
        </div>

        <div className="portfolio-content">
          <div className="portfolio-download-section">
            <div className="pdf-preview">
              <div className="pdf-icon">
                <FileText size={80} />
              </div>
              <div className="pdf-info">
                <h3>Portfólio Completo</h3>
                <p>Muller & Lisboa Construtora</p>
                <div className="pdf-details">
                  <span>📄 Documento PDF</span>
                  <span>📊 Projetos e Realizações</span>
                  <span>🏗️ Construção Civil e Industrial</span>
                </div>
              </div>
            </div>

            <button className="download-btn" onClick={handleDownloadPDF}>
              <Download size={24} />
              Baixar Portfólio PDF
            </button>

            <p className="download-description">
              Nosso portfólio contém informações detalhadas sobre nossos principais projetos, 
              incluindo construções residenciais, comerciais e industriais realizadas nos últimos anos.
            </p>
          </div>

          <div className="portfolio-stats">
            <h3>Nossos Números</h3>
            <div className="stats-grid">
              {portfolioStats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                  <h4>{stat.number}</h4>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="portfolio-cta text-center">
          <h3>Interessado em nossos projetos?</h3>
          <p>Entre em contato conosco e vamos conversar sobre o seu próximo empreendimento.</p>
          <a href="#contato" className="cta-button">
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;