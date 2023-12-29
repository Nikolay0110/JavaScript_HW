function welcomeUser(id) {
    const signIn = document.querySelector('.signin');  // Объект окна формы
    const welcome = document.querySelector('.welcome');  // Приветствие
    welcome.innerHTML =`Добро пожаловать, пользователь #${id}`  // Добавление id в приветствие пользователя
    signIn.classList.remove('signin_active');  // Отключение отображения формы
    welcome.classList.add('welcome_active');  // Отображение приветствия
    const card = document.querySelector('.card');  // parent области информации
    const button = document.createElement('button');  // Кнопка
    card.appendChild(button).classList.add('out');  //
    button.innerHTML = 'Выйти из учетной записи'  // Содержимое кнопки
    const btn = document.querySelector('.out');  // Объект кнопки "Выйти"

    btn.addEventListener('click', () => {  // Обработчик клтка по кнопке Выход
        localStorage.removeItem('user_id');  // Удаление id из localStorage для проверки
        signIn.classList.add('signin_active');  // Включение отображения формы
        welcome.classList.remove('welcome_active');  // Отключение отображения приветствия
        btn.remove();  // удаление кнопки  "Выйти из учетной записи" со страницы
        document.forms[0].reset();

    })
}


function logOn() {
    const url = 'https://students.netoservices.ru/nestjs-backend/auth'  // адрес обращения
    document.querySelector('.btn').addEventListener('click', (event) => {
    event.preventDefault();
    let request = new XMLHttpRequest();  // Объект запроса
    request.responseType = 'json';  // Тип данных ответа JSON
    request.addEventListener('load', () => {  // Обработчик запроса
        const status = request.response['success']  // статус ответа
        const id = request.response['user_id'];  // user_id
        localStorage.setItem('user_id', id); // Сохранение user_id в памяти браузера
        if (status) {
            welcomeUser(id);
        } else {
            alert('Неверный логин/пароль') ; // Выброс ошибки в случае не верных учетных данных
        }
    });
    let formData = new FormData(document.forms[0]);
    request.open('POST', url);  // Создание запроса
    request.send(formData); // Отправка запроса
    });
}


if (!localStorage.getItem('user_id')) {
    logOn();
} else {
    welcomeUser(localStorage.getItem('user_id'));
}
