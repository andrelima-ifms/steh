import React, { useState } from 'react';
import './Contato.css';

const Contato: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  return (
    <div className='contato'>
      <h2>Página de Contato</h2>
      <p>Entre em contato comigo:</p>
      <ul>
        <li>Email: stefanny.rodrigues@estudante.ifms.edu.br</li>
        <li>Telefone: (67) 985647-4521</li>
      </ul>
      <p>Ou preencha o formulário abaixo:</p>

      <form>
        <div className='butão'>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          {nome && <p> {nome}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {email && <p> {email}</p>}
        </div>
        <div>
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
          {mensagem && <p> {mensagem}</p>}
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Contato;
