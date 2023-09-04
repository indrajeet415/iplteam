let selectedTeam;
// Function to retrieve team details from local storage
function getTeamDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedId = parseInt(urlParams.get("id"));
  const teams = JSON.parse(localStorage.getItem("teamsData"));
  if (selectedId) {
    selectedTeam = teams.find((team) => team.id === selectedId);

    return selectedTeam;
  }
  return null;
}

// Function to display team details
function displayTeamDetails(team) {
  const teamDetailsContainer = document.getElementById("team-details");
  teamDetailsContainer.innerHTML = `
        <img src="${team.icon}" alt="${team.name} Icon">
        <div>
            <h2>${team.name}</h2>
            <p>Player Count: ${team.players.length}</p>
            <p>Top Batsman: ${team.topBatsman}</p>
            <p>Top Bowler: ${team.topBowler}</p>
            <p>Championships Won: ${team.championshipsWon}</p>
        </div>
    `;
}

// Function to display player cards
function displayPlayerCards(players) {
  const playerGrid = document.getElementById("player-grid");
  playerGrid.innerHTML = "";

  players.forEach((player) => {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card");
    playerCard.innerHTML = `
            <h3>${player.playerName}</h3>
            <img src="${player.photo}" alt="${player.playerName} Photo">
            <p>Team: ${player.from}</p>
            <p>Price: ${player.price}</p>
            <p>Playing Status: ${player.isPlaying ? "Playing" : "On Bench"}</p>
            <p>Role: ${player.role}</p>
        `;

    playerCard.addEventListener("click", () => {
      window.location.href = `player-details.html?id=${player.id}`;
    });

    playerGrid.appendChild(playerCard);
  });
}

// Main function to load and display team details and player cards
function loadTeamDetailsPage() {
  const team = getTeamDetails();
  if (team) {
    displayTeamDetails(team);
    displayPlayerCards(team.players);
  } else {
    console.error("Team not found.");
  }
}

// Get references to player modal and form elements
const playerModal = document.getElementById("player-modal");
const addPlayerButton = document.getElementById("add-player-button");
const closePlayerModalButton = document.getElementById("close-player-modal");
const playerForm = document.getElementById("player-form");
const playerIdInput = document.getElementById("player-id");
const playerTeamInput = document.getElementById("player-team");

// Function to open the player modal
function openPlayerModal() {
  const playerTeamInput = document.getElementById("player-team");
  playerTeamInput.value = selectedTeam.code;
  playerModal.showModal();
}

// Function to close the player modal
function closePlayerModal() {
  playerModal.close();
}

// Event listener for clicking the "Add Player" button
addPlayerButton.addEventListener("click", openPlayerModal);

// Event listener for clicking the close button
closePlayerModalButton.addEventListener("click", closePlayerModal);

// Event listener for submitting the player form
playerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const playerName = document.getElementById("player-name").value;
  const playerPhoto = document.getElementById("player-photo").value;
  const playerPrice = document.getElementById("player-price").value;
  const playerIsPlaying = document.getElementById("player-playing").value;
  const playerRole = document.getElementById("player-role").value;

  let playerId;
  if (selectedTeam.players.length > 0) {
    const lastIndex = selectedTeam.players.length - 1;
    playerId = selectedTeam.players[lastIndex].id + 1;
  } else {
    playerId = selectedTeam.id * 100 + 1;
  }
  const newPlayer = {
    id: playerId,
    playerName: playerName,
    photo: playerPhoto,
    from: playerTeamInput.value,
    price: playerPrice,
    isPlaying: playerIsPlaying === "true",
    role: playerRole,
  };

  selectedTeam.players.push(newPlayer);
  console.log(selectedTeam);

  const teams = JSON.parse(localStorage.getItem("teamsData"));

  const updatedData = teams.map((team) => {
    if (team.id === selectedTeam.id) {
      return selectedTeam;
    }
    return team;
  });

  console.log(updatedData);

  localStorage.setItem("teamsData", JSON.stringify(updatedData));
  displayTeamDetails(selectedTeam);
  displayPlayerCards(selectedTeam.players);
  playerForm.reset();
  closePlayerModal();
});

// Call the main function to load and display team details and player cards when the page loads
window.onload = loadTeamDetailsPage;
