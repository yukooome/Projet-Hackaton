const LEAVES = [
    { theme: "Développement web", name: "Front-end", info: "Optimisation de la consommation énergétique des applications web via le front-end." },
    { theme: "Serveurs", name: "Back-end", info: "Gestion des serveurs pour réduire l'empreinte carbone des applications." },
    { theme: "Énergies renouvelables", name: "Hébergement", info: "Utilisation d'hébergements écologiques alimentés par des énergies renouvelables." },
    { theme: "Communications", name: "Réseaux", info: "Optimisation des échanges réseau pour minimiser la consommation d'énergie." },
    { theme: "Design", name: "UI/UX", info: "Conception de designs éco-responsables pour réduire l'impact énergétique." }
];


function createLeafCard(leaf) {
    const card = document.createElement('div');
    card.className = 'leaf-card';

    const title = document.createElement('h1');
    title.textContent = leaf.name;
    card.appendChild(title);

    card.addEventListener("click", () => {
        document.getElementById('modal-text').textContent = leaf.info;
        document.getElementById('infoModal').style.display = 'block';
        document.getElementById('modal-theme').textContent = leaf.theme;
        document.getElementById('modal-title').textContent = leaf.name;
    });

    return card;
}

function displayLeaves(leaves) {
    const container = document.getElementById('leaves-container');
    container.innerHTML = "";
    leaves.forEach(leaf => {
        const leafCard = createLeafCard(leaf);
        container.appendChild(leafCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayLeaves(LEAVES);
});

// Pour fermer le modal
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('infoModal').style.display = 'none';
});
