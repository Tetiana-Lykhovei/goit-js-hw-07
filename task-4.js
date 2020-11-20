
let counterValue = document.querySelector('#value');
let mainValue = Number(counterValue.textContent);
console.log(mainValue);

const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');


let decrement = () => console.log(counterValue.textContent = mainValue -= 1);
decrementBtn.addEventListener('click', decrement);


let increment = () => console.log(counterValue.textContent = mainValue += 1);
incrementBtn.addEventListener('click', increment);

