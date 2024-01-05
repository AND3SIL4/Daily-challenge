'''
Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.

 Procedimiento:
 1. Crear interfaz de poligono (Calcular e imprimir)
 2. Crear clases de los diferentes poligonos con su respectiva logica
 3. Crear funcion principal que ejecute los metodos de las clases
 4. Instanciar los tres poligonos con datos 
'''

# Definicion de la interfaz principal
class Polygon:
    def area(self):
        raise Exception('El area del poligono aun no se ha definido...')
    def printArea(self):
        print(f'El area del poligono es { round(self.area()) }')

# Definicion de la clase Tiangle
class Triangle(Polygon):
    def __init__(self, base, height):
        self.base = base
        self.height = height

    def area(self):
        return (self.base * self.height) / 2

# Definicion de clase Square
class Square(Polygon):
    def __init__(self, side):
        self.side = side
    
    def area(self):
        return self.side * self.side

# Definicion de clase rectangle
class Rectangle(Polygon):    
    def __init__(self, length, height):
        self.length = length
        self.height = height

    def area(self):
        return self.height * self.length
    
# Main function
def calulate_area(polygon):
    polygon.area()
    return polygon.printArea()


calulate_area(Triangle(12, 12))
calulate_area(Square(12))
calulate_area(Rectangle(12,12))