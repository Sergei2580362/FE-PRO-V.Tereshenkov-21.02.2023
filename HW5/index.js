// Arrays
// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив

const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
arr.splice(2, 3);
console.log(arr);

// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Переставить "Janett", "Franz" в начало массива

const arr2 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
const arr2New = arr2.splice(0, 5);
arr2New.unshift("Janett", "Franz");
console.log(arr2New);

// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Заменить "Eddie", "Janett" на "Oleg","Valerchik"

const arr3 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
arr3[4] = "Oleg";
arr3[5] = "Valerchik";
console.log(arr3);

// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")

const arr4 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
arr4.reverse();
arr4.splice(0, 4, "Mitrofan", "Mitrofan", "Mitrofan", "Mitrofan")
console.log(arr4);

// Даны два массива ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"] ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"] Взять из второго массива все имена начина с "Aristarkh" (включительно) и добавить их в 1ый массив (не должно получится двумерного массива)

const arr5 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
const arr6 = ["Nikodim", "Evlampij", "Aristarkh", "Drogolub", "Vitalij"];
arr6.splice(0, 2);
const arr7 = arr5.concat(arr6);
console.log(arr7)

// Дана строка 'Мама мыла раму' С помощью prompt() получите строку. Поменяйте в строке 'Мама мыла раму' слово раму на полученное слово Например:

// prompt() ===>>> 'машину'
// // ‘Мама мыла машину’
// prompt() ===>>> 'рябину'
// // ‘Мама мыла рябину’
// prompt() ===>>> 'картину'
// // ‘Мама мыла картину’
// Вы можете использовать методы split, join, pop, push, slice и любые другие

console.log('Мама мыла раму');
arr8=['Мама', 'мыла', 'раму'];
arr8.splice(2, 1, prompt());
const str = arr8.join(' ');
console.log(str);