/*
 * Crea un programa que dibuje un cuadrado o un triángulo con asteriscos "*".
 * - Indicaremos el tamaño del lado y si la figura a dibujar es una u otra.
 * - EXTRA: ¿Eres capaz de dibujar más figuras?
 */

const POLYGON_TYPE = {
  SQUARE: "SQUARE",
  TRIANGLE: "TRIANGLE",
};

function printPolygon(size, polygonType) {
  if (size < 2) {
    console.log("Error, por favor intente de nuevo...");
  }

  for (let iterator = 1; iterator <= size; iterator++) {
    switch (polygonType.toUpperCase()) {
      case POLYGON_TYPE.SQUARE:
        console.log("* ".repeat(size));
        break;
      case POLYGON_TYPE.TRIANGLE:
        console.log('* '.repeat(iterator));
        break;
    }
  }
  console.log('');
}

// Main function
function main() {
  console.log("main");
  printPolygon(30, POLYGON_TYPE.SQUARE);
  printPolygon(15, POLYGON_TYPE.TRIANGLE);
}

main();