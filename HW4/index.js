"use strict";

// Loops
// Написать программу, которая определяет количество положительных, отрицательных чисел и нулей. Пользователь вводит числа с помощью prompt() до тех пор пока не нажмет отмена. Пример вывода: Положительных: 2 шт. Отрицательных: 5 шт. Нулей: 3 шт.

let positives = 0;
let negatives = 0;
let zeros = 0;

while (true) {
  let inputNumber = prompt("Введите число:");
  
  if (inputNumber === null) {
    break;
  }
  
  inputNumber=Number(inputNumber);
  
  if (isNaN(inputNumber)) {
    continue;
  }
  
  if (inputNumber === 0) {
    zeros++;
  } else if (inputNumber > 0) {
    positives++;
  } else {
    negatives++;
  }
}

// console.log(`Положительных: ${positives} шт. Отрицательных: ${negatives} шт. Нулей: ${zeros} шт.`);

// Написать программу, которая выводит среднее арифметическое n чисел введенных пользователем. Ввод чисел прекращается, когда нажали отмена, после чего выводится среднее арифметическое.

let tryes = 0;
let sum = 0;

while (true) {
    let inputNumber2 = prompt("Введите число:", "");
    
    if (inputNumber2 === null) {
      break;
    }

    inputNumber2 = Number(inputNumber2);
      
    if (isNaN(inputNumber2)) {
      continue;
    }

    sum += inputNumber2;
    tryes++;
  }

  let averageValue = sum/tryes;
  console.log(`Среднее арифметическое значение введенных числе = ${averageValue}`);


// Написать программу, в которой пользователя просят ввести числа 5 раз. Причем каждое последующее число должно быть больше предыдущего, иначе вывести текст ошибка! в консоль и прекратить ввод.

let previousInputNumber = 0;

for(let i=0; i < 5; i++) {
  let inputNumber3 = prompt("Введите число:", "");

  inputNumber3 = Number(inputNumber3);

  if (isNaN(inputNumber3)) {
    continue;
  }

  if (previousInputNumber >= inputNumber3) {
    console.log('Ошибка!');
    break;
  }

  previousInputNumber = inputNumber3;
} 

console.log('Ввод 5 чисел успешно завершён!');


// Написать программу-генератор популярных песен. Пользователь вводит число. Вывести количество pam равное этом числу. Строка должна начинаться с param. Например: Вводим 3 Программа выводит: "param-pam-pam-pam" Вводим 5 Программа выводит: "param-pam-pam-pam-pam-pam" ==В этом задании запрещено использовать .repeat() (все делаем циклом)==


let numberOfPam = prompt("Введите число:", "");

numberOfPam = Number(numberOfPam);

let song = 'param';

for (let i = 1; i <= numberOfPam; i++) {
  song += '-pam';
}

console.log(song);