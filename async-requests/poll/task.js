const request = new XMLHttpRequest();  // Объект запроса
const url = 'https://students.netoservices.ru/nestjs-backend/poll' // Адрес запроса
const answers = document.querySelector('.poll__answers')  // Ответы


request.open('GET', url);

request.addEventListener('readystatechange', () => {
    if (request.readyState === request.DONE) {
        const dataJson = JSON.parse(request.responseText);  // Преобразует ответ сервера в текст
        const title = dataJson.data.title; // Текст вопроса
        let answer = dataJson.data.answers; // Варианты ответа - массив

        while (answers.firstChild) {
            answers.removeChild(answers.firstChild);
        }

        // Добавление вопроса на страницу
        const poll = document.getElementById('poll__title');  // Объект вопроса
        poll.textContent = title; // Выводит вопрос на страницу

        // Добавление кнопок с варинтом ответа на страницу
        for (let i = 0; i < answer.length; i++) {  // Цикл добавления кнопок
            const button = document.createElement('button');  // Кнопки
            button.textContent = answer[i]; // Нзначение текста ответа для кнопки
            button.classList.add('poll__answer');
            answers.appendChild(button);
        }
    }
});


request.send();  // Отправка запроса на сервер

answers.addEventListener('click', () => {
    request.open('GET', url);
    request.send();
});