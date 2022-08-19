const select = document.querySelector('#select');
const input = document.querySelector('#numberInput');
const subRand = document.querySelector('#submitRandom');
const subBut = document.querySelector('#submitButton');

const submit = (event) => {
    event.preventDefault();
    let inputVal = input.value;
    if(inputVal === ''){
        inputVal = 0;
    }
    getResult(inputVal, select.value);
}
const random = (event) => {
    event.preventDefault();
    let min = Math.ceil(1);
    let max = Math.floor(9999);
    if(select.value === 'year'){
        max = Math.floor(2025);
    }
    let rand = Math.floor(Math.random() * (max - min) + min);
    getResult(rand, select.value);
}
const getResult = (value, option) => {
    const insertDiv = document.querySelector('footer');
    let xhr = new XMLHttpRequest();
    let url = `http://numbersapi.com/${value}/${option}`;
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function() {
        if(document.querySelector('#result') !== null){
            document.querySelector('#result').remove();
        }
        let resultDiv = document.createElement('div');
        resultDiv.setAttribute('id','result');
        resultDiv.innerHTML = xhr.response;
        document.body.insertBefore(resultDiv, insertDiv);
    }
}
subBut.addEventListener('click', submit);
subRand.addEventListener('click', random);