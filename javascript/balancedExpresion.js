
/**
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1. 
 * @param {string} str1 
 * @param {string} str2 
 * @returns {string}
 */

// Ejemplo programacion junior
function balancedExpression(str1, str2) {
    let out1 = []
    let out2 = [] 

    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()

    for (const element of str1) {
        if (!str2.includes(element)) {
            out1.push(element)   
        }
    }

    for (const element of str2) {
        if (!str1.includes(element)) {
            out2.push(element)
        }
    }

    console.log(out1.join('')); 
    console.log(out2.join('')); 
}

balancedExpression('PERROX', 'persona');


// Ejemplo programacion modular
function main() {
    printNonCommon("perrox","persona");
}

function printNonCommon(str1, str2) {
    console.log(findNonCommon(str1, str2));
    console.log(findNonCommon(str2, str1));
}

function findNonCommon(str1, str2) {
    var out = "";
    Array.from(str1.toLowerCase()).forEach(function(it) {
        if (!str2.toLowerCase().includes(it)) {
            out += it;
        }
    });
    return out;
}
main()
