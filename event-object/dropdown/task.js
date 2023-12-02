const dropdown__value = document.querySelector('.dropdown__value');
const dropdown__list = document.querySelector('.dropdown__list');
const dropdown__item = document.querySelectorAll('.dropdown__item');

dropdown__value.addEventListener('click', () => { // обработчик выпадающего списка
    dropdown__list.classList.add('dropdown__list_active'); // назначаем класс по клику
});

dropdown__item.forEach((element) => { //
    element.addEventListener('click', (event) => { // обработчик события
        event.preventDefault(); // предотвращение обновления страницы после выбора элемента списка
        dropdown__value.textContent = element.textContent; // обновление выбранного элемента
        dropdown__list.classList.remove('dropdown__list_active'); // закрывает выпадающий список
    });
});