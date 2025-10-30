import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configure suas credenciais EmailJS em: https://www.emailjs.com/
      // SERVICE_ID, TEMPLATE_ID e PUBLIC_KEY você obterá ao criar sua conta
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',      // Substitua pelo seu Service ID
        'YOUR_TEMPLATE_ID',     // Substitua pelo seu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: 'mullerlisboaconstrutora@gmail.com'
        },
        'YOUR_PUBLIC_KEY'       // Substitua pela sua Public Key
      );

      console.log('Email enviado com sucesso:', result.text);
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      
      // Limpa o formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      alert('Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="contact section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2>Entre em <span className="text-primary">Contato</span></h2>
          <p className="section-description">
            Pronto para começar seu projeto? Entre em contato conosco e vamos transformar 
            suas ideias em realidade.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Informações de Contato</h3>
            <p>
              Estamos sempre disponíveis para esclarecer suas dúvidas e fornecer 
              orçamentos personalizados para seu projeto.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-details">
                  <h4>Telefone</h4>
                  <p>(51) 99006-5115</p>
                  <p>(51) 99792-0878</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-details">
                  <h4>E-mail</h4>
                  <p>mullerelisboaconstrutora@gmail.com</p>
                  <p>orcamento@mullerlisboa.com.br</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-details">
                  <h4>Endereço</h4>
                  <p>Nestor Bunecker, 362</p>
                  <p>Santa Cruz do Sul - RS, 96821-280</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Clock size={24} />
                </div>
                <div className="contact-details">
                  <h4>Horário de Funcionamento</h4>
                  <p>Segunda à Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>

            <div className="whatsapp-cta">
              <h4>Atendimento via WhatsApp</h4>
              <p>Para maior agilidade, entre em contato pelo WhatsApp</p>
              <a href="https://wa.me/5551990065115" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
                <Phone size={20} />
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <h3>Solicite seu Orçamento</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Tipo de Projeto</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="residential">Residencial</option>
                    <option value="commercial">Comercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="reform">Reforma/Ampliação</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Descreva seu projeto, localização, prazo estimado e outras informações relevantes..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                <Send size={18} />
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;