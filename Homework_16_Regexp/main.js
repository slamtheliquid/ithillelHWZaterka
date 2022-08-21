// Task 1

let toUpperCase = (str) => {
    const regexp = /^[A-Z]/;
    const result = regexp.test(str);
    if(result === true){
        return 'string\'s first character is uppercase';
    }else{
        return 'string\'s first character is not uppercase'
    }
}
console.log(toUpperCase('Test'));

// Task 2

let isDate = (str) => {
    const regexp = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[012])\/(0{3}[1-9]|0{2}[1-9]{2}|0[1-9]{3}|1[1-9]{3}|20{2}\d|201\d|202\d)$/; //year from 0001 to 2029
    //const regexp = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[012])\/(\d{4})$/; // any 4-digit is a year
    return regexp.test(str);
}
console.log(isDate('29/12/2022'));

// Task 3

let trim = (str) => {
    const regexp = /\s/g;
    return str.replace(regexp,'');
}
console.log(trim('      a a a a       a '));

// Task 4

let vowelCount = (str) => {
    const regexp = /[aeiouy]/gi;
    const result = str.match(regexp);
    return result.length;
}
console.log(vowelCount('The quick brown fox jumps over the lazy dog'));

// Task 5

let isUSPostalCode = (str) => {
    const regexp = /^\d{5}-\d{4}$/;
    return regexp.test(str);
}
console.log(isUSPostalCode('03201-2150'));
console.log(isUSPostalCode('1278'));