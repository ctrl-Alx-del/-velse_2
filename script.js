/*
let sections = document.querySelector("section");

console.log(sections);

let section2 = document.querySelector("section:nth-child(2)");

console.log(section2);

let overskrift = document.querySelector("h1");

console.log(overskrift);

let underoverskrift = document.querySelector("h2");

console.log(underoverskrift);

let articleH3 = document.querySelector("article:nth-child(2)");

console.log(articleH3);

let article1 = document.querySelector("article:nth-child(3)");

console.log(article1);

let article2 = document.querySelector("#article2");

console.log(article2);

let article2H3 = document.querySelector("section:nth-child(2) " + "article")

console.log(article2H3);



let overskrift = document.querySelector("h1");

overskrift.textContent = "Kageopskrift";

let articleH3 = document.querySelector("article:nth-child(2)");

articleH3.innerHTML = "Småkager";

let article1 = document.querySelector("article:nth-child(3)");

article1.textContent = "Sådan her laver du lækre småkager";

let article2H3 = document.querySelector("section:nth-child(2) " + "article")

article2H3.textContent = "Muffins";

let article2 = document.querySelector("#article2");

article2.innerHTML = "<b> Muuuuuuuuuuuffiiiiiiins </b>";


let billed1 = document.querySelector("img");

let billed2 = document.querySelector("section:nth-child(2) "+ "img");

billed1.src = "Cola.webp";

billed2.src = "Tuborg.webp";

billed1.alt = "Dette er en cola";

billed2.alt = "Dette er en øl";
*/

document.addEventListener("DOMContentLoaded", erLoadet);

function erLoadet(){
    console.log("Siden er loadet");
}

let article = document.createElement("article");

let section2 = document.querySelector("section:nth-child(2)");

section2.appendChild(article);

let h3 = document.createElement("h3");

let overskrift = document.createTextNode("chokolade kage");

h3.appendChild(overskrift);

article.appendChild(h3);

let tekst = document.createElement("p");

let tekstIndhold = document.createTextNode("Sådan laver du en god chokolade kage");

tekst.appendChild(tekstIndhold);

article.appendChild(tekst);

let billede = document.createElement("img");

billede.src = "chokoladekage.webp";

article.appendChild(billede);


let billede1 = document.querySelector("img");

billede1.addEventListener("click", skiftBillede);

function skiftBillede() {
billede1.src = "https://placeimg.com/400/300/arch?t="+Math.floor(Math.random()*11);
}