//Exercice 1
const formExo1 = document.getElementById("formExo1");
const inputExo1 = document.getElementById("inputExo1");
const divExo1 = document.getElementById("divExo1");

formExo1.addEventListener("submit", (e) => {
  divExo1.innerHTML = "";
  e.preventDefault();
  let timeTab = inputExo1.value.split(":");
  let seconde = Number(timeTab[2]) + 1;
  let minute = Number(timeTab[1]);
  let heure = Number(timeTab[0]);
  if (seconde === 60) {
    minute++;
    seconde = 00;
  }
  if (minute === 60) {
    heure++;
    minute = 00;
  }
  if (heure === 24) {
    heure = 00;
  }
  let reponseExo1 = `Dans une seconde il sera ${heure} h ${minute} min ${seconde} s`;
  divExo1.insertAdjacentHTML("afterbegin", reponseExo1);
});

//Exercice 2
const formExo2 = document.getElementById("formExo2");
const inputCandidat1 = document.getElementById("candidat1");
const inputCandidat2 = document.getElementById("candidat2");
const inputCandidat3 = document.getElementById("candidat3");
const inputCandidat4 = document.getElementById("candidat4");
const divExo2 = document.getElementById("divExo2");
let elu;
let listCandidat = [];

formExo2.addEventListener("submit", (e) => {
  e.preventDefault();
  divExo2.innerHTML = "";
  listCandidat.push(Number(inputCandidat1.value));
  listCandidat.push(Number(inputCandidat2.value));
  listCandidat.push(Number(inputCandidat3.value));
  listCandidat.push(Number(inputCandidat4.value));
  console.log(listCandidat);
  rep = listCandidat.splice(0, 1)[0];
  console.log(rep);
  console.log(listCandidat);

  if (rep > 50) {
    elu = "Le candidat 1 est élu au premier tour";
  } else if (rep < 12.5) {
    elu = "Le candidat 1 ne participe pas au second tour";
  } else {
    listCandidat.sort((a, b) => b - a);
    if (rep > listCandidat[0]) {
      elu = "Le candidat 1 est en ballotage favorable";
    } else {
      elu = "Le candidat 1 n'est pas en ballotage favorable";
    }
  }
  divExo2.insertAdjacentHTML("afterbegin", elu);
});

//Exercice 3
const formExo3 = document.getElementById("formExo3");
const inputJour = document.getElementById("jour");
const inputMoi = document.getElementById("moi");
const inputAnnee = document.getElementById("annee");
const divExo3 = document.getElementById("divExo3");
let reponseExo3;

let moi30jours = [4, 6, 9, 11];

let bisextile = false;
let valide = false;

formExo3.addEventListener("submit", (e) => {
  divExo3.innerHTML = "";
  e.preventDefault();
  let jour = Number(inputJour.value);
  let moi = Number(inputMoi.value);
  let annee = Number(inputAnnee.value);
  console.log(jour);
  console.log(moi);
  console.log(annee);

  isBisextile(annee);

  if (jour > 0 && moi > 0) {
    if (
      jour < 32 &&
      moi < 13 &&
      moi30jours.includes(moi) === false &&
      moi !== 2
    ) {
      valide = true;
    } else if (jour < 31 && moi30jours.includes(moi) === true) {
      valide = true;
    }else if(jour<30 && moi ===2 && bisextile){
        valide=true;
    }else if(jour<29&& moi===2){
        valide=true
    }else {
        valide=false
    }  
  }

  if (valide) {
    console.log("salut");
    reponseExo3 = "La date est valide";
  } else {
    reponseExo3 = "La date est invalide";
  }
  divExo3.insertAdjacentHTML("afterbegin", reponseExo3);
});

function isBisextile(annee){
    if((annee%4 ===0 &&annee%100!==0) ||annee%400===0){
        bisextile=true;
    }else {
        bisextile=false;
    }
}

//Exercice 4

const formExo4Prix=document.getElementById("formExo4Prix");
const formExo4Reponse=document.getElementById("formExo4Reponse");
const inputPrix=document.getElementById("prix");
const inputUserNumber=document.getElementById("userNumber");
const divExo4=document.getElementById("divExo4");
let prix;
let userNumber;
let exo4Reponse

formExo4Prix.addEventListener("submit",e=>{
    e.preventDefault();
    prix=Number(inputPrix.value);
})

formExo4Reponse.addEventListener("submit",e=>{
    divExo4.innerHTML="";
    e.preventDefault();
    userNumber=Number(inputUserNumber.value);
    if(prix>userNumber){
        exo4Reponse="Plus grand !"
    }else if(prix<userNumber){
        exo4Reponse="Plus petit !"
    } else {
        exo4Reponse= `Bravo le prix est bien de ${prix}`
    }

    divExo4.insertAdjacentHTML("afterbegin",exo4Reponse)
})

//Exercice 5
const formExo5=document.getElementById("formExo5");
const inputNom=document.getElementById("nom");
const inputPrenom=document.getElementById("prenom");
const inputBIrthdate=document.getElementById("birthdate");
const divExo5=document.getElementById("divExo5");

let nom;
let prenom;
let birthdate;
let reponseExo5;

formExo5.addEventListener("submit",e=>{
    e.preventDefault();
    nom=inputNom.value;
    prenom=inputPrenom.value;
    birthdate=new Date(inputBIrthdate.value);

    let now = new Date();
    let age= Math.floor((now-birthdate)/1000/60/60/24/365.25);
    let day=now.getDay();
    let month=now.getMonth();
    let dayB=birthdate.getDay();
    let monthB=birthdate.getMonth();
    if(day===dayB && month===monthB){
        reponseExo5=`Joyeux ${age} ème anniversaire, ${nom} ${prenom}`
    }
    divExo5.insertAdjacentHTML("afterbegin",reponseExo5)
})

// Exercice 6

const formExo6Tab1=document.getElementById("formExo6Tab1");
const formExo6Tab2=document.getElementById("formExo6Tab2");
const inputTab1=document.getElementById("tab1");
const inputTab2=document.getElementById("tab2");
const buttonCalcul=document.getElementById("calcul");
const divExo6=document.getElementById("divExo6");

let tab1=[];
let tab2=[];
let produit;
let somme=Number();

formExo6Tab1.addEventListener("submit",e=>{
    e.preventDefault();
    tab1.push(Number(inputTab1.value));
    console.log(tab1);
})
formExo6Tab2.addEventListener("submit",e=>{
    e.preventDefault();
    tab2.push(Number(inputTab2.value));
    console.log(tab2);
})

function calculSchtroumpf(a,b){
    a.forEach(elementa => {
        b.forEach(elementb=>{
            produit=elementa*elementb
            somme= somme +produit;
        })
    });
    console.log(somme);
    divExo6.insertAdjacentHTML("afterbegin",`Le calcul du schtroumpf est de ${somme}`);
}