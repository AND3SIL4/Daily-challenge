/*
 * Crea un programa que determine si dos vectores son ortogonales.
 * - Los dos array deben tener la misma longitud.
 * - Cada vector se podría representar como un array. Ejemplo: [1, -2]
 */

//* Vectores ortogonales o perpendiculares son aquellos que su producto escalar es igual a cero
//*  Primera solucion
function vectors(vectorOne, vectorTwo) {
  if (vectorOne.length !== vectorTwo.length) {
    return "Both vectors must be equal";
  }

  for (let i = 0; i < vectorOne.length; i++) {
    for (let j = 0; j < vectorTwo.length; j++) {
      let result = vectorOne[i] * vectorTwo[j] + vectorOne[i + 1] * vectorTwo[j + 1];
      return result === 0 ? true : false;
    }
  }
}

//* Segunda solucion
function other (vectorOne, vectorTwo){
  return vectorOne[0] * vectorTwo[0] + vectorOne[1] * vectorTwo[1] === 0; 
}

//* Main function
function main() {
  console.log(vectors([1, 2],[-2, 1]));
  console.log(vectors([1,2], [2,1]));
  console.log(other([1, 2],[-2, 2]));
}

main();
