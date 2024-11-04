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
    title.style.fontSize = '15px'; // Change '18px' par la taille souhaitée
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


  // Questions du quiz
  const quizQuestions = [
    {
      question: "Quelle pratique n'est pas une pratique de Green IT ?",
      options: ["Recyclage des composants informatiques", "Utilisation maximale de l'énergie", "Migration vers le cloud"],
      answer: "Utilisation maximale de l'énergie"
    },
    {
      question: "Quel est l'objectif principal du Green IT ?",
      options: ["Augmenter la production", "Réduire l'empreinte écologique", "Augmenter la consommation d'énergie"],
      answer: "Réduire l'empreinte écologique"
    },
    {
      question: "Quelle technologie est utilisée pour réduire la consommation d'énergie des serveurs ?",
      options: ["Serveurs à haute performance", "Virtualisation", "Augmentation des cycles de CPU"],
      answer: "Virtualisation"
    },
    {
      question: "Pourquoi le recyclage des appareils électroniques est-il crucial dans le Green IT ?",
      options: ["Pour réduire les coûts de production", "Pour diminuer les déchets électroniques", "Pour augmenter la vente de nouveaux appareils"],
      answer: "Pour diminuer les déchets électroniques"
    },
    {
      question: "Quel matériau est souvent récupéré lors du recyclage des composants électroniques ?",
      options: ["Fer", "Or", "Verre"],
      answer: "Or"
    },
    {
      question: "Quel est l'avantage de la dématérialisation dans le Green IT ?",
      options: ["Augmentation de la consommation énergétique", "Réduction de l'utilisation du papier", "Augmentation des coûts de production"],
      answer: "Réduction de l'utilisation du papier"
    },
    {
      question: "Quel type d'énergie est privilégié dans le Green IT ?",
      options: ["Énergie fossile", "Énergie renouvelable", "Énergie nucléaire"],
      answer: "Énergie renouvelable"
    },
    {
      question: "Quelle stratégie peut être adoptée pour réduire l'empreinte carbone d'un centre de données ?",
      options: ["Augmenter la climatisation", "Utiliser la récupération de chaleur", "Augmenter la puissance des serveurs"],
      answer: "Utiliser la récupération de chaleur"
    },
    {
      question: "Quel est un moyen d'encourager les employés à adopter des pratiques de Green IT ?",
      options: ["Offrir des récompenses", "Imposer des amendes", "Ignorer les comportements"],
      answer: "Offrir des récompenses"
    },
    {
      question: "Quel est le rôle du cloud computing dans le Green IT ?",
      options: ["Augmenter la consommation de matériel", "Optimiser l'usage des ressources", "Réduire la performance"],
      answer: "Optimiser l'usage des ressources"
    }
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  // Fonction pour charger une question
  function loadQuestion() {
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");

    questionText.textContent = quizQuestions[currentQuestionIndex].question;
    optionsContainer.innerHTML = "";

    quizQuestions[currentQuestionIndex].options.forEach(option => {
      const optionElement = document.createElement("label");
      optionElement.innerHTML = `
        <input type="radio" name="option" value="${option}">
        ${option}
      `;
      optionsContainer.appendChild(optionElement);
    });
  }

  // Fonction pour passer à la question suivante
  function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
      alert("Veuillez sélectionner une réponse.");
      return;
    }

    // Vérifier la réponse
    if (selectedOption.value === quizQuestions[currentQuestionIndex].answer) {
      score++;
    }

    // Passer à la question suivante
    currentQuestionIndex++;

    // Afficher la question suivante ou les résultats finaux
    if (currentQuestionIndex < quizQuestions.length) {
      loadQuestion();
    } else {
      document.getElementById("quiz-form").style.display = "none";
      document.getElementById("quiz-result").textContent = `Quiz terminé ! Votre score est de ${score} sur ${quizQuestions.length}.`;
    }
  }

  // Charger la première question au chargement de la page
  loadQuestion();

  // FAQ en JavaScript
const faqQuestions = [
    { question: "Qu'est-ce que le Green IT ?", answer: "Green IT désigne les efforts pour réduire l'impact écologique des technologies de l'information." },
    { question: "Pourquoi recycler les composants électroniques ?", answer: "Le recyclage prévient les déchets dangereux dans les décharges et récupère des matériaux précieux." },
    { question: "Quels sont les bénéfices du cloud computing en Green IT ?", answer: "Le cloud permet d'optimiser l'utilisation des ressources et de réduire la consommation énergétique globale." },
    { question: "Comment économiser de l'énergie avec le Green IT ?", answer: "Utiliser des serveurs virtuels et opter pour des énergies renouvelables contribue à l'économie d'énergie." },
    { question: "Quel est l'impact du matériel informatique sur l'environnement ?", answer: "La production et la gestion des déchets du matériel informatique ont un impact significatif sur l'environnement." }
  ];
  
  // Fonction pour charger la FAQ
  function loadFAQ() {
    const faqContainer = document.getElementById("faq-container");
  
    faqQuestions.forEach(item => {
      const faqItem = document.createElement("div");
      faqItem.className = "faq-item";
      faqItem.innerHTML = `<p class="faq-question">${item.question}</p><p class="faq-answer">${item.answer}</p>`;
      faqItem.addEventListener("click", () => {
        const answer = faqItem.querySelector(".faq-answer");
        answer.style.display = answer.style.display === "none" ? "block" : "none";
      });
      faqContainer.appendChild(faqItem);
    });
  }
  
  // Charger la FAQ
  loadFAQ();