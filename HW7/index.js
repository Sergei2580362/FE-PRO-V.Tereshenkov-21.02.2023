// Arrays
// 1. Дан случайный массив чисел (создайте самостоятельно). С помощью метода .filter() отфильтруйте массив так, чтобы в новый массив вошли только четные двухзначные числа из исходного.

// Решение

// Допустим, у нас есть массив чисел arr:

const arr = [1, 23, 7, 45, 276, 101, 18, 73, 64, 599, 88, 42, 57];

const filteredArr = arr.filter(
  (item) => item >= 10 && item <= 99 && item % 2 === 0
);

console.log(filteredArr);

// 2. Пользователь вводит 10 случайных значений. Каждое значение необходимо записать в массив. С помощью метода .every() проверить были ли все введенные пользователем данные – числами.

// Решение

const arr2 = [];

for (let i = 1; i <= 10; i++) {
  const value = prompt(`Введите случайное значение №${i}`);
  arr2.push(value);
}

console.log(arr2);

const numbersCheck = arr2.every(value => !isNaN(value));

console.log(`Были ли все введенные значения числами? ${numbersCheck}`);

// 3. Дан массив объектов

const arr3 = [
  {a: 2, b: 1},
  {a: 5, b: 12},
  {a: 95, b: 7}
]
// Используя ТОЛЬКО методы массивов (циклы запрещены):

// Вывести в консоль 'its valid', если во всех объектах поле a > b, вывести 'its invalid' если хотя бы в одном объекте a<=b
// На основе массива arr3, создать массив объектов у которых поле b возведено в квадрат пример:
// const arr4 = [
//   {a: 2, b: 1},
//   {a: 5, b: 144},
//   {a: 95, b: 49}
// ];

// Решение

const isValid = arr3.every((item) => item.a > item.b);
console.log(isValid ? "its valid" : "its invalid");

const arr4 = arr3.map((item) => ({ a: item.a, b: item.b**2 }));
console.log(arr4);