function displayTeams(teams) {
  const teamGrid = document.getElementById("team-grid");
  teamGrid.innerHTML = "";
  teams.forEach((team) => {
    const teamCard = document.createElement("div");
    teamCard.classList.add("team-card");

    let iconEl = document.createElement("img");
    iconEl.src = team.icon;
    iconEl.classList.add("team-logo");

    let nameEl = document.createElement("h2");
    nameEl.innerText = team.name;
    nameEl.classList.add("team-name");

    teamCard.appendChild(nameEl);
    teamCard.appendChild(iconEl);

    teamCard.addEventListener("click", () => {
      const url = `team-details.html?id=${team.id}`;
      window.location.href = url;
    });

    teamGrid.appendChild(teamCard);
  });
}

function searchPlayersByTeamCode(teamCode) {
  const teams = JSON.parse(localStorage.getItem("teamsData"));
  const selectedTeam = teams.find((team) => team.code === teamCode);
  if (selectedTeam) {
    const players = selectedTeam.players;
    displayPlayers(players);
  }
}

function displayPlayers(players) {
  const teamGrid = document.getElementById("team-grid");
  teamGrid.innerHTML = "";

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

    teamGrid.appendChild(playerCard);
  });
}

const searchButton = document.getElementById("search-button");
const input = document.getElementById("team-search");

input.addEventListener("input", () => {
  const userInput = input.value.trim().toUpperCase();
  console.log(userInput);
  if (userInput !== "") {
    searchPlayersByTeamCode(userInput);
  } else {
    const teamsData = localStorage.getItem("teamsData");
    const teams = JSON.parse(teamsData);
    displayTeams(teams);
  }
});

const teamModal = document.getElementById("team-modal");
const addTeamButton = document.getElementById("add-team-button");
const closeModalButton = document.getElementById("close-modal");
const teamForm = document.getElementById("team-form");

function openModal() {
  teamModal.showModal();
}

function closeModal() {
  teamModal.close();
}

addTeamButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
teamForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const teamName = document.getElementById("team-name").value;
  const teamIcon = document.getElementById("team-icon").value;
  const topBatsman = document.getElementById("top-batsman").value;
  const topBowler = document.getElementById("top-bowler").value;
  const championshipsWon = parseInt(
    document.getElementById("championships-won").value
  );
  const teamCode = document.getElementById("team-code").value;

  const teamsData = JSON.parse(localStorage.getItem("teamsData")) || [];

  const newTeam = {
    id: teamsData.length + 1,
    name: teamName,
    icon: teamIcon,
    topBatsman: topBatsman,
    topBowler: topBowler,
    championshipsWon: championshipsWon,
    code: teamCode.toUpperCase(),
    players: [],
  };

  teamsData.push(newTeam);
  displayTeams(teamsData);
  localStorage.setItem("teamsData", JSON.stringify(teamsData));
  teamForm.reset();
  alert("Team created successfully. Visit team details page to add players");
  closeModal();
});

window.onload = () => {
  const teamsData = localStorage.getItem("teamsData");
  const teams = JSON.parse(teamsData);
  displayTeams(teams);
};
