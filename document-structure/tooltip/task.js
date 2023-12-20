const tooltipAll = Array.from(document.querySelectorAll('.has-tooltip')); // Массив кликабельных объектов
const body = document.querySelector('body'); // Объект отслеживания

body.addEventListener('click', (event) => {
    // event.preventDefault();
    const click = tooltipAll.indexOf(event.target); // Место клика
    console.log(click);
    for (let i = 0; i < tooltipAll.length; i++) {
        event.preventDefault();
        const tooltip = tooltipAll[i].firstElementChild; // Объект записи подсказки
        const description = tooltipAll[i].title; // Текст подсказки
        if (i === click) {
            // Добавление разметки подсказки
            tooltipAll[i].insertAdjacentHTML('beforeEnd', `<div class="tooltip">${description}</div>`);
            // Добавление класса вывода подсказки
            tooltip.classList.add('tooltip_active');
            // Добавление атрибут data-position
            tooltip.setAttribute('data-position', 'top');
        } else {
            // tooltip.remove();
            tooltip.classList.remove('tooltip_active');
            // Удаляем атрибут 'data-position'
            tooltip.removeAttribute('data-position');
        }
    }
});

