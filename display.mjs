
import { position, game, o, chessMenu } from "./main.mjs";

const light = "#a8fbdc";
const dark = "#3ebf8e";


export function ResizeWindow () {
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

    o('before' + chessMenu.option_edit);
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
    o('after' + chessMenu.option_edit);

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


export function DrawBoard(ctx, unit)
{
    for(let col=0;col<8;col++)
    {
        for(let row=0;row<8;row++)
        {
            if(((row ^ col) % 2) == 0)
            {
                ctx.fillStyle = light;
            }
            else
            {
                ctx.fillStyle = dark;
            }
            ctx.fillRect(unit*row, unit*col, unit, unit);
        }
    
    }
    
}


export function DrawPieces(ctx, unit)
{
    for(let col=0;col<8;col++)
    {
        for(let row=0;row<8;row++)
        {
            switch(position.square[row][col])
            {
                case 'k':
                const img_bk = new Image();
                img_bk.onload = ()=>{
                    ctx.drawImage(img_bk,row*unit,col*unit,unit,unit);
                };
                img_bk.src = './rc/60bk.png';
                break;
                case 'K':
                const img_wk = new Image();
                img_wk.onload = ()=>{
                    ctx.drawImage(img_wk,row*unit,col*unit,unit,unit);
                };
                img_wk.src = './rc/60wk.png';
                break;
                case 'b':
                const img_bb = new Image();
                img_bb.onload = ()=>{
                    ctx.drawImage(img_bb,row*unit,col*unit,unit,unit);
                };
                img_bb.src = './rc/60bb.png';
                break;
                case 'B':
                const img_wb = new Image();
                img_wb.onload = ()=>{
                    ctx.drawImage(img_wb,row*unit,col*unit,unit,unit);
                };
                img_wb.src = './rc/60wb.png';
                break;
                case 'n':
                const img_bn = new Image();
                img_bn.onload = ()=>{
                    ctx.drawImage(img_bn,row*unit,col*unit,unit,unit);
                };
                img_bn.src = './rc/60bn.png';
                break;
                case 'N':
                const img_wn = new Image();
                img_wn.onload = ()=>{
                    ctx.drawImage(img_wn,row*unit,col*unit,unit,unit);
                };
                img_wn.src = './rc/60wn.png';
                break;
                case 'r':
                const img_br = new Image();
                img_br.onload = ()=>{
                    ctx.drawImage(img_br,row*unit,col*unit,unit,unit);
                };
                img_br.src = './rc/60br.png';
                break;
                case 'R':
                const img_wr = new Image();
                img_wr.onload = ()=>{
                    ctx.drawImage(img_wr,row*unit,col*unit,unit,unit);
                };
                img_wr.src = './rc/60wr.png';
                break;
                case 'q':
                const img_bq = new Image();
                img_bq.onload = ()=>{
                    ctx.drawImage(img_bq,row*unit,col*unit,unit,unit);
                };
                img_bq.src = './rc/60bq.png';
                break;
                case 'Q':
                const img_wq = new Image();
                img_wq.onload = ()=>{
                    ctx.drawImage(img_wq,row*unit,col*unit,unit,unit);
                };
                img_wq.src = './rc/60wq.png';
                break;
                case 'p':
                const img_bp = new Image();
                img_bp.onload = ()=>{
                    ctx.drawImage(img_bp,row*unit,col*unit,unit,unit);
                };
                img_bp.src = './rc/60bp.png';
                break;
                case 'P':
                const img_wp = new Image();
                img_wp.onload = ()=>{
                    ctx.drawImage(img_wp,row*unit,col*unit,unit,unit);
                };
                img_wp.src = './rc/60wp.png';
                break;
            }
        }
    
    }
    
}


export function DrawText(ctx, unit)
{
    for(let col=0;col<8;col++)
    {
        for(let row=0;row<8;row++)
        {
            ctx.fillStyle = "black";
            ctx.font = "30px Arial";
            ctx.fillText(position.square[row][col], unit*row + unit/2 -10, unit*col + unit/2 +10);
        }
    
    }
    
}


export function DisplaySetupPos()
{
    let Canvas = document.getElementById('piece_setup');
    let ctx = Canvas.getContext('2d');
    let unit;

    Canvas.height = Canvas.width * 2 / 7;

    unit = Canvas.width / 7;
    if (ctx !== null) {
        DrawSetupBoard(ctx, unit);
        DrawSetupPieces(ctx, unit);
    }







}




