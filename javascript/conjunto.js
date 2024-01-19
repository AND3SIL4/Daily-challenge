/*
 * Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes
 *   de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes
 *   de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

// 1. Crear funcion.
// 2. Validar boolean.
// 3. Comparar elementos de los arrays.
//    3.1. Iterar cada array.
// 4. Retornar elementos segun comparación y boolean.

// Función auxiliar para encontrar elementos comunes o no comunes
function findElements(arr1, arr2, isCommon) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) === isCommon && !result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}

/**
 * This is a function that recived two arrays and one boolean and depending on the boolean return the value of those arrays
 * @param {string[]} arr1
 * @param {string[]} arr2
 * @param {boolean} isBoolean
 * @returns
 */
function challenge(arr1, arr2, isBoolean) {
  if (isBoolean) {
    // Buscar elementos comunes
    return findElements(arr1, arr2, true);
  } else {
    // Buscar elementos no comunes
    let notInArr2 = findElements(arr1, arr2, false);
    let notInArr1 = findElements(arr2, arr1, false);
    return [...notInArr2, ...notInArr1];
  }
}

// Función de prueba
function main() {
  console.log(challenge([1, 2, 3, 3, 4], [2, 2, 3, 3, 3, 4, 6], true));
  console.log(challenge([1, 2, 3, 3, 4], [3, 3, 3, 4, 6], false));
}

main();
