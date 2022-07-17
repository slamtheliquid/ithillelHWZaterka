//Задание 1

let daysInMonth = (month = 'February', year = 2024) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    month = months.indexOf(month);
    if (month === 0) year = year+1;
    let d = new Date (year, month, 1, 0, 0, 0, 0);
    let endD = new Date(year, month+1, 1,0,0,0,0);
    let res = Math.ceil((endD - d) / (3600 * 1000 * 24));
    return res;
}
console.log(daysInMonth());

//Задание 2

let calculator = () => {
    let op, val1, val2;
    let res;
    while(true){
        op = prompt('Enter the operator:');
        if(op === '+' || op === '-' || op === '*' || op === '/'){
            while(true){
                val1 = parseFloat(prompt('Enter first value:').replace(",", "."));
                if(Number.isInteger(val1) || isFloat(val1)){
                    break;
                }
            }
            while(true){
                val2 = parseFloat(prompt('Enter second value: ').replace(",", "."));
                if(Number.isInteger(val2) || isFloat(val2)){
                    break;
                }
            }
            break;
        }
    }
    switch(op){
        case('+'):{
            res = val1 + val2;
            break;
        }
        case('-'):{
            res = val1 - val2;
            break;
        }
        case('*'):{
            res = val1 * val2;
            break;
        }
        case('/'):{
            res = val1 / val2;
            break;
        }
    }
    return console.log(`Entered operator: ${op}\nFirst number is ${val1}\nSecond number is ${val2}\n${val1} ${op} ${val2} = ${res}`);
}
let isFloat = (num) => {
    return Number(num) === num && num % 1 !== 0;
}
calculator();

//Задание 3

let anagram = (s1, s2) => {
    return s1.split('').sort().join('') === s2.split('').sort().join(''); //deconstructs the strings, sorts them in the alphabetical order and then builds up them back
}
console.log(anagram('cake', 'kace'));