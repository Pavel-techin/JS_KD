const button = document.getElementById('calculate');
const first = document.getElementById('first');
const second = document.getElementById('second');
const result = document.getElementById('result');

const calculate = () => {
    result.innerHTML = `${+first.value / 100 * +second.value}`;
}

button.addEventListener('click', calculate);