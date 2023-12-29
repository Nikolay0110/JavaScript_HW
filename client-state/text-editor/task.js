const text = document.querySelector('textarea');  // Объект поля ввода
text.addEventListener('input', () => { // Обработчки события ввода с клавиатуры
    localStorage.setItem('text', text.value);  // Запись значения в localStorage
});

const storageText = localStorage.getItem('text'); // Получение значения по ключу из localStorage
    text.value = storageText  // Выведи его в поле ввода


// Кнопка "Очистить содержимое"
document.getElementById('clear').addEventListener('click', () => {  // Обработчик клика
    text.value = '';  // Очистка поля ввода
    localStorage.removeItem('text');  // Очистка localStorage по ключу
});
