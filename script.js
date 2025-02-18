let btn1 = document.getElementById('myButton');
let btn2 = document.getElementById('myButton2');
let copyCode = document.querySelector('.copyCode');
let rgb1 = '#004773';
let rgb2 = '#54d542';

const hexValues = () => {
    let myHexaValues = '0123456789abcdef';
    let colors = '#';
    for(let i = 0; i < 6; i++){
        colors = colors + myHexaValues[Math.floor(Math.random() * 16)];
    }
    return colors;
}

const handleButton1 = () => {
    rgb1 = hexValues();
    btn1.innerText = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyCode.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
    btn1.style.background = `${rgb1}`
}

const handleButton2 = () => {
    rgb2 = hexValues();
    btn2.innerText = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyCode.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
    btn2.style.background = `${rgb2}`
}

btn1.addEventListener('click', handleButton1);
btn2.addEventListener('click', handleButton2);


copyCode.addEventListener('click', () => {
    navigator.clipboard.writeText(copyCode.innerText)
})