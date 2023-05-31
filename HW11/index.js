'use strict'

// Promises

// Сделайте запрос по адресу https://reqes.in/api/users?page=1, обработайте ответ и выведите в консоль только тех юзеров у которых в поле last_name не менее 5ти символов

// Решение

fetch('https://reqres.in/api/users?page=1')
.then((responseObj) => responseObj.json())
.then(({data}) => {
    data.forEach((user) => {
        if (user.last_name.length >= 5) {
            console.log(user);
        }
    });
})

// Сделайте запрос по адресу https://reqes.in/api/users?page=1, обработайте ошибку этого запроса и выведите в консоль Не удалось загрузить данные

// Решение

fetch('https://reqes.in/api/users?page=1')
.then(response => {
    if (!response.ok) {
        throw new Error('Ошибка запроса');
    }
        return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log('Не удалось загрузить данные');
});

// Cделайте запрос https://reqres.in/api/users?page=1, ПОСЛЕ чего найдте id пользователя под именем и фамилией Emma Wong, сделайте следующий запрос на https://reqres.in/api/users/${id}, ПОСЛЕ выведите данные пользователя в консоль

// Решение

fetch('https://reqres.in/api/users?page=1')
.then(response => {
    if (!response.ok) {
        throw new Error('Ошибка запроса');
    }
        return response.json();
})
.then(({data}) => {
    const user = data.find(item => item.first_name === 'Emma' && item.last_name === 'Wong');
    if (!user) {
      throw new Error('Пользователь не найден');
    }
    return user.id;
})
.then(userId => {
    return fetch(`https://reqres.in/api/users/${userId}`);
})
.then(response => {
    if (!response.ok) {
        throw new Error('Ошибка запроса');
    }
    return response.json();
})
.then(userData => {
    console.log(userData);
})
.catch(error => {
    console.log('Произошла ошибка:', error);
});