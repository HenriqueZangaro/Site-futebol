import React from 'react';
import { useParams } from 'react-router-dom';

const teams = [
  { id: 1, name: 'Time A', description: 'Descrição do Time A' },
  { id: 2, name: 'Time B', description: 'Descrição do Time B' },
  { id: 3, name: 'Time C', description: 'Descrição do Time C' },
];

function TeamDetail() {
  const { id } = useParams();
  const team = teams.find(team => team.id === parseInt(id));

  return (
    <div>
      <h2>{team.name}</h2>
      <p>{team.description}</p>
    </div>
  );
}

export default TeamDetail;
