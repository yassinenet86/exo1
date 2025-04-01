function calculerMoyenne(tableau) {
    // Vérifier si le tableau est vide
    if (tableau.length === 0) {
        return "Le tableau est vide. Moyenne non définie.";
    }

    // Utiliser reduce() pour calculer la somme
    const somme = tableau.reduce((accumulateur, valeur) => accumulateur + valeur, 0);

    // Calculer la moyenne
    const moyenne = somme / tableau.length;

    return moyenne;
}

// Exemple d'utilisation
const tableau = [10, 20, 30, 40, 50];
console.log(calculerMoyenne(tableau)); // Affichera 30