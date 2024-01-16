/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

// Main function
function main(){
    console.log(mayus('ANDRES FELIPE SILVA'));
    console.log(mayus("¿hola      qué tal estás?"));
}

/**
 * Function that recived one string and returns the first letter of every word in mayus 
 * @param {string} string 
 * @returns string in mayus with the first letter inputted
 */
const mayus = (string) => string.toLowerCase().split(' ').map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(' ');

main()


function capitalize(text) {
    let capitalizedText = text;

    text.replace(/[^A-zÀ-ú]/g, " ").split(" ").forEach(word => {
        capitalizedText = capitalizedText.replace(new RegExp(word, 'g'), word.charAt(0).toUpperCase() + word.slice(1));
    });

    return capitalizedText;
}

console.log(capitalize("¿hola qué tal estás?"));
console.log(capitalize("¿hola      qué tal estás?"));
console.log(capitalize("El niño ñoño"));
