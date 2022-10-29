const categoriesEl =
    document.querySelectorAll("li.item");
console.log("Number of categories: " + categoriesEl.length);

categoriesEl.forEach(item => {
    const categoryName = item.firstElementChild.textContent;
    console.log("Category: " + categoryName);
    const numberOfItems = item.getElementsByTagName("li");
    console.log("Elements: " + numberOfItems.length);
});
