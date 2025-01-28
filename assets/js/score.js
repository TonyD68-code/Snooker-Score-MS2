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

// Initialize break variables
let playerOneBreak = 0;
let playerTwoBreak = 0;

// Initialize active player (1 or 2)
let activePlayer = 1;

// Function to update visual indication of active player
function updateActivePlayer() {
    const player1Score = document.getElementById('player1-Score');
    const player2Score = document.getElementById('player2-Score');
    
    if (activePlayer === 1) {
        player1Score.classList.add('active');
        player2Score.classList.remove('active');
    } else {
        player2Score.classList.add('active');
        player1Score.classList.remove('active');
    }
}

// Add click handlers to switch active player
document.getElementById('player1-Score').addEventListener('click', function() {
    activePlayer = 1;
    updateActivePlayer();
});

document.getElementById('player2-Score').addEventListener('click', function() {
    activePlayer = 2;
    updateActivePlayer();
});

// Set initial active player
updateActivePlayer();

// Add event listeners for all player 1 balls
Object.entries(ballPoints).forEach(([color, points]) => {
    document.getElementById(`${color}-ball1`).addEventListener('click', function() {
        if (activePlayer === 1) {  // Only allow if player 1 is active
            playerOneBreak += points;
            console.log(`Player 1 break: ${playerOneBreak}`);
        }
    });
});

// Add event listeners for all player 2 balls
Object.entries(ballPoints).forEach(([color, points]) => {
    document.getElementById(`${color}-ball2`).addEventListener('click', function() {
        if (activePlayer === 2) {  // Only allow if player 2 is active
            playerTwoBreak += points;
            console.log(`Player 2 break: ${playerTwoBreak}`);
        }
    });
});

console.log(players[0]);
console.log(players[1]);