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
