
"use strict";

// imports
import {ResizeWindow} from "./display.mjs";
import { Board } from "./board.mjs";
import { ChessMenu } from "./menu.mjs";
import { MouseDown, MouseUp, MouseMove } from "./interact.mjs";

// exports
export const game = {
  classicPos:true, // true = classical, false = 960

}

// ------------------- only for debugging purposes ----------------------
export const o = (i)=>console.log(String(i));
// ----------------------------------------------------------------------




$('document').ready(function ()
{
    // initialize menu
    let chessMenu = new ChessMenu();

    // initialize board
    let board = new Board(document.getElementById('main_canvas'),8,8,10);
    board.createNewRFC();

    // firstly call resize so that everything is displayed properly
    ResizeWindow(board, chessMenu);

    // register events
    $('#toggle').on('click',function(){
        $("#togglemenu").fadeToggle(128);
        chessMenu.reset();
        DisplayMenu();
    });

    $(window).on('resize',function(){ResizeWindow(board, chessMenu)});

    $('#game').on('click',function(){
        chessMenu.toggleGameMenu();
        ResizeWindow(board, chessMenu);
    });

    $('#edit').on('click',function(){
        chessMenu.toggleEditMenu();
        ResizeWindow(board, chessMenu);
    });

    $('#view').on('click',function(){
        chessMenu.toggleViewMenu();
        ResizeWindow(board, chessMenu);
    });

    $('#classic_button').on('click',function(){board.createNewClassical();});

    $('#spid').on('click',function(){this.select();});

    $('#spid').on('keypress',function(key){
        if(key.which == 13)
        {
            board.createNewRFC();
        }  
    });

    $('#frc_button').on('click',function(){board.createNewRFC();});

    $('#board').on('mousedown',function(key){
        MouseDown(key, board);
    });

    $('#board').on('mouseup',function(key){
        MouseUp(key, board);
    });

    $('#board').on('mousemove',function(key){
        MouseMove(key, board);
    });
});
