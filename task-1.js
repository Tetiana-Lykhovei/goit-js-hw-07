const itemRef = document.querySelectorAll(".item");
console.log(`В списке ${itemRef.length} категории`);

const elemGroups = document.querySelectorAll(".item")
elemGroups.forEach(function (element) {
    console.log(`Категория: ${element.firstElementChild.textContent}`)
    console.log(`Количество элементов: ${element.lastElementChild.children.length}`)
}
)




