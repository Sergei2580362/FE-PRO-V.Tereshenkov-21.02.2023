'use strict'

// Classes

// Создать класс Programmer, инстанс которого обладает полями name, stack (массив строк, типа [«Python», «PHP», «Java»]), и методом .code() (который перебирает массив stack и выводит сообщения вида «Oleg is coding on Python», «Oleg is coding on PHP», «Oleg is coding on Java»). Метод code должен храниться в прототипе класса. Переопределить метод toString у инстансов Programmer, чтобы они выводили сообщение вида «Hello my name is Oleg»

// Решение

class Programmer {
    constructor( name, stack ) {
        this.name = name;
        this.stack = stack;
    }

    code () {
        this.stack.forEach( languageCode => {
            console.log(`${this.name} is coding on ${languageCode}`);
        })
    }

    toString() {
        return `Hello my name is ${this.name}`
    }
}

const Oleg = new Programmer('Oleg', ['Python', 'PHP', 'Java']);
Oleg.code();
console.log(Oleg.toString())

// Создать массив из 10 случайных инстансов Programmer, и отфильтровать их с помощью функции getSeniorDeveloper так, чтобы в результирующий массив попали только те Programmer, у которы длина массива stack больше 4.

// Решение

const Programmers = [
    {
        name: 'Petya',
        stack: ['Python', 'PHP', 'Java', 'JS', 'Ruby', 'Visual Basic', 'Dylan', 'C++'],
    },
    {
        name: 'Vasya', 
        stack: ['Python', 'Ruby', 'Visual Basic', 'Dylan', 'C++'],
    },
    {
        name: 'Iluha',
        stack: ['Python', 'PHP', 'Java', 'JS', 'Ruby', 'Dylan', 'C++'],
    },
    {
        name: 'Gleb',
        stack: ['Visual Basic', 'Dylan', 'C++'],
    },
    {
        name: 'Anatolii',
        stack: ['JS', 'Ruby', 'Visual Basic', 'Dylan', 'C++'],
    },
    {
        name: 'Andrei',
        stack: ['PHP', 'Java', 'Ruby', 'C++'],
    },
    {
        name: 'Sergei',
        stack: ['JS', 'Ruby', 'Visual Basic', 'Dylan', 'C++'],
    },
    {
        name: 'Maks',
        stack: ['Python', 'Java', 'JS', 'Dylan'],
    },
    {
        name: 'Vovan',
        stack: ['PHP', 'Java', 'JS', 'Ruby', 'Visual Basic', 'Dylan', 'C++'],
    },
    {
        name: 'Vlad',
        stack: ['Python', 'JS', 'Ruby', 'C++'],
    },
];

function getSeniorDeveloper(programmers) {
    return programmers.filter((programmer) => programmer.stack.length > 4);
}
  
const filteredProgrammers = getSeniorDeveloper(Programmers);
console.log(filteredProgrammers);

// Напишите функцию, которая вычисляет длину линий в стандартной двухмерной системе координат. Координаты начала и конца линий должны храниться в объектах.

// Создайте три линии.
// Вычислите их длины с помощью функции
// Проверьте, могут ли три линии сформировать треугольник Помните: Длину линии можно найти по теореме Пифагора. Стороны могут сформировать треугольник если длина каждой стороны треугольника должны быть меньше суммы длин остальных сторон.

// Решение

function lineLength(line) {
    const dx = line.end.x - line.begin.x;
    const dy = line.end.y - line.begin.y;
    return Math.sqrt(dx**2 + dy**2);
} 

const lineOne = {
    begin: {x: 0, y: 0},
    end: {x: 8, y: 2}
};
  
const lineTwo = {
    begin: {x: 3, y: 10},
    end: {x: 7, y: 15}
};
  
const lineThree = {
    begin: {x: 5, y: 1},
    end: {x: 10, y: 3}
};
  
const lengthOne = lineLength(lineOne);
const lengthTwo = lineLength(lineTwo);
const lengthThree = lineLength(lineThree);
  
console.log(`Длина линии 1 = ${lengthOne}`);
console.log(`Длина линии 2 = ${lengthTwo}`);
console.log(`Длина линии 3 = ${lengthThree}`);
  
const canLinesMakeTriangle = lengthOne < lengthTwo + lengthThree && lengthTwo < lengthOne + lengthThree && lengthThree < lengthOne + lengthTwo;

console.log(canLinesMakeTriangle ? "Могут ли три линии сформировать треугольник? - да" : "Могут ли три линии сформировать треугольник? - нет");

// Создать конструктор Car, который принимает параметры model, color, price. Конструктор должен возвращать объект в котором присутствуют вышеназванные поля со значениями. Каждый представитель класса Car должен обладать методом run() который выводит сообщение вида : MODEL + “ ” + COLOR + ” is running”.

// Решение

class Car {
    constructor(model, color, price) {
        this.model = model;
        this.color = color;
        this.price = price;
    }
  
    run() {
        console.log(`MODEL: ${this.model}, COLOR: ${this.color}, is running`);
    }
}
  
const newCar = new Car('Tesla', 'red', 100000);
newCar.run();

// Создать конструктор Book, с помощью этого конструктора создать массив из 8 книг (объектов). Каждая книга должна представлять из себя объект, в котором есть три поля: author, bookName, pageAmount. Создать функцию getBiggerBook(), которая принимает массив книг и возвращает ОДНУ книгу с наибольшим количеством страниц

class Book {
    constructor (author, bookName, pageAmount) {
        this.bookName = bookName;
        this.author = author;
        this.pageAmount = pageAmount;
    }
}
  
const books = [
    new Book("Маленький принц", "Антуан де Сент-Экзюпери", 990),
    new Book("Мэри Поппинс", "Памела Трэверс", 1100),
    new Book("Улисс", "Джеймс Джойс", 855),
    new Book("Боевой конь", "Майкл Морпурго", 367),
    new Book("Книжный вор", "Маркус Зусак", 750),
    new Book("Песнь льда и пламени", "Джордж Мартин", 432),
    new Book("Гарри Поттер", "Джоан Роулинг", 1580),
    new Book("Муми-тролли", "Туве Янссон", 925),
];
  
function getBiggerBook(books) {
    let maxPages = 0;
    let biggerBook;
    for (let i = 0; i < books.length; i++) {
      if (books[i].pageAmount > maxPages) {
        maxPages = books[i].pageAmount;
        biggerBook = books[i];
      }
    }
    return biggerBook;
}
  
const biggestBook = getBiggerBook(books);
console.log(`Самая большая книга "${biggestBook.author}", автор ${biggestBook.bookName}, количество страниц ${biggestBook.pageAmount}.`);

// Создать класс Timer, инстанс которого запускает таймер и выводит в консоль прошедшее время в секундах (1 2 3 4 5 и тд) инстанс должен обладать методами .start() .stop() которые запускают и останавливают таймер а также методом .reset() который сбрасывает таймер на 0. С помощью Timer вы должны создать несколько таймеров и убедится в том, что они работают независимо друг от друга. останавливайте таймер через некоторое время после запуска с помощью setTimeout()