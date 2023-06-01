const numero = document.querySelectorAll('.numero');
const numero_actual = document.querySelector('.numero-actual');
const borrar = document.querySelector('.borrar');
let numero_actual_txt = "";
let tiene_punto = false;
let ultimo_numero = 0;

// Funcion para actualizar el número en la pantalla
function actualizar_numero(input) {
    console.log("Dentro de la función actualizar_numero, el input es: " + input);

    //Si el número es 0, restablecer el txt
    if (numero_actual.textContent == "0"){
        numero_actual_txt = "";
    };

    //Si el número ya contiene decimal
    if(numero_actual.textContent.includes(".")){

        //Si el input de la función es un decimal, no hacer nada
        if(input == ".") {
            console.log("Ya hay decimal en el número.");

        //Si el número tiene decimal, y el último input del usuario no es decimal, actualizar número
        } else {
            numero_actual_txt = numero_actual_txt + input;
            numero_actual.textContent = numero_actual_txt;
        }
    //Si el número no tiene decimal todavía
    } else {

        if (input == "." && numero_actual.textContent == "0") {
            numero_actual_txt = "0" + input;
            numero_actual.textContent = numero_actual_txt;
        } else {
            numero_actual_txt = numero_actual_txt + input;
            numero_actual.textContent = numero_actual_txt;
        }

    }
}

//Funcion para borrar el último número
function borrar_numero() {

    //Guardar último número borrado en variable
    let ultimo_numero = numero_actual_txt[numero_actual_txt.length - 1];
    console.log("Dentro de la función borrar_numero, el ultimo número es: " + ultimo_numero);

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

//Llamar actualizar_numero cuando se presiona sobre un número o carácter
numero.forEach(numero => {

    numero.addEventListener('click', () => {
        console.log(numero.textContent);

        actualizar_numero(numero.textContent);

    });
});

//Llamar borrar_numero cuando se presiona sobre el botón de borrar
borrar.addEventListener('click', () => {

    borrar_numero();

});

