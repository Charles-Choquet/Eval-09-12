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
    if((annee%4 ===0 ||annee%400===0) && annee%100!==0){
        bisextile=true;
    }
}

//Exercice 4