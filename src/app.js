/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  var texto = "I will write questions if I'm stuck <br>";
  for (let i = 0; i < 300; i++) {
    //let parrafo = document.getElementById("excuse");
    //parrafo.innerHTML += texto;
    document.getElementById("repeat").innerHTML += texto;
  }
};
