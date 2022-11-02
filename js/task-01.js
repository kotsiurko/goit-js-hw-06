// Очікуваний результат
// ===============================================================
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
// ===============================================================

const categoriesNumber = document.querySelector('#categories').children.length;
console.log('Number of categories:', categoriesNumber);

const listItems = document.querySelectorAll('.item');

listItems.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelector('ul').children.length}`);
});



