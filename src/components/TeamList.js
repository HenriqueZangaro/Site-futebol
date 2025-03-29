import React from 'react';
import { Link } from 'react-router-dom';

const teams = [
  { id: 1, name: 'Time A' },
  { id: 2, name: 'Time B' },
  { id: 3, name: 'Time C' },
];

function TeamList() {
  return (
    <div>
      <h2>Lista de Times</h2>
      <ul>
        {teams.map(team => (
          <li key={team.id}>
            <Link to={`/team/${team.id}`}>{team.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamList;
