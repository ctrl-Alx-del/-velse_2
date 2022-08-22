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
*/


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