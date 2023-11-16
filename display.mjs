
import { position, board, o, chessMenu } from "./main.mjs";


// to do ... might need be added to the board class
export function ResizeWindow () 
{ 
    let wwidth = window.innerWidth;
    let wheight = window.innerHeight;
    let Canvas = document.getElementById('main_canvas');
    let ctx = Canvas.getContext('2d');
    let unit;

    if(wheight >= wwidth)
    {
        Canvas.height = wwidth;
        Canvas.width = wwidth;
    }
    else
    {
        Canvas.height = wheight;
        Canvas.width = wheight;
    }
    unit = Canvas.width / 8;
    if (ctx !== null) {
        DrawBoard(ctx, unit);
        DrawPieces(ctx, unit);
    }

    chessMenu.reset();

    if($("#toggle").css('display') === 'none')
    {
        $("#togglemenu").css('display','block');
    }
    else
    {
        $("#togglemenu").css('display','none');
    }
    DisplayMenu();

}


export function DisplayMenu(){
    
    if(chessMenu.option_game === true)
    {
        $('.submenu_game').css('display','block')
        $('.edit').css('display','none')
        $('.view').css('display','none')
        $('#game_text').text('<-')
    }
    else if(chessMenu.option_edit === true)
    {
        $('.submenu_edit').css('display','block')
        $('.game').css('display','none')
        $('.view').css('display','none')
        $('#edit_text').text('<-')
    }
    else if(chessMenu.option_view === true)
    {
        $('.submenu_view').css('display','block')
        $('.edit').css('display','none')
        $('.game').css('display','none')
        $('#view_text').text('<-')
    }
    else
    {
        $('.submenu_game').css('display','none')
        $('.submenu_edit').css('display','none')
        $('.submenu_view').css('display','none')
        $('#game_text').text('New game')
        $('#edit_text').text('Edit position')
        $('#view_text').text('View')
        $('.game').css('display','block')
        $('.edit').css('display','block')
        $('.view').css('display','block')

    }
    
}


export function ToggleGameMenu(){

    if(chessMenu.option_game === true)
    {
        chessMenu.option_game = false
        chessMenu.option_edit = false
        chessMenu.option_view = false
    }
    else
    {
        chessMenu.option_game = true
    }

    DisplayMenu();

}


export function ToggleEditMenu(){
    
    if(chessMenu.option_edit === true)
    {
        chessMenu.option_game = false
        chessMenu.option_edit = false
        chessMenu.option_view = false
    }
    else
    {
        chessMenu.option_edit = true
    }

    DisplayMenu();

}


export function ToggleViewMenu(){

    o('before' + chessMenu.option_view);
    if(chessMenu.option_view === true)
    {
        chessMenu.option_game = false
        chessMenu.option_edit = false
        chessMenu.option_view = false
    }
    else
    {
        chessMenu.option_view = true
    }
    o('after' + chessMenu.option_view);

    DisplayMenu();

}





