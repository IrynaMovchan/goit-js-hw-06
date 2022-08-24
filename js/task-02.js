const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientArr = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item");
  return ingredientEl;
});

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...ingredientArr);

console.log(ingredientsEl);
