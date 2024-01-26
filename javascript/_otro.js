function scaleRecipe(recipe, portions) {
  let newRecipe = recipe;

  for (let i in newRecipe){
    newRecipe[i] *= portions;
  }
  console.log(recipe);
  console.log(newRecipe);
}


const recipe = {
  sauce: 0.5,
  noodles: 250,
  meat: 150,
  tomatoes: 3,
  onion: 0.5,
};
console.log(scaleRecipe(recipe, 6));
