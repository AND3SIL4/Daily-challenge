/**
 * /*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */


/**
 * 
 * @param {string} stringText 
 * @returns {string}
 */

function reverse(text) {
    let textCount = text.length - 1;
    let reversedText = "";
    for (let index = 0; index <= textCount; index++) {
        reversedText += text[textCount - index];
    }
    return reversedText;
}

// Sin un bucle, mediante una función recursiva
function recursiveReverse(text, index = 0, reversedText = "") {
    let textCount = text.length - 1;
    let newReversedText = reversedText;
    newReversedText += text[textCount - index];
    if (index < textCount) {
        let newIndex = index + 1;
        newReversedText = recursiveReverse(text, newIndex, newReversedText);
    }
    return newReversedText;
}

console.log(reverse("Hola mundo"));
console.log(recursiveReverse("Hola mundo"));
