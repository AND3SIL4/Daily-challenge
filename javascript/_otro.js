function palindrom(number) {
  let num = Number(number);
  if (number.length === 0) {
    return 'Required field';
  } else if (!num) {
    return 'Must be a number besides 0';
  } else {
    return '';
  }
}
console.log(palindrom('123'));
console.log(palindrom(''));
console.log(palindrom('abcf'));
