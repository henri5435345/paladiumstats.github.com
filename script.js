document.getElementById('playerForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const playerName = document.getElementById('playerName').value;
    const response = await fetch(`https://localhost:7120/api/player/${playerName}`);

    if (response.ok) {
        const data = await response.json();
        displayPlayerInfo(data);
    } else {
        document.getElementById('result').innerText = "Erreur lors de la récupération des données.";
    }
});

function displayPlayerInfo(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Efface les résultats précédents

    const playerInfo = document.createElement('div');
    playerInfo.innerHTML = `<h2>Informations du Joueur</h2>
                            <pre>${JSON.stringify(data.playerInfo, null, 2)}</pre>`;
    resultDiv.appendChild(playerInfo);

    const friendsList = document.createElement('div');
    friendsList.innerHTML = `<h2>Liste des Amis</h2>
                            <pre>${JSON.stringify(data.friendsList, null, 2)}</pre>`;
    resultDiv.appendChild(friendsList);

    const playerJob = document.createElement('div');
    playerJob.innerHTML = `<h2>Emplois</h2>
                            <pre>${JSON.stringify(data.playerJob, null, 2)}</pre>`;
    resultDiv.appendChild(playerJob);

    const playerClicker = document.createElement('div');
    playerClicker.innerHTML = `<h2>Clicker</h2>
                               <pre>${JSON.stringify(data.playerClicker, null, 2)}</pre>`;
    resultDiv.appendChild(playerClicker);
}
