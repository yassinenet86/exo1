
function pyramideEtoiles(n) {
  for (let i = 1; i <= n; i++) {
      // Calculer le nombre d'étoiles pour chaque ligne
      const etoiles = "*".repeat(2 * i);

      // Afficher la ligne complète
      console.log(etoiles);
  }
}

// Exemple d'utilisation
const nombreDeLignes = 10;
pyramideEtoiles(nombreDeLignes);