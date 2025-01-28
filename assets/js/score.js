// Get players from local storage
const players = JSON.parse(localStorage.getItem('players'));

// Ensure players array is not null or undefined
if (players && players.length > 0) {
    // Insert player names into the score page
    document.getElementById('player1-Score').textContent = players[0];
    document.getElementById('player2-Score').textContent = players[1];
}

// Define ball points mapping
const ballPoints = {
    'red': 1,
    'yellow': 2,
    'green': 3,
    'brown': 4,
    'blue': 5,
    'pink': 6,
    'black': 7
};

// Initialize break variable
let playerOneBreak = 0;

// Add event listeners for all balls
Object.entries(ballPoints).forEach(([color, points]) => {
    document.getElementById(`${color}-ball1`).addEventListener('click', function() {
        playerOneBreak += points;
        console.log(`Player 1 break: ${playerOneBreak}`);
    });
});

console.log(players[0]);
console.log(players[1]);