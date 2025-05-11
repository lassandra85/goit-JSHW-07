const categories = document.querySelector('#categories');
const categoriesArray = categories.children;
console.log(categoriesArray);
console.log(`Number of categories: ${categoriesArray.length}`);

// Чи таким способом
const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

for (const category of items) {
    const title = category.querySelector('h2').textContent;
    const itemsCount = category.querySelectorAll('li').length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsCount}`);
}
