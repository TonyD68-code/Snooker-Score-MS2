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
        window.location.href = 'http://www.google.com';
    });

    console.log(playerOne);
});