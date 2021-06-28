const poidsInput = document.querySelector("#poids-input");
const tailleInput = document.querySelector("#taille-input");
const calculBtn = document.querySelector("#calcul-btn");
const divResultat = document.querySelector("#resultat");
const divTexteResultat = document.querySelector("#resultat-texte");
const divAnnonce = document.querySelector("#annonce");
const container = document.querySelector("#container");
const all = document.querySelectorAll("#container #conseil")

const conseilTextes = document.querySelectorAll(".conseil-txt")

const allStuff = document.querySelectorAll("#container")


calculBtn.addEventListener("click", calculFunc);

// Fonction principale pour calculer et afficher
function calculFunc(event){

    event.preventDefault();
    const total = poidsInput.value / tailleInput.value ** 2 * 10000;
    
    

    const resultatFinalEntier = Math.floor(total);
    divResultat.innerText = resultatFinalEntier;

    divTexteResultat.innerText = "Votre IMC est de " + resultatFinalEntier;

    if(resultatFinalEntier <= 0 || resultatFinalEntier >= 60 || isNaN(resultatFinalEntier)){
        divAnnonce.innerText = "Erreur";
        divResultat.style.backgroundColor = "black";
        container.style.animation = "error 0.5s ease";
        return;
    }
    else if(resultatFinalEntier > 40 && resultatFinalEntier < 60) {
        divAnnonce.innerText = "Vous êtes en obésité morbide";
        divResultat.style.backgroundColor = "purple";
    }
    else if(resultatFinalEntier > 35 && resultatFinalEntier < 40 ) {
        divAnnonce.innerText = "Vous êtes en obésité sévère";
        divResultat.style.backgroundColor = "red";
    }
    else if(resultatFinalEntier > 30 && resultatFinalEntier <= 35 ) {
        divAnnonce.innerText = "Vous êtes en obésité modérée";
        divResultat.style.backgroundColor = "orange";
    }
    else if(resultatFinalEntier > 25 && resultatFinalEntier <= 30 ) {
        divAnnonce.innerText = "Vous êtes en surpoids";
        divResultat.style.backgroundColor = "yellow"; 
    }
    else if(resultatFinalEntier > 18 && resultatFinalEntier <= 25 ) {
        divAnnonce.innerText = "Vous avez un poids normal";
        divResultat.style.backgroundColor = "green";      
    }
    else if(resultatFinalEntier > 16 && resultatFinalEntier <= 18.4 ) {
        divAnnonce.innerText = "Vous êtes en état de dénutrition";
        divResultat.style.backgroundColor = "orange";  
    }
    else if(resultatFinalEntier > 13 && resultatFinalEntier <= 15.9 ) {
        divAnnonce.innerText = "Vous êtes en état de dénutrition avancée";
        divResultat.style.backgroundColor = "red";
    }
    else {
        divAnnonce.innerText = "Erreur, merci de remplir correctement les paramètres";
        divResultat.style.backgroundColor = "white";
        container.style.animation = "error 0.5s ease";
        return;
    }

    // Applique le fade et attends la fin
    fadeFunc();
    setTimeout(() => {
        divResultat.classList.remove("fade-in");
    }, 800);

    conseilRandom()
}

// Fonction Fade----------------------
function fadeFunc() {
    divResultat.classList.add("fade-in");
}

// Reinitialise l'etat a la fin de l'animation "ECHEC"-----
container.addEventListener("animationend", function(){
    container.style.animation = "";   
})

function conseilRandom() {
    const computerNumber = Math.floor(Math.random() * 5);
    const phraseConseil = conseilTextes[computerNumber];

    setTimeout(() => {
        conseil.style.opacity = "1";
        conseil.classList.add("move-down");
        
//Reinitalise les positions en cliquant n'importe où sur le container--------REINIT
        allStuff.forEach(action => {
            action.addEventListener("click", function() {

                conseil.classList.remove("move-down");
                container.classList.remove("move-down");

                conseil.style.opacity = "0";
            })
        })

    }, 1000);

    conseil.innerHTML = phraseConseil.innerHTML;
    conseil.classList.add("conseil-style");

}
// if(screen.width <= 800) {
//     conseil.style.width = "80px";
//     conseil.style.fontSize = "12px";
    
// }

