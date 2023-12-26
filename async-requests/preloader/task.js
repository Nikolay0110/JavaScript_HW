const request = new XMLHttpRequest(); // Объект запроса
const loader = document.getElementById('loader'); // Элемент анимации загрузки
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';


// Запрос данных с сервера
request.open('GET', url);


// Обработчки событий запроса
request.addEventListener('readystatechange', () => {
    // Проверка условия успешного выполнения запроса
    if (request.readyState === request.DONE) {
        // Удаление класса отвечающего за отображение анимации
        loader.classList.remove('loader_active');
        // Данные
        const data = JSON.parse(request.responseText); // Забирает данные из json
        const code = Object.keys(data.response.Valute); // Массив CharCode
        const values = code.map(code => data.response.Valute[code].Value); // Массив значений по ключу CharCode

        // Цикл добавления полученной информации на страницу
        for (let i = 0; i < code.length; i++) {
            const items = document.getElementById('items')
            // Добавление информации на страницу из ответа сервера
            const item = document.createElement('div');
            item.classList.add('item');
            // Добавление разметки с информацией на страницу
            item.innerHTML = `
                <div class="item__code">
                    ${code[i]}
                </div>
                <div class="item__value">
                    ${values[i]}
                </div>
                <div class="item__currency">
                    руб.
                </div>`

            items.appendChild(item); // Добавление одной строки информации о курсе валют
        }
    }
});


request.send(); // Отправка запроса на сервер
