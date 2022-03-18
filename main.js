let out;
let text;

function onLoad() {
  out = document.getElementById("output");
  text = prompt("type something!");
  out.innerHTML = text;
}

console.log("initiated")