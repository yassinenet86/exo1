let titre = document.getElementById("titre");

titre.setAttribute("class" , "rouge")

console.log(titre);

titre.innerHTML = "oui mais david";

let infosOrange = document.getElementsByClassName("orange");

console.log(infosOrange)

let mesParagraphes = document.getElementsByTagName('p');

let tousLesLiEtOl = document.querySelectorAll("li,ol");

console.log(tousLesLiEtOl)

let monTitre = document.getElementById('titre');

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btn").addEventListener("click", function(){
        let monIput = document.getElementById("nom").value;
        alert(monIput);
    })
});

let btn = document.getElementById('btn');

function darkMode(){
    //récupération du body que l'on met dans la variable element
    let element = document.body;
    //utilisation du toggle en fonctions de ce que l'on cherche dans la
    //classList dans le CSS
    element.classList.toggle("dark-mode");
    };

    btn1.addEventListener("click", darkMode);
    