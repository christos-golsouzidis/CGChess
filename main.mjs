"use strict";
import {ResizeWindow, ToggleGameMenu, ToggleEditMenu, ToggleViewMenu, 
  DisplayMenu, DisplaySetupPos} from "./display.mjs";
import {CreateNewClassical, CreateNewRFC} from "./setup.mjs";

export const game = {
  classicPos:true, //true = classical, false = 960

}

export const position = {
  square: Array.from({ length: 8 }, () => Array(8).fill('')),
  fenString: '',
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
    o('reset event');
  }
}


export const chessMenu = new ChessMenu();


$('document').ready(function ()
{
  // reset menu values
  chessMenu.reset();

  // initialize board
  CreateNewRFC();

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

  $('#classic_button').on('click',CreateNewClassical);

  $('#spid').on('click',function(){this.select();});

  $('#spid').on('keypress',function(key){
    if(key.which == 13)
    {
      CreateNewRFC();
    }  
  });

  $('#frc_button').on('click',CreateNewRFC);

  ResizeWindow();
  DisplaySetupPos();
  });
