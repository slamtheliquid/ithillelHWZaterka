//Задание 1

let replicate = (number, times, arr = []) => {
    if (times < 0) return arr;
    if (times === 1){
        arr[0] = number;
        return arr;
    }
    else{
        return arr.concat(replicate(number, times-1, arr))
    }
}
console.log(replicate(5,6));

//Задание 2

function specialMultiply(a,b){  //arrow functions doesn't have 'arguments' parameter reserved
    if (arguments.length === 2) return a*b;
    else return (b) => {
        return a*b;
    }
}
console.log(specialMultiply(4)(3));

//Задание 3

let guessingGame = (amount) =>{
    let guesses = 0;
    let rand = Math.floor(Math.random() * 11);
    return (guess) => {
        while(guesses < amount){
            if(guess > rand){
                guesses++;
                return `Your number is ${guess}. You are too high`;
            }
            if(guess < rand){
                guesses++
                return `Your number is ${guess}. You are too low`;
            }
            if(guess === rand){
                guesses = amount;
                return `Your number is ${guess}. You got it!`;
            }
        }
        return `game is over! the number was: ${rand}`;
    }
}

let game = guessingGame(3);
console.log(game(10));
console.log(game(3));
console.log(game(5));
console.log(game(8));

