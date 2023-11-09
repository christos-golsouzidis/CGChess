
const o = (i)=>console.log(i);


const add = function () {
    let counter = 0;
    o("init add()");
    return function () {
        counter += 1; 
        return counter;
    }
}();

function decrease(){
    let counter = 0;
    o("init dec()");
    return function () {
        counter += 1; 
        return counter;
    }

}


const neg = function negative(){
    let sign = 1;
    o('init neg()');
    return function () {
        sign = sign*(-1);
        return sign;
    }
}()


const dec = decrease();
  
o(add());
o(add());

o(dec());
o(dec());

o(neg());
o(neg());

o('END');