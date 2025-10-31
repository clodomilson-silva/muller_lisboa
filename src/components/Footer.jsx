import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo.png" alt="Muller & Lisboa" className="footer-logo-img" />
              <span className="footer-logo-text">Muller & Lisboa</span>
            </div>
            <p className="footer-description">
              Construindo o futuro com excelência há mais de 2 anos. 
              Sua construtora de confiança para projetos de construção civil e
              montagem industrial.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Serviços</h4>
            <ul className="footer-links">
              <li><a href="#servicos">Construção Residencial</a></li>
              <li><a href="#servicos">Construção Comercial</a></li>
              <li><a href="#servicos">Reformas e Ampliações</a></li>
              <li><a href="#servicos">Projetos Industriais</a></li>
              <li><a href="#portfolio">Portfólio</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Empresa</h4>
            <ul className="footer-links">
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#portfolio">Nossos Projetos</a></li>
              <li><a href="#contato">Contato</a></li>
              <li><a href="#">Trabalhe Conosco</a></li>
              <li><a href="#">Política de Privacidade</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <div className="footer-contact">
              <div className="contact-info-item">
                <Phone size={16} />
                <div>
                  <p>(51) 99006-5115</p>
                  <p>(51) 99792-0878</p>
                </div>
              </div>
              <div className="contact-info-item">
                <Mail size={16} />
                <div>
                  <p>mullerelisboaconstrutora@gmail.com</p>
                </div>
              </div>
              <div className="contact-info-item">
                <MapPin size={16} />
                <div>
                  <p>Nestor Bunecker, 362</p>
                  <p>Santa Cruz do Sul - RS, 96821-280</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Muller & Lisboa Construtora. Todos os direitos reservados.</p>
            <p>Desenvolvido com TechVerse Solutions, para construir o futuro</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;