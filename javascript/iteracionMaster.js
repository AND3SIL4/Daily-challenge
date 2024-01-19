/*
 * Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno).
 * ¿De cuántas maneras eres capaz de hacerlo?
 * Crea el código para cada una de ellas.
 */

// Primera solución
function forSolution() {
  for (let i = 1; i < 101; i++) {
    console.log(i);
  }
}

// Segunda solución
function whileSolution() {
  let count = 0;

  while (count < 100) {
    count++;
    console.log(count);
  }
}

// Tercera solucion
function doWhileSolution() {
  let count = 0;

  do {
    count++;
    console.log(count);
  } while (count < 100);
}

// Cuatra solucion
function arrayFromAndForEachSolution() {
  Array.from({ length: 100 }, (_, i) => i + 1).forEach((value) =>
    console.log(value)
  );
}

// Quinta solucion
function arraySpreadAndForEach() {
  [...Array(100).keys()]
    .map((i) => i + 1)
    .forEach((value) => console.log(value));
}
function main() {
  forSolution();
  whileSolution();
  doWhileSolution();
  arrayFromAndForEachSolution();
  arraySpreadAndForEach();
}

main();

let arr = [1, 3, 4, 5, 6, 8, 3];

const NEW_ARR = Array.from(arr, (_, x) => {
  console.log(`Value: ${_} / Index: ${x}`);
});

const some = [...Array(100).keys()].map((x) => x);

console.log(some);
