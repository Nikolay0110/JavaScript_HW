const text = document.querySelector('textarea');  // Объект поля ввода
text.addEventListener('change', () => { // Обработчки события ввода с клавиатуры
    localStorage.setItem('text', text.value);  // Запись значения в localStorage
});

const storageText = localStorage.getItem('text'); // Получение значения по ключу из localStorage
if (storageText) {  // Если значение есть в localStorage
    text.value += storageText  // Выведи его в поле ввода
}

// Кнопка "Очистить содержимое"
document.getElementById('modal').addEventListener('click', () => {  // Обработчик клика
    text.value = '';  // Очистка поля ввода
});

document.getElementById('storage').addEventListener('click', () => {  // Обработчик клика
    localStorage.removeItem('text');  // Очистка localStorage по ключу
});