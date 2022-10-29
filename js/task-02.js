const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngredients = document.querySelector("#ingredients");

ingredients.forEach(ingredient => {
  const itemEl = document.createElement("li");
itemEl.classList.add("item");
  itemEl.textContent = ingredient;
  listOfIngredients.append(itemEl);
})
console.log(listOfIngredients);
