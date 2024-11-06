// Находим элементы на странице
const counterElement = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');

// Переменная для хранения значения счетчика
let counter = 0;

// Функция для увеличения значения счетчика
function increaseCounter() {
  counter += 1;
  counterElement.textContent = counter;
}

// Функция для сброса значения счетчика
function resetCounter() {
  counter = 0;
  counterElement.textContent = counter;
}

// Привязываем функции к кнопкам
increaseBtn.addEventListener('click', increaseCounter);
resetBtn.addEventListener('click', resetCounter);