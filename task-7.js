const fontSizeControl = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

fontSizeControl.addEventListener('input', () => {
    textRef.style.fontSize = fontSizeControl.value + 'px';
});



