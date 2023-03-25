const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const container = document.querySelector('#ingredients')
const marcup = ingredients.map( (names) => {
  const li = document.createElement('li');
  const p = document.createElement('p');
  li.classList.add('item');
  p.textContent = names;
  li.append(p);
  console.log(names)
  return li
});

container.append(...marcup)
console.log(marcup)