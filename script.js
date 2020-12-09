//Exercice 1
const formExo1 = document.getElementById("formExo1");
const inputExo1 = document.getElementById("inputExo1");
const divExo1 = document.getElementById("divExo1");

formExo1.addEventListener("submit", e => {
    divExo1.innerHTML="";
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
const formExo2=document.getElementById("formExo2");
const inputCandidat1=document.getElementById("candidat1");
const inputCandidat2=document.getElementById("candidat2");
const inputCandidat3=document.getElementById("candidat3");
const inputCandidat4=document.getElementById("candidat4");
const divExo2=document.getElementById("divExo2");
let elu;
let listCandidat=[];

formExo2.addEventListener("submit",e=>{
    divExo2.innerHTML="";
    e.preventDefault();
    listCandidat.push(Number(inputCandidat1.value));
    listCandidat.push(Number(inputCandidat2.value));
    listCandidat.push(Number(inputCandidat3.value));
    listCandidat.push(Number(inputCandidat4.value));
    console.log(listCandidat);
    rep=listCandidat.splice(0,1)[0];
    console.log(rep);
    console.log(listCandidat);

    if(rep>50){
        elu="Le candidat 1 est élu au premier tour";
        
    }else if(rep<12.5){
        elu="Le candidat 1 ne participe pas au second tour";
    } else {
       listCandidat.sort((a,b)=>b-a);
       if(rep>listCandidat[0]){
           elu="Le candidat 1 est en ballotage favorable"
       } else {
           elu="Le candidat 1 n'est pas en ballotage favorable"
       }
    }
    divExo2.insertAdjacentHTML("afterbegin",elu);
})

//Exercice 3 