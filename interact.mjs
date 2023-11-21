
import { Board } from "./board.mjs";
import { ResizeWindow } from "./display.mjs";
import {o} from "./main.mjs";
import { Stack } from "./stack.mjs";

export function MouseDown(key, board){

    let rect;
    let row;
    let col;

    rect = key.target.getBoundingClientRect();
    [row, col] = GetSquare(key.offsetX, key.offsetY, rect.width, rect.height)
    board.stack = board.squares[col][row];
    board.squares[col][row] = '';
    o(board.stack)
    DrawStackPiece(board);
    $('#stack').offset({top:key.clientY - board.unit/2, left:key.clientX - board.unit/2});
    $('#stack').width(board.unit);
    $('#stack').height(board.unit);

    board.ctx.clearRect(row*board.unit,col*board.unit,board.unit,board.unit);
    board.drawSquare(row, col);
    board.drawPieces();
}


export function MouseUp(key, board){

    let rect;
    let row;
    let col;

    $('#stack').offset({top:0,left:0});
    rect = key.target.getBoundingClientRect();
    $('#img_stack').remove();
    [row, col] = GetSquare(key.offsetX, key.offsetY, rect.width, rect.height);
    board.squares[col][row] = board.stack;
    board.stack = '';
    o(
        
    );

    board.ctx.clearRect(row*board.unit,col*board.unit,board.unit,board.unit);
    board.drawSquare(row,col);
    board.drawPieces();
}


export function MouseMove(key, board){

    let rect = key.target.getBoundingClientRect();
    
    if(board.stack === '')
    {
        $('#stack').offset({top:0,left:0});
    }
    else
    {
        $('#stack').offset({top:key.clientY - board.unit/2, left:key.clientX - board.unit/2});
        $('#stack').width(board.unit);
        $('#stack').height(board.unit);
    }

    o(
        GetSquare(key.offsetX, key.offsetY, rect.width, rect.height)
    );
    
}


function GetSquare(x, y, X, Y){

    let row, col;

    col = Math.floor(8 * x / X);
    row = Math.floor(8 * y / Y);

    return [col, row];
}


function DrawStackPiece(board)
{

    switch(board.stack)
    {
        case 'q':
            $('#stack').append(`<img id="img_stack" src="./rc/60bq.png" 
            width="${board.unit}px"/>`);
            break;
        case 'Q':
            $('#stack').append(`<img id="img_stack" src="./rc/60wq.png" 
            width="${board.unit}px"/>`);
            break;
        case 'k':
            $('#stack').append(`<img id="img_stack" src="./rc/60bk.png" 
            width="${board.unit}px"/>`);
            break;
        case 'K':
            $('#stack').append(`<img id="img_stack" src="./rc/60wk.png" 
            width="${board.unit}px"/>`);
            break;
        case 'p':
            $('#stack').append(`<img id="img_stack" src="./rc/60bp.png" 
            width="${board.unit}px"/>`);
            break;
        case 'P':
            $('#stack').append(`<img id="img_stack" src="./rc/60wp.png" 
            width="${board.unit}px"/>`);
            break;
        case 'n':
            $('#stack').append(`<img id="img_stack" src="./rc/60bn.png" 
            width="${board.unit}px"/>`);
            break;
        case 'N':
            $('#stack').append(`<img id="img_stack" src="./rc/60wn.png" 
            width="${board.unit}px"/>`);
            break;
        case 'b':
            $('#stack').append(`<img id="img_stack" src="./rc/60bb.png" 
            width="${board.unit}px"/>`);
            break;
        case 'B':
            $('#stack').append(`<img id="img_stack" src="./rc/60wb.png" 
            width="${board.unit}px"/>`);
            break;
        case 'r':
            $('#stack').append(`<img id="img_stack" src="./rc/60br.png" 
            width="${board.unit}px"/>`);
            break;
        case 'R':
            $('#stack').append(`<img id="img_stack" src="./rc/60wr.png" 
            width="${board.unit}px"/>`);
            break;
    
    
    }
}













