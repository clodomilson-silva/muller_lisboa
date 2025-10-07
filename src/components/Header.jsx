import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/logo.png" alt="Muller & Lisboa" className="logo-img" />
            <span className="logo-text">Muller & Lisboa</span>
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
              <li><a href="#servicos" onClick={() => setIsMenuOpen(false)}>Serviços</a></li>
              <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfólio</a></li>
              <li><a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="tel:+5511999999999" className="phone-btn">
              <Phone size={18} />
              <span>(11) 99999-9999</span>
            </a>
            
            <button className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;