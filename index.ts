
const Canvas:any = document.querySelector('canvas') as HTMLCanvasElement;

const c:any = Canvas.getContext('2d');

if(c !== null)
{
    c.fillStyle = 'navy';
    c.fillRect(50,50,50,50);
    c.stroke();
}




