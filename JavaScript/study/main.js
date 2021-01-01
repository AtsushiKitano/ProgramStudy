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

function keyDownA(keyInput) {
  const newP = document.createElement("p");

  if (keyInput === "A" ) {
    console.log("成功");
    newP.appendChild(document.createTextNode("成功"));
  } else {
    console.log("失敗");
    newP.appendChild(document.createTextNode("失敗"));
  }
}


addElement("anime");
addElement("sample");
createList(Animes, "anime");
const keyev = document.addEventListener("keydown", evt => keyDownA(evt.key));

console.log(document.body);
