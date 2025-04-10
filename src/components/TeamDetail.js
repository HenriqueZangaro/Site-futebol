import React from 'react';
import { useParams } from 'react-router-dom';

const teams = [
  {
    id: 'dragoes-do-norte',
    name: 'Dragões do Norte',
    image: '/images/dragons.png',
    history: `Fundado em 1920, o Dragões do Norte nasceu em uma pequena vila costeira, onde pescadores se reuniam para jogar futebol após longos dias no mar. 
    O clube cresceu rapidamente, conquistando o coração da região e se tornando um símbolo de força e união. Durante a década de 1980, o time viveu sua era de ouro, 
    vencendo campeonatos consecutivos e revelando jogadores que se tornaram ícones do futebol nacional. Em 2000, protagonizaram uma das maiores viradas da história do futebol, 
    conquistando o título continental nos minutos finais.`,
    titles: [
      'Campeonato Nacional: 12 vezes',
      'Copa Nacional: 9 vezes',
    ],
    achievements: 'Conquistaram o título continental em 2000 com uma virada histórica nos últimos minutos.',
    stadium: 'Estádio dos Dragões, com capacidade para 60.000 torcedores.',
  },
  {
    id: 'leoes-da-serra',
    name: 'Leões da Serra',
    image: '/images/lions.png',
    history: `Criado em 1935 por um grupo de mineiros, o Leões da Serra representa a força e a resistência de sua região montanhosa. 
    O clube começou jogando em campos improvisados, mas rapidamente ganhou notoriedade por sua garra e determinação. 
    Durante a década de 1970, o time ficou conhecido como "A Muralha da Serra" devido à sua defesa impenetrável. 
    Em 1985, fizeram história ao vencer o campeonato nacional sem sofrer um único gol, um feito que permanece inigualável até hoje.`,
    titles: [
      'Campeonato Nacional: 8 vezes',
      'Copa Nacional: 6 vezes',
    ],
    achievements: 'Conhecidos por sua defesa impenetrável, venceram o campeonato nacional de 1985 sem sofrer gols.',
    stadium: 'Arena da Serra, com capacidade para 45.000 torcedores.',
  },
  {
    id: 'aguias-do-sul',
    name: 'Águias do Sul',
    image: '/images/eagles.png',
    history: `Fundado em 1940, o Águias do Sul começou como um time escolar, mas rapidamente se tornou um dos clubes mais respeitados do país. 
    Conhecidos por seu estilo de jogo ofensivo e veloz, o time ganhou o apelido de "Asas do Futebol". 
    Em 2010, protagonizaram uma campanha histórica no campeonato continental, vencendo todos os jogos e se consagrando campeões invictos. 
    A torcida, conhecida como "Os Voadores", é uma das mais apaixonadas e vibrantes do país.`,
    titles: [
      'Campeonato Nacional: 10 vezes',
      'Copa Nacional: 7 vezes',
    ],
    achievements: 'Em 2010, venceram o campeonato continental com uma campanha invicta.',
    stadium: 'Estádio das Águias, com capacidade para 55.000 torcedores.',
  },
  {
    id: 'guerreiros-do-oeste',
    name: 'Guerreiros do Oeste',
    image: '/images/warriors.png',
    history: `Criado em 1950 por agricultores, o Guerreiros do Oeste simboliza a luta e a perseverança de sua região. 
    O clube enfrentou muitas dificuldades financeiras em seus primeiros anos, mas nunca desistiu. 
    Em 1995, o time surpreendeu o país ao eliminar três campeões consecutivos e conquistar a Copa Nacional, um feito que ficou conhecido como "A Jornada dos Guerreiros". 
    Desde então, o clube é respeitado por sua determinação e espírito de equipe.`,
    titles: [
      'Campeonato Nacional: 5 vezes',
      'Copa Nacional: 4 vezes',
    ],
    achievements: 'Em 1995, eliminaram três campeões consecutivos para conquistar a Copa Nacional.',
    stadium: 'Arena dos Guerreiros, com capacidade para 40.000 torcedores.',
  },
  {
    id: 'estrelas-do-leste',
    name: 'Estrelas do Leste',
    image: '/images/stars.png',
    history: `Fundado em 1960, o Estrelas do Leste é conhecido por revelar grandes talentos e por seu estilo de jogo criativo. 
    O clube ganhou destaque nacional na década de 1990, quando venceu três campeonatos consecutivos com um time formado majoritariamente por jogadores da base. 
    Em 2005, protagonizaram uma das finais mais emocionantes da história, vencendo o campeonato nacional com um gol nos acréscimos.`,
    titles: [
      'Campeonato Nacional: 6 vezes',
      'Copa Nacional: 5 vezes',
    ],
    achievements: 'Em 2005, venceram o campeonato nacional com o maior número de gols marcados na história.',
    stadium: 'Estádio das Estrelas, com capacidade para 50.000 torcedores.',
  },
  {
    id: 'falcoes-de-prata',
    name: 'Falcões de Prata',
    image: '/images/falcons.png',
    history: `Criado em 1970, o Falcões de Prata é famoso por sua velocidade e estilo ofensivo. 
    O clube é conhecido por sua torcida apaixonada, que lota o estádio em todos os jogos. 
    Em 2015, o time entrou para a história ao marcar 10 gols em uma única partida da final, um recorde que permanece até hoje.`,
    titles: [
      'Campeonato Nacional: 7 vezes',
      'Copa Nacional: 6 vezes',
    ],
    achievements: 'Em 2015, marcaram 10 gols em uma única partida da final.',
    stadium: 'Arena dos Falcões, com capacidade para 48.000 torcedores.',
  },
];

const TeamDetail = () => {
  const { id } = useParams();
  const team = teams.find((team) => team.id === id);

  if (!team) {
    return <p>Time não encontrado.</p>;
  }

  return (
    <div className="team-detail">
      <img src={team.image} alt={team.name} className="team-detail-image" />
      <h2>{team.name}</h2>
      <p>{team.history}</p>
      <h3>Títulos Importantes</h3>
      <ul>
        {team.titles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
      <h3>Feitos Memoráveis</h3>
      <p>{team.achievements}</p>
      <h3>Estádio</h3>
      <p>{team.stadium}</p>
    </div>
  );
};

export default TeamDetail;