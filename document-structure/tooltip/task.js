const tooltipAll = Array.from(document.querySelectorAll('.has-tooltip')); // Массив кликабельных объектов


for (let i = 0; i < tooltipAll.length; i++) {
    tooltipAll[i].addEventListener('click', (event) => {
    const click = tooltipAll.indexOf(event.target); // Место клика
    event.preventDefault();
    const tooltip = document.querySelector('.tooltip'); // Объект записи подсказки
    const description = tooltipAll[i].title; // Текст подсказки
    if (tooltip) {
        tooltip.remove();
    } else if (i === click) {
        const tooltipElement = document.createElement('div');
        tooltipElement.classList.add('tooltip');
        tooltipElement.innerHTML = description;
        tooltipElement.classList.add('tooltip_active');
        tooltipElement.setAttribute('data-position', 'top');
        tooltipAll[i].insertAdjacentElement('afterEnd', tooltipElement);

        const rectParent = tooltipAll[i].getBoundingClientRect(); // Адрес ссылки

        // Позиционируем подсказку относительно кликнутого элемента
        const newTop = rectParent.bottom + window.scrollY + 5;
        const newLeft = rectParent.left + window.scrollX;

        tooltipElement.style.top = `${newTop}px`;
        tooltipElement.style.left = `${newLeft}px`;
    }
})}
