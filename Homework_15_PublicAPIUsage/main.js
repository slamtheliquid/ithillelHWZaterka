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
    if(inputVal.length === 4 && select.value === 'date'){
        inputVal = inputVal.substring(0, 2) + '/' + inputVal.substring(2, inputVal.length);
    }
    getResult(inputVal, select.value);
}
const random = (event) => {
    event.preventDefault();
    getResult('random', select.value);
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
