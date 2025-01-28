// Get players from local storage
const players = JSON.parse(localStorage.getItem('players'));

// Ensure players array is not null or undefined
if (players && players.length > 0) {
    // Insert player names into the score page
    document.getElementById('player1-Score').textContent = players[0];
    document.getElementById('player2-Score').textContent = players[1];
}

// Initialize break variable
let playerOneBreak = 0;

// Add event listener for red ball
document.getElementById('red-ball1').addEventListener('click', function() {
    playerOneBreak += 1;
    console.log('Player 1 break: ' + playerOneBreak);
});

console.log(players[0]);
console.log(players[1]);