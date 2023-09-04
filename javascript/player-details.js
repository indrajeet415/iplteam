// Function to retrieve player details from localStorage
function renderPlayerDetails(player) {
    const playerInfo = document.getElementById('player-info');
    playerInfo.innerHTML = `
        <h2>${player.playerName}</h2>
        <img src="${player.photo}" alt="${player.playerName} Photo">
        <p>Team: ${player.from}</p>
        <p>Price: ${player.price}</p>
        <p>Playing Status: ${player.isPlaying ? 'Playing' : 'On-bench'}</p>
        <p>Role: ${player.role}</p>
    `;
}

function getPlayerById(playerId) {
    const teams = JSON.parse(localStorage.getItem('teamsData'));
    for (const team of teams) {
        const player = team.players.find((p) => p.id === playerId);
        if (player) {
            return player; // Return the player object if found
        }
    }
    return null; // Return null if player is not found
}

function loadPlayerDetailsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedId = parseInt(urlParams.get("id"));
    const player = getPlayerById(selectedId)
    if (player) {
        renderPlayerDetails(player);
    } else {
        console.error("Player not found.");
    }
}

// Call the main function to load and display team details and player cards when the page loads
window.onload = loadPlayerDetailsPage;
