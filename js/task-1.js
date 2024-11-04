const categoriesList = document.querySelector('#categories');

const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`Кількість категорій ${categoryItems.length}`);

categoryItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const categoryElementsCount = item.querySelectorAll('li').length;
    console.log(`Категорії ${categoryTitle}`);
    console.log(`Елементи категорії ${categoryElementsCount}`);
});