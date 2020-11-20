const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const createIngLi = ingredient => {
    const elemListRef = document.createElement('li');
    elemListRef.textContent = ingredient;
    
    return elemListRef;
};

const products = ingredients.map(ingredient => createIngLi(ingredient));
// console.log(products);

const productsListRef = document.querySelector(`#ingredients`);
console.log(productsListRef);

productsListRef.append(...products);
