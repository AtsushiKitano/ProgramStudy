const companies = ["Aria", "Himeya", "Orange"];
const Animes = ["のんのんびより のんすとっぷ", "はたらく細胞"];

function addElement(id){
  const newElm = document.createElement("div");
  newElm.id = id;
  document.body.append(newElm);
}

function createList(list,id) {
  const newList = document.createElement("ul");
  for ( const el of list) {
    const newElm = document.createElement("li");
    newElm.appendChild(document.createTextNode(el));
    newList.appendChild(newElm);
  }
  document.getElementById(id).appendChild(newList);
}
addElement("anime");
addElement("test");
createList(Animes, "anime");
createList(companies, "test");
console.log(document.body);
