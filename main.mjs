
"use strict";

// imports
import {ResizeWindow, ToggleGameMenu, ToggleEditMenu, ToggleViewMenu, 
    DisplayMenu} from "./display.mjs";
import { Board } from "./board.mjs";

// exports
export const game = {
  classicPos:true, // true = classical, false = 960

}

// ------------------- only for debugging purposes ----------------------
export const o = (i)=>console.log(String(i));
// ----------------------------------------------------------------------

export class ChessMenu {
  constructor(){
    this.reset()
  }
  reset(){
    this.option_game = false;
    this.option_edit = false;
    this.option_view = false;
  }
}


export const chessMenu = new ChessMenu();


$('document').ready(function ()
{
    // reset menu values
    chessMenu.reset();

    // initialize board
    let board = new Board();
    board.createNewRFC();

    // register events
    $('#toggle').on('click',function(){
        $("#togglemenu").fadeToggle(128);
        chessMenu.reset();
        DisplayMenu();
    });

    $(window).on('resize',ResizeWindow);

    $('#game').on('click',ToggleGameMenu);

    $('#edit').on('click',ToggleEditMenu);

    $('#view').on('click',ToggleViewMenu);

    $('#classic_button').on('click',board.createNewClassical);

    $('#spid').on('click',function(){this.select();});

    $('#spid').on('keypress',function(key){
        if(key.which == 13)
        {
            board.createNewRFC();
        }  
    });

    $('#frc_button').on('click',board.createNewRFC);

    // display functions
    ResizeWindow();
});
