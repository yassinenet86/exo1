function pyramideSymetrique(n) {
    for (let i = 1; i <= n; i++) {
        // Calcul du nombre d'espaces avant les étoiles
        const espaces = " ".repeat(n - i);

        // Calcul du nombre d'étoiles par ligne (commence à 2 et augmente de 2)
        const etoiles = "*".repeat(2 * i);

        // Combiner les espaces et les étoiles pour créer une ligne symétrique
        console.log(espaces + etoiles);
    }
}

// Exemple d'utilisation
const nombreDeLignes = 10;
pyramideSymetrique(nombreDeLignes);
