const categories = document.querySelectorAll('.item');
const length = categories.length;
console.log(`Number of categories: ${length}`)

categories.forEach((item) => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`)
});


