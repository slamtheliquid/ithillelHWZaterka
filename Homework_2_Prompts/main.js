/*
    Домашнее задание №2 - "Анкета пользователя".
    Вывод производится как в консоль, так и в элемент <body>.
*/
// ---------
let askFirstName = prompt('Write down your full first name:').trim().replaceAll(" ", "");
let askLastName = prompt('Write down your full last name:').trim().replaceAll(" ", "");
let askEmail = prompt('Write down your E-Mail address:').trim().replaceAll(" ", "").toLowerCase();
let askAge = prompt('Enter the year of your birth:').trim().replaceAll(" ", "");
let currentYear = new Date().getFullYear();
let age = currentYear - askAge;

let firstLetter = askFirstName[0];
let firstName = firstLetter.toUpperCase() + askFirstName.slice(1,askFirstName.length).toLowerCase();
firstLetter = askLastName[0];
let lastName = firstLetter.toUpperCase() + askLastName.slice(1,askLastName.length).toLowerCase();
console.log('Your full name is ' + firstName + ' ' + lastName);
document.write('<ul class="infoList"><li class="infoListStr">Your full name is <b>' + firstName + ' ' + lastName + '</b></li>');
if(!askEmail.includes('@')){
    askEmail = 'E-Mail entered (<b>' + askEmail + '</b>) is not valid (symbol "@" is missing).';
    console.log(askEmail);
    document.write('<li class="infoListStr">' + askEmail + '</li>');
}else if(askEmail.startsWith('@')){
    askEmail = 'E-Mail entered (<b>' + askEmail + '</b>) is not valid (symbol "@" is found at the start).';
    console.log(askEmail);
    document.write('<li class="infoListStr">' + askEmail + '</li>');
}else if(askEmail.endsWith('@')){
    askEmail = 'E-Mail entered (<b>' + askEmail + '</b>) is not valid (symbol "@" is found at the end).';
    console.log(askEmail);
    document.write('<li class="infoListStr">' + askEmail + '</li>');
}else{
    console.log('Your E-Mail is ' + askEmail);
    document.write('<li class="infoListStr">Your E-Mail is <b>' + askEmail + '</b></li>');
}
if(isNaN(askAge) || askAge.length > 4 || askAge.length < 4){
    console.log('Invalid birth date.');
    document.write('<li class="infoListStr">Invalid birth date.</li>');
}else{
    console.log('Age: ' + age);
    document.write('<li class="infoListStr">Age: <b>' + age + '</b></li>');
}
document.write('</ul>');

