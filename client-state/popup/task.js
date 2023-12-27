function modal() {  // Взаимодействие с всплывающим окном
    const def = document.querySelector('.modal');  // Объект окна
    def.classList.add('modal_active');  // Выводит всплывающее окно добавлением класса "modal_active"

    const close = document.querySelector('.modal__close');  // Объект кнопки закрывающей окно
    close.addEventListener('click', () => {  // Обработчик клика по кнопке
        def.classList.remove('modal_active');  // Отключение отображения всплывающего окна
        document.cookie = 'modal=Close';  // Добавление в cookie информации о статусе закрытия окна
    });
}


function getCookie(status) {  // Поиск заданного cookie
    const pairs = document.cookie.split('; ');  // Получение cookie и добавление в массив по разделителю
    const cookie = pairs.find(value => value.startsWith(status));  // Поиск в массиве нужного cookie
    if (cookie) {  // Обработка на случай ошибки
        return cookie.substr(status.length + 1);  // Получает значение, без ключа cookie
    } else {
        return ''; // Или можно вернуть null, undefined или любое другое подходящее значение по умолчанию
    }
}


if (getCookie('modal') !== 'Close') {  // Проверка, если окно уэе было закрыто то не показывать его
    modal();
}

// console.log(document.cookie)
// document.cookie = 'modal=; Expires=Thu, 01 Jan 1970 00:00:00:'; // Удаление cookie для тестирования
