/*
 Descricao : 
      Classe criada para funcionalidades na página Index.
 Aluno : 
      Cristiano Rodrigues de Oliveira Neto
 
 Data :
      20/06/2021
 */


import {Word} from "./Word.js";
import {currentWord, alertBox, gameKeyboard} from "./currentgame.js";

//Keyboard
const keyboardSwitcher = document.querySelector("#keyboard-switch")
const keyboard = document.querySelector("#keyboard");
const keyboardSwitcherButton = document.querySelectorAll("#keyboard-switch a");

keyboardSwitcher.addEventListener("click", function(){
   keyboard.classList.toggle("qwerty");
   keyboardSwitcherButton.forEach((button) => button.classList.toggle("active"));
})