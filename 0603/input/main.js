function myOnLoad() {
  let tag = document.getElementById('info');
  
  tag.innerHTML = "href: '" + window.location.href +
    "':: search: '" + window.location.search + "'";
}
let t = prompt("In:");
console.log(t);
/*
let fs = require("fs");
let stdinBuffer = fs.readFileSync(0); // STDIN_FILENO = 0
const lines = stdinBuffer.split("\n");
const casesCount = parseInt(lines[0]);
*/