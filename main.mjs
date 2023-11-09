
import {ResizeWindow} from "./display.mjs";
import {Generate960, InitializePieces, GetFEN} from "./setup.mjs";

export const game = {
  classicPos:false, //true = classical, false = 960

}

export const position = {
  square: Array.from({ length: 8 }, () => Array(8).fill('')),
  fenString: '',
}


// ------------------- only for debugging purposes ----------------------
export const o = (i)=>console.log(String(i));
// ----------------------------------------------------------------------


if(game.classicPos === false){
    InitializePieces(Generate960());
}
else{
    InitializePieces('RNBQKBNR');
}
document.getElementById('fen').value = GetFEN();


document.getElementById("toggle").onclick = function(){toggleButton()};


document.getElementById("body").onload = function() {
  ResizeWindow();
};

document.getElementById("body").onresize = function() {
  ResizeWindow();
};


function toggleButton() {
    let x = document.getElementById("togglemenu");
    if (x.style.display === "grid") {
      x.style.display = "none";
    } else {
      x.style.display = "grid";
    }
}

// function gameButton() {
//     let x = document.getElementsByClassName("game");
//     if (x.style.display === "grid") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "grid";
//     }
// }
