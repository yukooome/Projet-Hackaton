// Je n'ai pas trouvé de API qui simule l'empreinte carbone, alors je la simule 

document.addEventListener('DOMContentLoaded', function() {
    const carboneMessage = document.getElementById('carbone-message');
    const carboneResult = document.getElementById('carbone-result');
  
    // Fonction simulant une réponse API
    function obtenirEmpreinteCarboneSimulee() {
      return new Promise((resolve) => {
        // Simule un temps de réponse avec des données fictives après 2 secondes
        setTimeout(() => {
          const empreinteCarboneSimulee = {
            carboneKg: (Math.random() * 100).toFixed(2)  // Génère une empreinte carbone entre 0 et 100 kg de CO₂
          };
          resolve(empreinteCarboneSimulee);
        }, 2000);
      });
    }
  
    // Fonction principale pour obtenir l'empreinte carbone (simulée)
    function calculerEmpreinteCarbone() {
      obtenirEmpreinteCarboneSimulee()
        .then(data => {
          const empreinteCarbone = data.carboneKg;
          carboneMessage.textContent = "Voici votre empreinte carbone :";
          carboneResult.textContent = `${empreinteCarbone} kg de CO₂`;
        })
        .catch(error => {
          carboneMessage.textContent = "Erreur lors du calcul de l'empreinte carbone.";
          carboneResult.textContent = "";
          console.error(error);
        });
    }
  
    // Lancer le calcul simulé
    calculerEmpreinteCarbone();
  });
  