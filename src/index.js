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
    } else if (numberRange == 9) {
      goalsTeamB = goalsTeamA + 3;
    } else {
      goalsTeamB = goalsTeamA + 4;
    }
    return goalsTeamB;
  }

  team2.goals = randomGoals();
};

const startGame = function () {
  // coger 2 equipos y sacarles de array de jugadores
  const randomTeams = _.shuffle(teams);
  const teamA = randomTeams.shift();
  const teamB = randomTeams.shift();
  console.log(teamA, teamB, randomTeams);
  // calcular goles
  calculateGoals(teamA, teamB);
  // calcular la victoria y asignar los puntos
  console.log(teamA, teamB);
  // decir quien gana
};

startGame();
