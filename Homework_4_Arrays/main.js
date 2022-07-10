//Задание №1

console.log('/ Exercise 1 /');

let firstArr = [];
let secondArr = [];
let resultArr = [];
let min = Math.ceil(1);
let max = Math.floor(20);

for(let i = 0; i < 5; i++){
    firstArr.push(Math.floor(Math.random() * (max - min) + min)); //min is being added for the value > 0
    secondArr.push(Math.floor(Math.random() * (max - min) + min));
}
for(let j = 0; j < firstArr.length; j++){
    resultArr.push(firstArr[j] * secondArr[j]);
}
console.log('First array is [' + firstArr + ']');
console.log('Second array is [' + secondArr + ']');
console.log('Multiplied array is [' + resultArr + ']');

//Задание №2

console.log('/ Exercise 2 /');

let arr = [];
let resArr = [];
let tmp;
max = Math.floor(30);
for(let i = 0; i < 10; i++){
    arr.push(Math.floor(Math.random() * (max - min) + min));
}
console.log(arr);
for(let a = 0; a < arr.length; a++){
    tmp = arr[a];
    for(let b = 0; b < a; b++){
        if(tmp === arr[b]){
            if(!resArr.includes(tmp)){
                resArr.push(tmp);
            }
        }
    }
}
if(resArr.length > 0){
    console.log('Those values are repeated: [' + resArr + ']');
}else{
    console.log('No repeated values were found in the array');
}

//Задание №3

console.log('/ Exercise 3 /');

let word = prompt('Enter any word').toLowerCase().replaceAll(' ', '');
let letter = prompt('Enter the letter you want to find in your word').toLowerCase().replaceAll(' ', '');
let wordResArr = [];

for(let l = 0; l < word.length; l++){
    if(letter === word[l]){
        wordResArr.push(word[l]);
    }
}
console.log('Your word is ' + word);
console.log('The word contains the following amount of the letter ' + letter + ': ' + wordResArr.length);