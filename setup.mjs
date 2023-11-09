
import { position } from "./main.mjs";

import { o } from "./main.mjs";

export function InitializePieces(startPos)
{
    for(let row=0;row<8;row++)
    {
        position.square[row][0] = startPos[row].toLocaleLowerCase();

        position.square[row][1] = 'p';

        position.square[row][6] = 'P';

        position.square[row][7] = startPos[row].toLocaleUpperCase();

    }
}


export function Generate960()
{
    let startStr = Array(8).fill('-');
    
    let rnd = (len) => Math.floor(Math.random() * len);
    // place the first bishop on the darksquares
    let b1 = rnd(4);
    startStr[b1*2] = 'B';
    // place the second bishop on the lightsquares
    let b2 = rnd(4);
    startStr[b2*2+1] = 'B';
    // place the queen on an empty square
    let q = rnd(6);
    let index = 0;
    for(let j=0; j<8; j++){
        if(startStr[j] === '-'){

            if(q === index){
                startStr[j] = 'Q';
                break;
            }
            index++;
        }
    }
    // place the first knight on an empty square
    let n1 = rnd(5);
    index = 0;
    for(let j=0; j<8; j++){
        if(startStr[j] === '-'){

            if(n1 === index){
                startStr[j] = 'N';
                break;
            }
            index++;
        }
    }
    // place the second knight on an empty square
    let n2 = rnd(4);
    index = 0;
    for(let j=0; j<8; j++){
        if(startStr[j] === '-'){

            if(n2 === index){
                startStr[j] = 'N';
                break;
            }
            index++;
        }
    }
    // on the three remainding squares place a rook, 
    // the king and the other rook
    index = 0;
    for(let j=0; j<8; j++){
        if(startStr[j] === '-'){
            if(index === 0){
                startStr[j] = 'R';
            }
            if(index === 1){
                startStr[j] = 'K';
            }
            if(index === 2){
                startStr[j] = 'R';
                break;
            }

        index++;
        }
    }

    return startStr;
}


export function GetFEN()
{
    let emptyCounter = 0;
    o(position.square)

    for(let col=0;col<8;col++)
    {
        for(let row=0;row<8;row++)
        {
            if(position.square[row][col] !== '')
            {
                if(emptyCounter !== 0)
                {
                    position.fenString = position.fenString.concat(String(emptyCounter));
                }
                position.fenString = position.fenString.concat(position.square[row][col]);
            }
            else
            {
                emptyCounter++;
            }

        }
        if(emptyCounter !== 0)
        {
            position.fenString = position.fenString.concat(String(emptyCounter));
        }
        position.fenString = position.fenString.concat('/');
        emptyCounter = 0;
    }

    position.fenString = position.fenString.substring(0,position.fenString.length-1);
    return position.fenString;
}










