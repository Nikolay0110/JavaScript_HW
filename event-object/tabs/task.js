const arr1 = Array.from(document.querySelectorAll('.tab')); // забираем массив тегов объектов клика
const arr2 = Array.from(document.querySelectorAll('.tab__content')); // забираем массив с тегами содержимого
const scan = document.querySelector('.tab__navigation'); // объект сканирвания

scan.addEventListener('click', (event) => { // вызываем обработчик на клик в который передаем event
    const def = arr1.indexOf(event.target); // получаем индес элеменат массива по которому был клик
    console.log(def);
    for (let i = 0; i < arr1.length; i++) { // запускаем цикл для удаления классов отображения информации если по элементу не было клика
        if (i !== def) { // и если это так то
            arr1[i].classList.remove('tab_active'); // удаляем класс активного состояния
            arr2[i].classList.remove('tab__content_active'); // удаляем класс отображения содержимого
        }
        arr1[def].classList.add('tab_active'); // а элементу по которому кликнули присваиваем необхлжимый класс
        arr2[def].classList.add('tab__content_active'); // и соответственно тегу с контентом присваиваем класс отображения контента по тому же индексу, так как они совпадают на всей странице
    }
});