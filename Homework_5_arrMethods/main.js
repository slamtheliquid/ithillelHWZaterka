// let arr1 = [1,2,3,4,5,6];
// let arr2 = [1,2,3,4];

// let biggestArr = arr1.length > arr2.length ? arr1 : arr2;
// let resArr = [];
//
// for(let i = 0; i < biggestArr.length; i++){
//     let valid = arr1[i] !== undefined ? arr1[i] : arr2[i];
//     let result = arr1[i] * arr2[i];
//     if(isNaN(result)){
//         resArr.push(valid);
//     }else{
//         resArr.push(result);
//     }
// }
// console.log(resArr);

// let arr3 = arr1.length >= arr2.length ?  arr1 : arr2;
// for(let i = 0; i < Math.min(arr1.length, arr2.length); i++){
//     arr3[i] = arr1[i] * arr2[i];
// }
// console.log(arr3);

//function === (=

// function showFullName(name, surname){
//     alert('Your name is ' + name + ' ' + surname);
// }
// showFullName('fucking', 'awful');

// function showMessage(message, yes, no){
//     if(confirm(message)){
//         yes();
//     }else{
//         no();
//     }
// }
// function sayYes(){
//     alert('YES YES YES');
// }
// function sayNo(){
//     alert('NO NON O OOONONONNON ONOONNNOOOOOOOOOOOOOOOOOOOOOOOO OOO O O O O  O');
// }
// showMessage('Do you like cock?', sayYes, sayNo);

// function showFullName(name = 'CockEater', surname = 'Buttfucker'){
//     alert('Your name is ' + name + ' ' + surname);
// }
// showFullName();

// function showFullName(message) {
//     alert(message);
// }
// function getFullName(name, surname){
//     return name + ' ' + surname;
// }
// function sayHiToUser(name = 'Fuck you', surname = 'Retard'){
//     let fullName = getFullName(name, surname);
//     showFullName('Hello, ' + fullName + ', you son of a bitch');
// }
// sayHiToUser('Pasha', 'Oostaal');

//---function declaration---//
// function sayHello(){
//     alert('Helo');
// }

//---function expression---//
// let sayHello = function(){
//     alert('helo');
// }
// console.log(sayHello);

//---Hoisting---//
//declared func can be used before declaration
//expressed func can't be used before expression
//even works with VAR declared variables (can be used before declaration) -- But doesn't work with LET & CONST variables

//leftover parameters
// let calcNumber = function(...args){
//     let result = 0;
//     for(let i = 0; i < args.length; i++){
//         result += args[i];
//     }
//     return result;
// }
// console.log(calcNumber(7, 3, 5, 10));

// let showName = function(firstName, lastName, ...titles){
//    alert(`${firstName} ${lastName}`);
//    alert(`${titles[0]}`);
//    console.log(titles);
// }
// showName('Pasha', 'YA', 'bruh', 'XD', 'fuck', 'fart');

//---array methods---//

//slice
// let numbers = [1, 2, 3, 4 ,5];
// let other = numbers.slice(0, 3);
// console.log(other);

//splice - can do almost anything! except of sucking you off.
// let numbers = [1, 2, 3, 4 ,5];
// let deleted = numbers.splice(0, 3);
// console.log('Leftovers of the array: [' + numbers + ']'); // leftover
// console.log('Deleted elements: [' + deleted + ']'); // deleted elements
// deleted = numbers.splice(0, 0, 10, 20);
// console.log('New modified array: [' + numbers + ']'); // modification

//concat -- one array joins another!
// let numbers1 = [1,2,3,4,5];
// let numbers2 = [6,7,8,9,0];
// let values = [].concat(numbers1, numbers2);
// console.log(values);

//indexOf / lastIndexOf
// let numbers = [1,2,3,4,5];
// let index = numbers.indexOf(2);
// let lastIndex = numbers.lastIndexOf(4);
// console.log(index, lastIndex);

//includes
// let numbers = [1,2,3,4,5];
// let hasNumber = numbers.includes(5);
// console.log(hasNumber);

//find / findIndex
// let numbers = [1,2,3,4,5];
// let element = numbers.find(function(el, index, array){
//     return el === 3;
// });
// console.log(element); // 3

// forEach
// let numbers = [1,2,3,4,5];
// numbers.forEach(function(el, index, array){
//     console.log(el);
//     console.log(index);
//     console.log(array);
//     if (el > 2){
//         console.log('valid');
//     }
// });

// map -- any changes
// let numbers = [1,2,3,4,5];
// let result = numbers.map(function(el, index, array){
//     return `<p>${el}</p>`;
// });
// document.write(result);

// join -- is a divider
// let numbers = [1,2,3,4,5];
// let result = numbers.map(function(el, index, array){
//     return `<li>${el}</li>`;
// });
// document.write(`<ul>${result.join(' ')}</ul>`);

//split
// let value = 'roflanebalopapichgenii'.split('');
// console.log(value);

//reverse
// let numbers = [1,2,3,4,5];
// let result = numbers.reverse();
// console.log(result);

//Array.isArray
// let numbers = [1,2,3,4,5];
// if(Array.isArray(numbers)){
//     console.log('valid');
// }else{
//     console.log('not valid');
// }

//Задание 1

function joinArray(arr = [[1,2,3],[4,5,6],[7,8,9],[10,11],[12,13,14,15]]){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        res = res.concat(arr[i]);
    }
    return res;
}
console.log(joinArray());

//Задание 2

function findPalindrome(word = 'something'){
    let result = word.split('');
    result = result.reverse();
    result = result.join('');
    if(result === word){
        console.log(`${word} is a palindrome`);
        return true;
    }else{
        console.log(`${word} is not a palindrome (${result} in reverse)`);
        return false;
    }
}
findPalindrome('tattarrattat');


//Задание 3

let calculateNumber = function(...args){
    let result = 0;
    for(let i = 0; i < args.length; i++){
        result += args[i];
    }
    return console.log(`sum of the entered numbers is ${result}`);
}
calculateNumber(7, 3, 5, 10, 22, 133);

//Задание 4

function getRandNum(min = 1, max = 100){
    let first = Math.ceil(min);
    let last = Math.floor(max);
    let res = Math.floor(Math.random() * last + first);
    return console.log(`your funny random number is ${res}`);
}
getRandNum();

//Задание 5

function deleteArrE(arr = [1,1,2,2,3,3,4,4,5], num = 2){
    let filteredArr = arr.filter(function(el, index, arr){
        return el !== num;
    });
    return console.log(filteredArr);
}
deleteArrE([1,1,1,1,1,2,2,1,1,1,1,1,1,23,123,213,4,43,21312,1,11,1,11,1,1,1,1,1], 1);

//Задание 6

function arabicToRoman(num = 1989){
    if(num < 0 || num > 3999){
        return console.log(`the entered number (${num}) is not in the range of 0 - 3999`);
    }
    if(num === 0){
        num = 'N';
        return console.log(num);
    }
    let arabicValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanValues = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let result = '';
    for(let i = 0; i < arabicValues.length; i++){
        while(num >= arabicValues[i]){
            num -= arabicValues[i];
            result += romanValues[i].toString();
        }
    }
    return console.log(result);
}
arabicToRoman(1244);
