/*
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
 */

// Main function
function main(){
    console.log(miliSeg(1, 1, 1, 1));
}

/**
 * This function recived three parameters of any data type and after that parse they to integers and return the total result on miliseg
 * @param {any} days 
 * @param {any} hours 
 * @param {any} minutes
 * @returns the time on miliseconds 
 */
function miliSeg(days, hours, minutes, seconds){
    // Parse the inputs to numbers
    let daysInInt = Number(days)
    let hoursInInt = Number(hours)
    let minutesInInt = Number(minutes)
    let secondsInInt = Number(seconds)
    
    // Calculate the time in milisegunds
    let milisegunds = daysInInt * 24 * 60 * 60 * 1000 + hoursInInt * 60 * 60 * 1000 + minutesInInt * 60 * 1000 + secondsInInt * 1000;
    return `The total time in milisegunds is: ${milisegunds}`
}
main();

