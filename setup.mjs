
import { game, position } from "./main.mjs";
import { ResizeWindow } from "./display.mjs";
import { o } from "./main.mjs";

export function InitializePieces(startPos)
{
    for(let row=0;row<8;row++)
    {
        position.square[row][0] = startPos[row].toLocaleLowerCase();

        position.square[row][1] = 'p';

        position.square[row][6] = 'P';

        position.square[row][7] = startPos[row].toLocaleUpperCase();

        position.square[row][2] = '';

        position.square[row][3] = '';

        position.square[row][4] = '';

        position.square[row][5] = '';
    }
    ResizeWindow();
}



export function Generate960(posId)
{
    let startStr = Array(8).fill('-');
    
    const knightTable = [
        'NN---',
        'N-N--',
        'N--N-',
        'N---N',
        '-NN--',
        '-N-N-',
        '-N--N',
        '--NN-',
        '--N-N',
        '---NN',
    ]

    // place the first bishop on the lightsquares
    let b1 = posId % 4;
    posId = Math.floor(posId / 4);
    startStr[b1*2+1] = 'B';

    // place the second bishop on the darksquares
    let b2 = posId % 4;
    posId = Math.floor(posId / 4);
    startStr[b2*2] = 'B';

    // place the queen on an empty square
    let q = posId % 6;
    posId = Math.floor(posId / 6);
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
    
    // place the knights according to the knight table schema
    // now posId should be 0-9
    index = 0;
    for(let j=0; j<8; j++){
        if(startStr[j] === '-'){
            startStr[j] = knightTable[posId][index];
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


export function CreateNewClassical(){
    
    InitializePieces('RNBQKBNR');
    $('#fen').val('');
    $('#fen').val(GetFEN());
    $('#rfc_id').text(518);

}


export function CreateNewRFC()
{

    let posId = $(spid).val();
    
    if(!(posId < 960 && posId >= 0))
    {
        posId = Math.floor(Math.random() * 960);
    }

    InitializePieces(Generate960(posId));
    $('#fen').val('');
    $('#fen').val(GetFEN());
    $('#rfc_id').text(posId);

}


export function GetFEN()
{
    let emptyCounter = 0;

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










