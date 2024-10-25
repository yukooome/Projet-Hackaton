document.addEventListener('DOMContentLoaded', function() {
    const economieMessage = document.getElementById('economie-message');
    const economieDetails = document.getElementById('economie-details');
  
    // Fonction simulant une réponse API pour l'économie d'énergie
    function obtenirEconomiesEnergieSimulees() {
      return new Promise((resolve) => {
        setTimeout(() => {
          // Simuler des données d'économie d'énergie en pourcentage
          const economieEnergieSimulee = {
            economiePourcentage: (Math.random() * 20 + 10).toFixed(2)  // Économie entre 10% et 30%
          };
          resolve(economieEnergieSimulee);
        }, 2000);
      });
    }
  
    // Fonction pour obtenir et afficher les données d'économie d'énergie
    function afficherEconomieEnergie() {
      obtenirEconomiesEnergieSimulees()
        .then(data => {
          const economiePourcentage = data.economiePourcentage;
          economieMessage.textContent = "Voici l'économie d'énergie estimée :";
          economieDetails.textContent = `Vous pourriez économiser ${economiePourcentage}% sur votre consommation.`;
        })
        .catch(error => {
          economieMessage.textContent = "Erreur lors du calcul de l'économie d'énergie.";
          economieDetails.textContent = "";
          console.error(error);
        });
    }
  
    // Lancer l'affichage de l'économie d'énergie
    afficherEconomieEnergie();
  });
  