/* eslint-disable space-before-function-paren */
import _ from "lodash";

const teams = [
  { name: "Osasuna", points: 0, goals: 0 },
  { name: "FC.Barcelona", points: 0, goals: 0 },
  { name: "Real Madrid", points: 0, goals: 0 },
  { name: "Sevilla FC", points: 0, goals: 0 },
  { name: "Valencia FC", points: 0, goals: 0 },
  { name: "Betis", points: 0, goals: 0 },
  { name: "A.Bilbao", points: 0, goals: 0 },
  { name: "A.Madrid", points: 0, goals: 0 },
  { name: "Pomferradina", points: 0, goals: 0 },
  { name: "Mirandes", points: 0, goals: 0 },
];
const teamsPlayed = [];

const calculateGoals = function (team1, team2) {
  const probableGoals = [0, 1, 2];
  const goalsTeamA =
    probableGoals[Math.floor(Math.random() * probableGoals.length)];
  team1.goals = goalsTeamA;
  let goalsTeamB = 0;

  function randomGoals() {
    const numberRange = Math.floor(Math.random() * 10);

    if (numberRange <= 5) {
      goalsTeamB = goalsTeamA + 0;
    } else if (numberRange <= 7) {
      goalsTeamB = goalsTeamA + 1;
    } else if (numberRange <= 8) {
      goalsTeamB = goalsTeamA + 2;
    } else if (numberRange === 9) {
      goalsTeamB = goalsTeamA + 3;
    } else {
      goalsTeamB = goalsTeamA + 4;
    }
    return goalsTeamB;
  }

  team2.goals = randomGoals();
};

const checkWin = function (team1, team2) {
  if (team1.goals > team2.goals) {
    console.log(`gana ${team1}`);
  } else if (team1.goals < team2.goals) {
    console.log(`gana ${team2}`);
  } else {
    console.log(`empate entre ${team1} y ${team2}!`);
  }
};

const startGame = function () {
  // coger 2 equipos y sacarles de array de jugadores
  const randomTeams = _.shuffle(teams);
  const teamA = randomTeams.shift();
  const teamB = randomTeams.shift();
  teamsPlayed.push(teamA).push(teamB);
  console.log(teamA, teamB, randomTeams);
  // calcular goles
  calculateGoals(teamA, teamB);
  // calcular la victoria y asignar los puntos
  checkWin(teamA, teamB);
  // decir quien gana
};

startGame();
