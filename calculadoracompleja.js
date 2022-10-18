function acumularoperacion(numero) {
    let pantalla=document.getElementById('pantalla')
    let operacion=document.getElementById('pantalla').value;
    operacion+=numero
    pantalla.value=operacion;
}

function borrar() {
    let pantalla=document.getElementById('pantalla')
    pantalla.value="";
}
function acumularsuma() {
    let pantalla=document.getElementById('pantalla')
    let operacion=document.getElementById('pantalla').value;
    operacion+="+"
    pantalla.value=operacion;
}
function acumulardivision() {
    let pantalla=document.getElementById('pantalla')
    let operacion=document.getElementById('pantalla').value;
    operacion+="/"
    pantalla.value=operacion;
}
function acumularresta() {
    let pantalla=document.getElementById('pantalla')
    let operacion=document.getElementById('pantalla').value;
    operacion+="-"
    pantalla.value=operacion;
}
function acumularmultiplicacion() {
    let pantalla=document.getElementById('pantalla')
    let operacion=document.getElementById('pantalla').value;
    operacion+="*"
    pantalla.value=operacion;
}

function resultado() {
    let pantalla=document.getElementById('pantalla')
    let operacion=document.getElementById('pantalla').value;
    pantalla.value=eval(operacion);
}