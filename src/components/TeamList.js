import React from 'react';
import { Link } from 'react-router-dom';

const teams = [
  { id: 'dragoes-do-norte', name: 'Dragões do Norte', image: '/images/dragons.png' },
  { id: 'leoes-da-serra', name: 'Leões da Serra', image: '/images/lions.png' },
  { id: 'aguias-do-sul', name: 'Águias do Sul', image: '/images/eagles.png' },
  { id: 'guerreiros-do-oeste', name: 'Guerreiros do Oeste', image: '/images/warriors.png' },
  { id: 'estrelas-do-leste', name: 'Estrelas do Leste', image: '/images/stars.png' },
  { id: 'falcoes-de-prata', name: 'Falcões de Prata', image: '/images/falcons.png' },
  { id: 'lobos-do-cerrado', name: 'Lobos do Cerrado', image: '/images/wolves.png' },
  { id: 'trovoes-do-vale', name: 'Trovões do Vale', image: '/images/thunders.png' },
  { id: 'panteras-negras', name: 'Panteras Negras', image: '/images/panthers.png' },
];

const TeamList = () => {
  return (
    <div className="team-list">
      <h2 className="headline">⚽ Bem-vindo ao Universo do Futebol! 🌟</h2>
      <p className="headline-subtitle">
        Explore os maiores times, suas conquistas e histórias emocionantes.
      </p>
      <ul>
        {teams.map((team) => (
          <li key={team.id} className="team-item">
            <Link to={`/team/${team.id}`}>
              <img src={team.image} alt={team.name} className="team-image" />
              <span>{team.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;