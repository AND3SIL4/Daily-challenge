'''
* Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
'''
 
# Primera opcion de solucion del ejecicio
def reverse(text):
    textCount = len(text) -  1
    reversedText = ''

    for index in range(textCount + 1):
        reversedText += text[textCount - index]
    
    return reversedText

print(reverse('Hola que hace'))

# Opcion de recursividad
def recursive_text(text, index = 0, newReversedText = ''):
    textCount =  len(text) - 1
    newReversedText += text[textCount - index]
    if index < textCount:
        newIndex = index + 1
        newReversedText = recursive_text(text, newIndex, newReversedText)
    return newReversedText

print(recursive_text('Hola que hace'))
