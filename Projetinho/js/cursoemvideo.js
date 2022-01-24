var x;
var y;
var px;
var py;
var vel;
var obj;
var timer;
function inicia(){
    x=0;
    y=0;
    px=0;
    py=0;
    vel=10;
    obj = document.querySelector("#dentro");
    document.addEventListener("keydown", teclaDw);
    document.addEventListener("keyup", teclaUp);
    timer = setInterval(enterFrame, 20);
}
function teclaDw(){
    var tecla = event.keyCode;
    if(tecla == 37){
        x = -1;
    }else if(tecla == 38){
        y= -1;
    }else if(tecla == 39){
        x = 1;
    }else if(tecla == 40){
        y = 1;
    }
}
function teclaUp(){
    var tecla = event.keyCode;
    if(tecla == 37){
        x = 0;
    }else if(tecla == 38){
        y= 0;
    }else if(tecla == 39){
        x = 0;
    }else if(tecla == 40){
        y = 0;
    }
}
function enterFrame(){
    px += x * vel;
    py += y * vel;
    obj.style.left = px+"px";
    obj.style.top = py+"px";
}
window.addEventListener("load", inicia);
