const FizzBuzz = () => {
    for (let number = 1; number < 101; number++) {
        if (number % 3 && number % 5) {
            console.log('FizzBuzz');
        } else if (number % 3) {
            console.log('Fizz');
        } else if (number % 5) {
            console.log('Buzz');
        } else {
            console.log(number);
        }
    }
}

FizzBuzz();