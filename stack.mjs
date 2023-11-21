import { o } from "./main.mjs";

export class Stack{

    constructor(canvas, side){
        this.canvas = canvas;
        this.canvas.width = side;
        this.canvas.height = side;
        this.ctx = this.canvas.getContext('2d');
        this.unit = side;
        this.value = 'k';
    }


}