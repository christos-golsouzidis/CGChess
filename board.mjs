
export class Board {
    constructor(canvas, rows, columns, unit, dark = '#3ebf8e', light = '#a8fbdc'){
        this.rows = rows;
        this.cols = columns;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.dark = dark;
        this.light = light;
        this.unit = unit;
        this.squares = Array.from({ length: this.cols }, () => Array(this.rows).fill(''));
    }

    initializePieces(startPos)
    {
        /*
            arg: A string representing the position on the first and last row
        */
        if(this.rows !== 8 || this.cols !== 8)
        {
            throw('Array must be 8*8');
        }
        for(let x=0;x<8;x++)
        {
            this.squares[0][x] = startPos[x].toLocaleLowerCase();
    
            this.squares[1][x] = 'p';
    
            this.squares[6][x] = 'P';
    
            this.squares[7][x] = startPos[x].toLocaleUpperCase();
    
            this.squares[2][x] = '';
    
            this.squares[3][x] = '';
    
            this.squares[4][x] = '';
    
            this.squares[5][x] = '';
        }
    }

    setupPieces(posString)
    {
        /*
            arg: see initializePieces but not restricted to 8*8 position.
        */
    
        for(let y=0;y<this.rows;y++)
        {
            for(let x=0;x<this.cols;x++)
            {
                switch(posString[index])
                {
                    case '8':
                        x++;
                    case '7':
                        x++;
                    case '6':
                        x++;
                    case '5':
                        x++;
                    case '4':
                        x++;
                    case '3':
                        x++;
                    case '2':
                        x++;
                    case '1':
                        x++;
                        break;
                    default:
                        this.squares[y][x] = posString[index];
                        break;

                }
                index++;

            }

        }

    }

    createNewRFC()
    {
        let posId = $(spid).val();
        
        if(!(posId < 960 && posId >= 0))
        {
            posId = Math.floor(Math.random() * 960);
        }
    
        this.initializePieces(this.generate960(posId));
        $('#fen').val(this.getFEN());
        $('#rfc_id').text(posId);
        this.drawBoard();
        this.drawPieces();
    
    }

    createNewClassical()
    {
        
        this.initializePieces('RNBQKBNR');
        $('#fen').val(this.getFEN());
        $('#rfc_id').text(518);
        this.drawBoard();
        this.drawPieces();
    }

    generate960(posId)
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

    getFEN()
    {
        let emptyCounter = 0;
        let fenString = '';
    
        if(this.rows !== 8 || this.cols !== 8)
        {
            throw('Array must be 8*8');
        }
        for(let y=0;y<8;y++)
        {
            for(let x=0;x<8;x++)
            {
                if(this.squares[y][x] !== '')
                {
                    if(emptyCounter !== 0)
                    {
                        fenString = fenString.concat(String(emptyCounter));
                    }
                    fenString = fenString.concat(this.squares[y][x]);
                }
                else
                {
                    emptyCounter++;
                }
    
            }
            if(emptyCounter !== 0)
            {
                fenString = fenString.concat(String(emptyCounter));
            }
            fenString = fenString.concat('/');
            emptyCounter = 0;
        }
    
        fenString = fenString.substring(0,fenString.length-1);
        return fenString;
    }    

    drawBoard()
    {
        for(let y=0;y<this.rows;y++)
        {
            for(let x=0;x<this.cols;x++)
            {
                if(((x ^ y) % 2) == 0)
                {
                    this.ctx.fillStyle = this.light;
                }
                else
                {
                    this.ctx.fillStyle = this.dark;
                }
                this.ctx.fillRect(this.unit*x, this.unit*y, this.unit, this.unit);
            }
        }
    }

    drawPieces()
    {
        for(let y=0;y<this.rows;y++)
        {
            for(let x=0;x<this.cols;x++)
            {
                switch(this.squares[y][x])
                {
                case 'k':
                const img_bk = new Image();
                img_bk.onload = ()=>{
                    this.ctx.drawImage(img_bk,x*this.unit,y*this.unit,this.unit,this.unit);
                };
                img_bk.src = './rc/60bk.png';
                break;
                case 'K':
                const img_wk = new Image();
                img_wk.onload = ()=>{
                    this.ctx.drawImage(img_wk,x*this.unit,y*this.unit,this.unit,this.unit);
                };
                img_wk.src = './rc/60wk.png';
                break;
                case 'b':
                const img_bb = new Image();
                img_bb.onload = ()=>{
                    this.ctx.drawImage(img_bb,x*this.unit,y*this.unit,this.unit,this.unit);
                };
                img_bb.src = './rc/60bb.png';
                break;
                case 'B':
                const img_wb = new Image();
                img_wb.onload = ()=>{
                    this.ctx.drawImage(img_wb,x*this.unit,y*this.unit,this.unit,this.unit);
                };
                img_wb.src = './rc/60wb.png';
                break;
                case 'n':
                const img_bn = new Image();
                img_bn.onload = ()=>{
                    this.ctx.drawImage(img_bn,x*this.unit,y*this.unit,this.unit,this.unit);
                };
                img_bn.src = './rc/60bn.png';
                break;
                case 'N':
                const img_wn = new Image();
                img_wn.onload = ()=>{
                    this.ctx.drawImage(img_wn,x*this.unit,y*this.unit,this.unit,this.unit);
                };
                img_wn.src = './rc/60wn.png';
                break;
                case 'r':
                const img_br = new Image();
                img_br.onload = ()=>{
                    this.ctx.drawImage(img_br,x*this.unit,y*this.unit,this.unit,this.unit);
                };
                img_br.src = './rc/60br.png';
                break;
                case 'R':
                const img_wr = new Image();
                img_wr.onload = ()=>{
                    this.ctx.drawImage(img_wr,x*this.unit,y*this.unit,this.unit,this.unit);
                };
                img_wr.src = './rc/60wr.png';
                break;
                case 'q':
                const img_bq = new Image();
                img_bq.onload = ()=>{
                    this.ctx.drawImage(img_bq,x*this.unit,y*this.unit,this.unit,this.unit);
                };
                img_bq.src = './rc/60bq.png';
                break;
                case 'Q':
                const img_wq = new Image();
                img_wq.onload = ()=>{
                    this.ctx.drawImage(img_wq,x*this.unit,y*this.unit,this.unit,this.unit);
                };
                img_wq.src = './rc/60wq.png';
                break;
                case 'p':
                const img_bp = new Image();
                img_bp.onload = ()=>{
                    this.ctx.drawImage(img_bp,x*this.unit,y*this.unit,this.unit,this.unit);
                };
                img_bp.src = './rc/60bp.png';
                break;
                case 'P':
                const img_wp = new Image();
                img_wp.onload = ()=>{
                    this.ctx.drawImage(img_wp,x*this.unit,y*this.unit,this.unit,this.unit);
                };
                img_wp.src = './rc/60wp.png';
                break;
                }
            }
        }
    }

}
