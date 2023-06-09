const numero = document.querySelectorAll('.numero');
const numero_actual = document.querySelector('.numero-actual');
const borrar = document.querySelector('.borrar');
const siguiente_numero = document.querySelector('.siguiente-input');
const signo_sumar = document.querySelector('.sumar');
const signo_restar = document.querySelector('.restar');
const signo_multi = document.querySelector('.multiplicar');
const signo_dividir = document.querySelector('.dividir');
const signo_calcular = document.querySelector('.calcular');
const cambiar_signo = document.querySelector('.signo');
const signo_ce = document.querySelector('.CE');
const signo_c = document.querySelector('.C');

let numero_actual_txt = "";
let siguiente_numero_txt = "";
let tiene_punto = false;
let ultimo_numero = 0;
let recien_calculado = false;
let signo = "";
let resultado = "";

// Funcion para actualizar el número en la pantalla
function actualizar_numero(input) {

    //Si el número es 0, restablecer el txt
    if (numero_actual.textContent == "0"){
        numero_actual_txt = "";
    };

    //Si el número ya contiene decimal
    if(numero_actual.textContent.includes(".")){

        //Si el input de la función es un decimal, no hacer nada
        if(input == ".") {

        //Si el número tiene decimal, y el último input del usuario no es decimal, actualizar número
        } else {
            numero_actual_txt = numero_actual_txt + input;
            numero_actual.textContent = numero_actual_txt;
        }
    //Si el número no tiene decimal todavía
    } else {

        //Si el usuario presiona decimal como primer numero
        if (input == "." && numero_actual.textContent == "0") {
            numero_actual_txt = "0" + input;
            numero_actual.textContent = numero_actual_txt;
        //Si es una operación nueva
        } else if (!recien_calculado) {
            numero_actual_txt = numero_actual_txt + input;
            numero_actual.textContent = numero_actual_txt;
        //Si se ha hecho una operación antes y el usuario selecciona un número
        } else if(recien_calculado && signo.length < 1) {
            console.log("Dentro");
            console.log(signo);

            numero_actual_txt = numero_actual_txt + input;
            numero_actual.textContent = numero_actual_txt;
            siguiente_numero_txt = "";
            siguiente_numero.textContent = siguiente_numero_txt;
            recien_calculado = false;
        //Si se ha hecho una operación antes y el usuario selecciona otra operación
        } else if (recien_calculado && signo.length > 1) {
            numero_actual_txt = numero_actual_txt + input;
            numero_actual.textContent = numero_actual_txt;
        }
    }
}

//Funcion para borrar el último número
function borrar_numero() {

    //Guardar último número borrado en variable
    let ultimo_numero = numero_actual_txt[numero_actual_txt.length - 1];

    //Eliminar último número
    numero_actual_txt = numero_actual_txt.substring(0, numero_actual_txt.length -1);
    numero_actual.textContent = numero_actual_txt;

    //console.log("numero_actual_txt es:" + numero_actual_txt);
    //console.log("numero_actual es:" + numero_actual.textContent);

    //Si no quedan números, transformarlo en 0
    if (numero_actual_txt.length < 1) {
        numero_actual_txt = "0";
        numero_actual.textContent = numero_actual_txt;
    }
}

//Funcion sumar
function sumar_numero() {

    //Suma el número si no está vacio y no se ha hecho una operación antes
    if(!recien_calculado){

        ultimo_numero = numero_actual_txt;
        //Pasar número hacia arriba con signo de sumar
        siguiente_numero_txt = (numero_actual.textContent + " +");
        siguiente_numero.textContent = siguiente_numero_txt;

        //Restablecer números
        numero_actual.textContent = numero_actual_txt;
        numero_actual_txt = "";

    //Se activa si se ha hecho una operación antes
    } else if (recien_calculado) {
        
        ultimo_numero = resultado;

        siguiente_numero_txt = resultado + " +";
        siguiente_numero.textContent = siguiente_numero_txt;

        //Restablecer números
        numero_actual.textContent = 0;
        numero_actual_txt = "";
    }
}

function restar_numero() {



        if(!recien_calculado){

            if (numero_actual_txt.length >= 1) {
                ultimo_numero = numero_actual_txt;
                //Pasar número hacia arriba con signo de restar
                siguiente_numero_txt = (numero_actual.textContent + " -");
                siguiente_numero.textContent = siguiente_numero_txt;
        
                //Restablecer números
                numero_actual.textContent = numero_actual_txt;
                numero_actual_txt = "";
            } else {
                numero_actual_txt = "";
                numero_actual.textContent = "0";
                siguiente_numero_txt = (numero_actual.textContent + " -");
                siguiente_numero.textContent = siguiente_numero_txt;
            }
    
        //Se activa si se ha hecho una operación antes
        } else if (recien_calculado) {
            
                ultimo_numero = resultado;
                //Pasar número hacia arriba con signo de restar
                siguiente_numero_txt = (resultado + " -");
                siguiente_numero.textContent = siguiente_numero_txt;
        
                //Restablecer números
                numero_actual.textContent = 0;
                numero_actual_txt = "";
        }

}

function multiplicar_numero() {



    if(!recien_calculado){

        if (numero_actual_txt.length >= 1) {
            ultimo_numero = numero_actual_txt;
            //Pasar número hacia arriba con signo de multiplicar
            siguiente_numero_txt = (numero_actual.textContent + " \u00D7");
            siguiente_numero.textContent = siguiente_numero_txt;
    
            //Restablecer números
            numero_actual.textContent = numero_actual_txt;
            numero_actual_txt = "";
        } else {
            numero_actual_txt = "";
            numero_actual.textContent = "0";
            siguiente_numero_txt = (numero_actual.textContent + " \u00D7");
            siguiente_numero.textContent = siguiente_numero_txt;
        }

    //Se activa si se ha hecho una operación antes
    } else if (recien_calculado) {
        
            ultimo_numero = resultado;
            //Pasar número hacia arriba con signo de multiplicar
            siguiente_numero_txt = (resultado + " \u00D7");
            siguiente_numero.textContent = siguiente_numero_txt;
    
            //Restablecer números
            numero_actual.textContent = 0;
            numero_actual_txt = "";
    }

}

function dividir_numero() {

    if(!recien_calculado){

        if (numero_actual_txt.length >= 1) {
            ultimo_numero = numero_actual_txt;
            //Pasar número hacia arriba con signo de dividir
            siguiente_numero_txt = (numero_actual.textContent + " \u00F7");
            siguiente_numero.textContent = siguiente_numero_txt;
    
            //Restablecer números
            numero_actual.textContent = numero_actual_txt;
            numero_actual_txt = "";
        } else {
            numero_actual_txt = "";
            numero_actual.textContent = "0";
            siguiente_numero_txt = (numero_actual.textContent + " \u00F7");
            siguiente_numero.textContent = siguiente_numero_txt;
        }

    //Se activa si se ha hecho una operación antes
    } else if (recien_calculado) {
        
            ultimo_numero = resultado;
            //Pasar número hacia arriba con signo de dividir
            siguiente_numero_txt = (resultado + " \u00F7");
            siguiente_numero.textContent = siguiente_numero_txt;
    
            //Restablecer números
            numero_actual.textContent = 0;
            numero_actual_txt = "";
    }
}

//Función para calcular cuando se presiona el botón de =

function calcular_resultado(operacion) {

    let numero_superior = +ultimo_numero;
    let numero_nuevo = +numero_actual.textContent;

    console.log("Ultimo_numero = " + ultimo_numero);
    console.log("Numero_nuevo = " + numero_actual.textContent);

    
    siguiente_numero.textContent = siguiente_numero_txt + " " + numero_actual.textContent + " =";
    //siguiente_numero_txt = "";
    
    numero_actual_txt = "";
    

    switch(operacion){
        case "sumar":
            resultado = numero_superior+numero_nuevo
            numero_actual.textContent = resultado;
            break;
        case "restar":
            resultado = numero_superior-numero_nuevo;
            numero_actual.textContent = resultado;
            break;
        case "multiplicar":
            resultado = numero_superior*numero_nuevo;
            numero_actual.textContent = resultado;
            break;
        case "dividir":
            resultado = numero_superior/numero_nuevo;
            numero_actual.textContent = resultado;
            break;
    }
    recien_calculado = true;
    signo = "";
}

//Función para cambiar signo del número

function cambiazo(){


    if(numero_actual.textContent.charAt(0) != "-") {
        numero_actual_txt = "-" + numero_actual_txt;
        numero_actual.textContent = numero_actual_txt;
    } else {
        numero_actual_txt = numero_actual_txt.substring(1,numero_actual_txt.length);
        numero_actual.textContent = numero_actual_txt;
    }

}

//Llamar actualizar_numero cuando se presiona sobre un número
numero.forEach(numero => {

    numero.addEventListener('click', () => {

            actualizar_numero(numero.textContent);
    });
});

//Llamar borrar_numero cuando se presiona sobre el botón de borrar
borrar.addEventListener('click', () => {

    borrar_numero();

});

//Llamar sumar_numero cuando se presiona sobre el botón de sumar
signo_sumar.addEventListener('click', () => {

    signo = "sumar";
    sumar_numero();

});

//Llamar restar_numero cuando se presiona sobre el botón de restar
signo_restar.addEventListener('click', () => {

    signo = "restar";
    restar_numero();

});

//Llamar multiplicar_numero cuando se presiona sobre el botón de multiplicar
signo_multi.addEventListener('click', () => {

    signo = "multiplicar";
    multiplicar_numero();

});

//Llamar dividir_numero cuando se presiona sobre el botón de dividir
signo_dividir.addEventListener('click', () => {

    signo = "dividir";
    dividir_numero();

});

//Realizar la operación cuando se presiona el signo =
signo_calcular.addEventListener('click', () => {

    calcular_resultado(signo);

});

//Cambiar el signo positivo o negativo del número
cambiar_signo.addEventListener('click', () => {

    cambiazo();

});

signo_c.addEventListener('click', () => {

    numero_actual_txt = "0";
    numero_actual.textContent = numero_actual_txt;

});

signo_ce.addEventListener('click', () => {

    numero_actual_txt = "0";
    numero_actual.textContent = numero_actual_txt;

    siguiente_numero_txt = "";
    siguiente_numero.textContent = siguiente_numero_txt;

});