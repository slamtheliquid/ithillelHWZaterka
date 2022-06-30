/*
    Задание 1: вывод заданного числа, квадрата и куба.
    Числа выводятся как в форме так и в консоли.
*/

function multiplyNumbers(){
    let inputValue = parseInt(document.querySelector('#startNumberInput').value);
    let resultSquare = document.getElementById('resultMultiplySquare');
    let resultCube = document.getElementById('resultMultiplyCube');
    if(isNaN(inputValue) == false){
        resultSquare.value = inputValue ** 2;
        resultCube.value = inputValue ** 3;
        console.log(inputValue + " is getting squared!! --> " + inputValue + "\u00B2 = " + resultSquare.value);
        console.log(inputValue + " is getting cuuubed!! --> " + inputValue + "\u00B3 = " + resultCube.value);
    }
}


/*
    Задание 2: Калькулятор температур.
    Можно переводить:
    Цельсий в Фаренгейт и Кельвин; и наоборот тоже можно!)
    Числа выводятся как в форме так и в консоли.
*/

function calculateDegrees(){
    let degrees = parseInt(document.querySelector('#degreesInput').value);
    let degreeSelection = parseInt(document.querySelector('#degreeSelection').value);
    let chooseDropdown = parseInt(document.querySelector('#dropdown').value);
    let result = document.getElementById('result');
    if(isNaN(degrees) == false) {
        if(degreeSelection == chooseDropdown){
            result.value = degrees + "\u00B0";
            console.log("What would you need that for? " + degrees + "\u00B0" + " = " + result.value);
        }else{
            switch(chooseDropdown){
                case 0:
                    if(degreeSelection == 1){
                        result.value = ((degrees - 32) * (5 / 9)) + "\u00B0C";
                        console.log(degrees + "\u00B0F" + " = " + result.value);
                    }else if(degreeSelection == 2){
                        result.value = (degrees - 273.15) + "\u00B0C";
                        console.log(degrees + "\u00B0K" + " = " + result.value);
                    }
                    break;
                case 1:
                    if(degreeSelection == 0){
                        result.value = ((degrees * 9 / 5) + 32) + "\u00B0F";
                        console.log(degrees + "\u00B0C" + " = " + result.value);
                    }else if(degreeSelection == 2){
                        result.value = (((degrees - 273.15) * 9 / 5) + 32) + "\u00B0F";
                        console.log(degrees + "\u00B0K" + " = " + result.value);
                    }
                    break;
                case 2:
                    if(degreeSelection == 0){
                        result.value = (degrees + 273.15) + "\u00B0K";
                        console.log(degrees + "\u00B0C" + " = " + result.value);
                    }else if(degreeSelection == 1){
                        result.value = (((degrees - 32) * 5 / 9) + 273.15) + "\u00B0K";
                        console.log(degrees + "\u00B0F" + " = " + result.value);
                    }
                    break;
            }
        }
    }
}