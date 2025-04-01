function trierTableauAlphabétique(tableau) {
    return tableau.sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
}

// Exemple d'utilisation
const tableau = ["éclair", "Banana", "apple", "Cherry", "école"];
const tableauTrie = trierTableauAlphabétique(tableau);

console.log(tableauTrie); // Affiche ["apple", "Banana", "Cherry", "éclair", "école"]
