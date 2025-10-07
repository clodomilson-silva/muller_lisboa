import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [currentFilter, setCurrentFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'residential', label: 'Residencial' },
    { id: 'commercial', label: 'Comercial' },
    { id: 'industrial', label: 'Industrial' }
  ];

  const projects = [
    {
      id: 1,
      title: "Residencial Jardim das Flores",
      category: "residential",
      description: "Condomínio residencial com 50 unidades, área de lazer completa.",
      area: "2.500m²",
      year: "2023"
    },
    {
      id: 2,
      title: "Centro Comercial Plaza",
      category: "commercial",
      description: "Complexo comercial moderno com 30 lojas e escritórios.",
      area: "4.200m²",
      year: "2023"
    },
    {
      id: 3,
      title: "Galpão Industrial TechPark",
      category: "industrial",
      description: "Galpão industrial com estrutura metálica e sistema automatizado.",
      area: "8.000m²",
      year: "2022"
    },
    {
      id: 4,
      title: "Residência Moderna Alphaville",
      category: "residential",
      description: "Casa de alto padrão com design contemporâneo e sustentável.",
      area: "450m²",
      year: "2023"
    },
    {
      id: 5,
      title: "Edifício Comercial Downtown",
      category: "commercial",
      description: "Prédio comercial de 12 andares no centro da cidade.",
      area: "6.500m²",
      year: "2022"
    },
    {
      id: 6,
      title: "Fábrica Alimentícia EcoFood",
      category: "industrial",
      description: "Planta industrial para processamento de alimentos orgânicos.",
      area: "5.200m²",
      year: "2024"
    }
  ];

  const filteredProjects = currentFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === currentFilter);

  return (
    <section id="portfolio" className="portfolio section-padding bg-light">
      <div className="container">
        <div className="section-header text-center">
          <h2>Nosso <span className="text-primary">Portfólio</span></h2>
          <p className="section-description">
            Conheça alguns dos nossos principais projetos realizados com excelência e dedicação.
          </p>
        </div>

        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${currentFilter === filter.id ? 'active' : ''}`}
              onClick={() => setCurrentFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-image">
                <div className="image-placeholder">
                  <span>Projeto {project.title}</span>
                </div>
                <div className="portfolio-overlay">
                  <div className="project-info">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="project-details">
                      <span>Área: {project.area}</span>
                      <span>Ano: {project.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta text-center">
          <h3>Gostou dos nossos projetos?</h3>
          <p>Entre em contato e vamos conversar sobre o seu próximo empreendimento.</p>
          <button className="cta-button">
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;