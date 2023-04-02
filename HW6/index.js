"use strict";

const car = {
    model: 'tesla',
    adress: {
        country: {
            city: {
                name: 'Boston',
                street: {
                    name: 'pushkina',
                    number: 2
                }
            }
        },
        region: ['Iowa','Texas','California']
    },
    specs: {
        price: {
            low: 2000,
            mid: 3000,
            high: 5000
        },
        engine: {
            power: 400,
            lowPower: 100
        }
    }
};

// С помощью деструктуризации запишите в отдельны переменные: 1.1 Название города в котором находится авто 1.2 Четвертый регион из поля region (по умолчанию значение должно быть 'Arizona') 1.3 Поле high, объекта price 1.4 Из объекта specs записать поле fuelConsumption, которое по умолчанию должно являться объектом вида:

// { city: 12, mix: 10, country: 8 }

// Решение

// 1.1 Название города в котором находится авто
const { adress: { country: { city: { name: cityName }}} } = car;
console.log(cityName); // 'Boston'

// 1.2 Четвертый регион из поля region (по умолчанию значение должно быть 'Arizona')
const { adress: { region: [, , , fourthRegion = 'Arizona'] } } = car;
console.log(fourthRegion); // 'Arizona'

// 1.3 Поле high, объекта price
const { specs: { price: { high } } } = car;
console.log(high); // 5000

// 1.4 Из объекта specs записать поле fuelConsumption, которое по умолчанию должно являться объектом вида: { city: 12, mix: 10, country: 8 }
const { specs: { fuelConsumption = { city: 12, mix: 10, country: 8 } } } = car;
console.log(fuelConsumption); // { city: 12, mix: 10, country: 8 }

// -----------------------------------------


// Дан объект:
const student = { math: 5, biology: 3, language: 2, isOboltus: true };
// 2.1 Напишите программу, которая умножит все ЧИСЛОВЫЕ (и только числовые) значения на 2 и перезапишет каждое свойство объекта (числового типа).

// Решение

for (let key in student) {
  if (typeof student[key] === 'number') {
    student[key] *= 2;
  }
}

console.log(student);

// В данном примере мы используем цикл for...in для перебора всех свойств объекта student. Далее мы проверяем, является ли значение свойства числом, используя оператор typeof. Если это так, мы умножаем это значение на 2, используя оператор умножения *=. Таким образом, мы перезаписываем значение каждого числового свойства объекта student, умножив его на 2. Результат выводим в консоль с помощью метода console.log().

// -----------------------------------------

// 2.2 Напишите программу, которая посчитает среднее арифметическое всех оценок студента. Если средняя оценка (после умножения) будет больше 5, то поле isOboltus должно стать false.

// Решение

let sum = 0;
let count = 0;

for (let key in student) {
    sum += student[key];
    count++;
}

const average = sum / count;

if (average > 5) {
  student.isOboltus = false;
}

console.log(student);

// В данном примере мы используем цикл for...in для перебора всех свойств объекта student. Для каждого числового свойства мы умножаем его значение на 2 и суммируем с общей суммой оценок и увеличиваем счетчик на 1. После цикла вычисляем среднее значение, разделив сумму на количество оценок. Если среднее значение больше 5, то мы изменяем значение поля isOboltus на false. Результат выводим в консоль с помощью метода console.log().