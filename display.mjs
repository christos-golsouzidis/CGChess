
import { o } from "./main.mjs";

export function ResizeWindow(board, menu) 
{
    let wwidth = window.outerWidth;
    let wheight = window.outerHeight;
    // let Canvas = document.getElementById('main_canvas');
    // let ctx = Canvas.getContext('2d');
    // let unit;

    o(wwidth);
    o(wheight);

    if(wheight >= wwidth)
    {
        board.canvas.height = wwidth;
        board.canvas.width = wwidth;
    }
    else
    {
        board.canvas.height = wheight;
        board.canvas.width = wheight;
    }
    board.unit = board.canvas.width / 8;
    
    o('call drawboard');

    board.drawBoard();

    o('call drawpieces');
    
    board.drawPieces();

    if($("#toggle").css('display') === 'none')
    {
        $("#togglemenu").css('display','block');
    }
    else
    {
        $("#togglemenu").css('display','none');
    }
    menu.displayMenu();

}



