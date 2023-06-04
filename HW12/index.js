// DOM
// Cделать три кнопки click me, при загрузке страницы каждой кнопке должна назначаться "бомба" (при клике на кнопку она меняет свою надпись на BOOM!). В любой момент времени может быть только одна кнопка с бомбой. При повторном клике на кнопку она не должна менять свою надпись. При каждой перезагрузке страницы кнопка с бомбой должна переназначаться.

// Решение

function assignBomb() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('bomb'));
    const randomIndex = Math.floor(Math.random() * buttons.length);
    buttons[randomIndex].classList.add('bomb');
}
  
function handleClick(event) {
    const button = event.target;
    if (button.classList.contains('bomb')) {
        button.textContent = 'BOOM!';
    }
}
  
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handleClick);
});
  
window.addEventListener('load', assignBomb);


// Напишите игру "камень, ножницы, бумага". Должно быть три кнопки для выбора игрока ("камень", "ножницы", "бумага"). При клике игрока на любую из кнопок, под кнопками выводится сообщение "компьютер выбрал: ${computerChoise}", где computerChoise - это рандомный выбор компьютера (выбор рандомим с помощью Math.round(Math.random() * 2)). В этой игре также необходимо выводить результат текущего раунда (кто выиграл).

// Решение

// const game = ['Камень', 'Ножницы', 'Бумага'];

// function computerChoice() {
//     const randomIndex = Math.round(Math.random() * 2);
//     return game[randomIndex];
// }

// function playGame(playerChoice) {
//     const computer = computerChoice();
//     document.getElementById('результат').textContent = `Выбор компьютера: ${computer}`;
  
//     if (playerChoice === computer) {
//         document.getElementById('результат').textContent += ". Это ничья!";
//     } else if (
//         (playerChoice === 'Камень' && computer === 'Ножницы') ||
//         (playerChoice === 'Бумага' && computer === 'Камень') ||
//         (playerChoice === 'Ножницы' && computer === 'Бумага')
//     ) {
//         document.getElementById('результат').textContent += '. Ты победил!';
//     } else {
//         document.getElementById('результат').textContent += '. Компьютер победил!';
//     }
// }

// document.getElementById('камень').addEventListener('click', () => {
//     playGame('Камень');
// });

// document.getElementById('бумага').addEventListener('click', () => {
//     playGame('Бумага');
// });

// document.getElementById('ножницы').addEventListener('click', () => {
//     playGame('Ножницы');
// });