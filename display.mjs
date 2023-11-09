
import { position, game } from "./main.mjs";

const light = "#a8fbdc";
const dark = "#3ebf8e";


export function ResizeWindow () {
    let wwidth = window.innerWidth;
    let wheight = window.innerHeight;
    let Canvas = document.querySelector('canvas');
    let ctx = Canvas.getContext('2d');
    let unit;

    if(wheight >= wwidth)
    {
        Canvas.height = wwidth;
        Canvas.width = wwidth;
        // console.log(wwidth);
    }
    else
    {
        Canvas.height = wheight;
        Canvas.width = wheight;
        // console.log(wheight);
    }
    unit = Canvas.width / 8;
    if (ctx !== null) {
        DrawBoard(ctx, unit);
        DrawPieces(ctx, unit);
    }
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

