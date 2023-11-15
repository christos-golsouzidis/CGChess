

const o = (i)=>console.log(i);


// const add = function () {
//     let counter = 0;
//     o("init add()");
//     return function () {
//         counter += 1; 
//         return counter;
//     }
// }();

// function decrease(){
//     let counter = 0;
//     o("init dec()");
//     return function () {
//         counter += 1; 
//         return counter;
//     }

// }


// const neg = function negative(){
//     let sign = 1;
//     o('init neg()');
//     return function () {
//         sign = sign*(-1);
//         return sign;
//     }
// }()


// const dec = decrease();
  
// o(add());
// o(add());

// o(dec());
// o(dec());

// o(neg());
// o(neg());

// o('END');


function Generate960(posId)
{
    let startStr = Array(8).fill('-');
    
    const knigthTable = [
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
            startStr[j] = knigthTable[posId][index];
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


o(Generate960(0));


