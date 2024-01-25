function quantities(arr) {
  let noodles = 0;
  let sauce = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'noodles') {
        noodles += 50;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'sauce') {
        sauce += 0.2;
    }
  }

  let obj = {
    noodles: noodles,
    sauce: sauce,
  };

  return obj;
}

let arr = ["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"];
console.log(quantities(arr));
