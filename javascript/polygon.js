/**
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 * @param {number} polygon 
 * @returns {number}
 */


// Definicion de interfaz Polygon
class Polygon{
    area(){
        throw new Error('Metodo "area" no implementado aun...')
    }
    printArea(){
        console.log(`El area del poligono es ${this.area()}`);
    }
}

// Definicion de la clase triangle
class Triangle extends Polygon {
    constructor(base, height){
        super();
        this.base = base;
        this. height = height;
    }

    area(){
        return (this.base * this.height) / 2;
    }
}

// Definicion de la clase Rectangle
class Rectangle extends Polygon {
    constructor(length, width){
        super();
        this. length = length;
        this.width = width;
    }

    area(){
        return (this.length * this.width)
    }
}

// Definicion de la clase square
class Square extends Polygon{
    constructor(side){
        super();
        this.side = side
    }

    area(){
        return (this.side * this.side)
    }
}

// Main function
function calculateArea(polygon) {
    polygon.printArea();
    return polygon.area();
}

calculateArea(new Triangle(10, 5));
calculateArea(new Rectangle(10, 5));
calculateArea(new Square(10));
