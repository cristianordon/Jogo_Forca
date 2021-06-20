/*
 Descricao : 
      Classe criada para apresentar imagens na tela, caso o usuário perca.
 Aluno : 
      Cristiano Rodrigues de Oliveira Neto
 
 Data :
      20/06/2021
 */

import {Word} from "./Word.js";
import {currentWord} from "./currentgame.js";

const alertBox = document.querySelector("#alert-box");
const gameKeyboard = document.querySelector("#keyboard-container")

function alert(alertText) {
    alertBox.innerHTML = alertText;
    alertBox.classList.add("visible");
    gameKeyboard.classList.remove("visible");
}

if (currentWord.mistakes == 6) {
    alert("Que pena! Você Perdeu! :(")
} else {
    if (currentWord.corrects == currentWord.characters.length) {
        alert("Parabéns!!! Você Ganhou! :D")
    }
}

export {alertBox, gameKeyboard};