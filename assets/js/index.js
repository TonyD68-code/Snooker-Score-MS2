document.addEventListener("DOMContentLoaded", function() {
    const playerOne = document.getElementById('player1');
    const playerTwo = document.getElementById('player2');
    let players = [];

    const startBtn = document.getElementById('start-game');
    startBtn.addEventListener("click", function() {
        players = [];
        players.push(playerOne.value);
        players.push(playerTwo.value);
        console.log(players);
        // Save players to local storage
        localStorage.setItem('players', JSON.stringify(players));
        window.location.href = 'score.html';
    });

    console.log(playerOne);
});