/*
    Задание 1 - Числа Фибоначчи.
*/
let y = prompt(' Fibonacci. Enter the number: ');
if(!isNaN(y)){
    let n0 = 0;
    let n1 = 1;
    let n2;
    document.write('<h2>Fibonacci sequence:</h2>');
    document.write(n0 + ', ' + n1);
    for(let j = 2; j < y; j++){
        n2 = n0 + n1;
        document.write(', ' + n2);
        n0 = n1;
        n1 = n2;
    }
}else{
    document.write('<h1>I asked you for a number</h1>');
}
/*
    Задание 2 - пирамидка.
*/
let x = prompt('Staircase. Enter the number: ');
if(!isNaN(x)){
    document.write('<h2>Pyramid sequence:</h2>');
    for(let i = 0; i <= +(x)+1; i++){
        for(let b = 1; b < i; b++) {
            document.write(b + ' ');
        }
        document.write(' <br>');
    }
}else{
    document.write('<h1>I asked you for a number</h1>');
}














