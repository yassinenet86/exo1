function pyramideSymetriqueCentrale(n) {
    for (let i = 0; i < n; i++) {
        // Calcul du nombre d'espaces pour centrer la pyramide
        const espaces = " ".repeat(n - i - 1);

        // Calcul du nombre d'étoiles (commence à 2 et ajoute 1 par ligne)
        const etoiles = "*".repeat(2 + (2 * i));

        // Afficher la ligne complète
        console.log(espaces + etoiles);
    }
}

// Exemple d'utilisation
const nombreDeLignes = 25;
pyramideSymetriqueCentrale(nombreDeLignes);