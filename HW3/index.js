"use strict";

// #1
// Пользователь вводит ТРИ числа вывести в консоль наибольшее из них. В этой задаче необходимо сделать проверку на число (нужно убедиться, что пользователь ввел именно число)

const numberOne = Number ( prompt ('Enter first number'));
const numberTwo = Number ( prompt ('Enter second number'));
const numberThree = Number ( prompt ('Enter third number'));

if (numberOne > numberTwo && numberOne > numberThree) {
    console.log (numberOne);
} else if (numberTwo > numberOne && numberTwo > numberThree) {
    console.log (numberTwo);
} else if (numberThree > numberOne && numberThree > numberTwo) {
    console.log (numberThree);
} else {
    console.log('An error was made when entering the numbers');
}


// #2
// Используя конструкцию switch, напишите программу, которая переводит числа в слова. Например: пользователь вводит число 2, программа выводит «Два». Программу необходимо сделать для цифр от 0 до 5 (включительно)

let number = 2;

switch (number) {
    case 1:
        console.log('One');
        break;
    case 2:
        console.log('Two');
        break;
    case 3:
        console.log('Three');
        break;
    case 4:
        console.log('Four');
        break;
    case 5:
        console.log('Five');
        break;
}


// #3
// Дан следующий код:

// let age = 10;

// if (age < 10) {
//     console.log('hi!');
// } else if (age < 20) {
//     console.log('hello!');
// } else {
//     console.log('good day!');
// }

let age = 10;

console.log (age <10 ? 'hi!' : age >= 10 && age < 20 ? 'hello!' : 'good day!');


// #4
// Написать программу для проверки таблицы умножения:
// Пользователь вводит число a
// Пользователь вводит число b
// Пользователь вводит ответ на a * b
// Нам необходимо проверить ответ пользователя на корректность, если пользователь ответил неправильно то выводим ответ вида: Ошибка! Правильный ответ: correctAnswer

// Где correctAnswer - это переменная, в которой находится правильный ответ

// Если пользователь ввел правильный ответ, то выводим сообщение вида: Правильно!

const numberA = Number ( prompt ('Enter number A'));
const numberB = Number ( prompt ('Enter number B'));
const MultiplyAB = Number ( prompt ('Enter result of multiply A and B'));
let correctAnswer = numberA * numberB;

if (MultiplyAB === correctAnswer) {
    console.log('Correct');
} else {
    console.log(`Mistake! The correct answer is ${correctAnswer}`);
}