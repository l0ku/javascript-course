'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Creating array of unique events
let events = new Set();
for (const [, event] of gameEvents) {
  events.add(event);
} // Use un for loop, funciona pero es poco eficiente.
// Deberia haber usado esta unica linea de codigo: const events = [...new Set(gameEvents.events())]
events = [...events];
// console.table(events);
// Removing unfair Yellow card at '64
gameEvents.delete(64);

// Logging average time of events
// MAL!
/*
let avgEventTime = 0;
for (const [min] of gameEvents) {
  avgEventTime += min;
}
avgEventTime = avgEventTime / 90;
console.log(
  `An event happened on average, every ${avgEventTime.toFixed(2)} minutes.`
);
*/
// BIEN!
const time = [...gameEvents.keys()].pop();
/*
console.log(
  `An event happened on average, every ${time / gameEvents.size} minutes.`
);
*/
// Log con overtime first half o seconds, correspondientes

const printGame = () => {
  for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';

    if (min > 90) {
      console.log(`[OVERTIME] ${min}: ${event}`);
    } else {
      console.log(`[${half} HALF] ${min}: ${event}`);
    }
  }
};
/*
// #1
game.scored.forEach((player, index) => {
  console.log(`Goal ${index + 1}: ${player}`);
});

// const { team1, x: draw, team2 } = game.odds;
// const avgOdds = (team1 + draw + team2 / 3).toFixed(2);
// #2
let avgOdds = 0;
const odds = Object.events(game.odds);

for (const odd of odds) {
  avgOdds += odd;
}

avgOdds /= odds.length;

console.log(avgOdds);

// #3
// Printear las 3 odds a la consola.

const draw = game.odds.x;

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} is: ${odd}`);
}

// for (let odds of Object.events(games.odds)) {
//   if (odds === 1.33) {
//     console.log(`Odd of victory of ${game.team1}`);
//   }
// }


const [players1, players2] = game.players; // 🔟

let team1 = { teamName: '', gk: '', fieldPlayers: [], players1Final: [] }; //Declaring object outside of the game object.

team1.teamName = game.team1; // Copying property teamName from the original object.
team1.gk = players1[0]; // Copying the first player of the first team into the "gk" property.
let [, ...fieldPlayers1] = [...players1]; // Copying the rest of the players, except the first one into an array.
team1.fieldPlayers = fieldPlayers1; // Copying the array into the same property inside of the object.

let team2 = { teamName: '', gk: '', fieldPlayers: [], players2Final: [] };

team2.teamName = game.team2;
team2.gk = players2[0];
let [, ...fieldPlayers2] = [...players2];
team2.fieldPlayers = fieldPlayers2;

const allPlayers = [...players1, ...players2]; // Copying all the players, from both teams, into a unified array. 🔟

team1.players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']; // 🔟

const { team1: team1Odds, x: draw, team2: team2Odds } = game.odds; // Deconstructing game.odds into 3 separate variables.

// Creating function to take individual names from an array and logging them to the console.
function printGoals(...players) {
  console.log(`${players.length} goals were scored.`);
}

printGoals(...game.scored);
*/
