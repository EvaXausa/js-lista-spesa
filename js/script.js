/*
1- Inventare una lista della spesa 
2- Stampo in console la lista
3- Stampare in pagina gli elementi della lista individualmente
*/

//Inventare una lista della spesa
const list = ["pane", "latte", "uova", "zucchero"];
const listElement = document.getElementById("list");
//Stampo in console la lista
let items = "";

let i = 0;
while (i < list.length) {
  items += `<li>${list[i]}</li> `;
  i++;
}
listElement.innerHTML = items;
