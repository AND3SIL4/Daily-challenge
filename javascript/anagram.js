console.log(isAnamgram('AMOR', 'ROMA'));

function isAnamgram(wordOne, wordTwo) {
    // Valida primero si las palabras ingresdas son iguales y retorna falso
    if (wordOne.toLowerCase() === wordTwo.toLowerCase()) {
        return false
    }

    // Retorna verdadero si las palabras depues de ordenadas son iguales
    return sorString(wordOne.toLowerCase()) === sorString(wordTwo.toLowerCase());
}

// Funcion para ordenar las letras de las palabras
function sorString(string) {
    return string.split('').sort().join('');
}




