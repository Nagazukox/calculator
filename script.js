const numero = document.querySelectorAll('.numero');
const numero_actual = document.querySelector('.numero-actual');
const borrar = document.querySelector('.borrar');
let numero_actual_txt = "";
let tiene_punto = false;
let ultimo_numero = 0;

function actualizar_numero(input) {

    if (numero_actual.textContent == "0"){
        numero_actual_txt = "";
    };

    numero_actual_txt = numero_actual_txt + input;
    numero_actual.textContent = numero_actual_txt;
    console.log(numero_actual_txt + " dentro de la funcion actualizar numero");

}

numero.forEach(numero => {

    numero.addEventListener('click', () => {
        console.log(numero.textContent);
        console.log(tiene_punto);

        //Comprobar si ya tiene un punto, permitir máximo solo 1 punto.
        if (numero.classList.contains('punto') && tiene_punto == false) {

            tiene_punto = true;
            actualizar_numero(numero.textContent);
            console.log('punto detected');
            console.log(tiene_punto);

        } else if (!numero.classList.contains('punto')){
            actualizar_numero(numero.textContent);
        }
    });
});

borrar.addEventListener('click', () => {

    ultimo_numero = numero_actual_txt.charAt(numero_actual_txt.length -1);
    console.log("El carácter eliminado fue: " + ultimo_numero);

    if (ultimo_numero == ".") {
        tiene_punto = false;
        numero_actual_txt = numero_actual_txt.substring(0, numero_actual_txt.length -1);
        numero_actual.textContent = numero_actual_txt;
    } else if (numero_actual_txt.length == 1) {
        numero_actual_txt = "0";
        numero_actual.textContent = numero_actual_txt;
    } else {
        numero_actual_txt = numero_actual_txt.substring(0, numero_actual_txt.length -1);
        numero_actual.textContent = numero_actual_txt;
    }

    

});

