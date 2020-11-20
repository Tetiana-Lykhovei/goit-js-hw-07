const inputRef = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');

inputRef.addEventListener('input', inputChanger);

function inputChanger(event) {
    nameLabelRef.textContent =
        inputRef.value === '' ? 'незнакомец' : event.currentTarget.value;
};

