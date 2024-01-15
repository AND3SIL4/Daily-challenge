const test = (string) => {
  return string.toLowerCase().split(' ').map((letra)=> letra.toUpperCase().charAt(0) + letra.slice(1)).join(' ') + ', please'
}

console.log(test('horse'));
