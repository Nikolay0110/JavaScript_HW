// const control = Array.from(document.querySelectorAll('.font-size')); // массив
// const scan = document.querySelector('.book__control'); // объект сканирования
// const book = document.querySelector('.book');
//
// scan.addEventListener('click', (event) => { // обработчик клика
//     const def = control.indexOf(event.target);// индекс элемента массива по которому был клик
//     event.preventDefault(); // отключение обновления страницы после клика
//     for (let i = 0; i < control.length; i++) { // пробегаемся циклом по индексам массива
//         if (i !== def) control[i].classList.remove('font-size_active'); // удаляем активноый размер если он не равен индксу клика
//         control[def].classList.add('font-size_active'); // назначаем активный шрифт равный элементу клика
//         if (def === 0) { // переключение шрифта у объекта с текстом - book
//             book.classList.add('font-size_small') // если индекс клика равен 0 то small
//         } else if (def === 2) {
//             book.classList.add('font-size_big') // если индекс клика равен 2 то big
//         } else { // в ином случае удаляем изменения шрифта и ставим дефолтное значение
//             book.classList.remove('font-size_small') // удаление селектора уменьшенного шрифта
//             book.classList.remove('font-size_big') // удаление селектора увеличенного шрифта
//         }
//     }
// });



const control = Array.from(document.querySelectorAll('.font-size')); // массив
const fontSize = document.querySelector('.book__control_font-size'); // объект сканирования
const book = document.querySelector('.book'); // основной контент страницы - текст книги


const fontColor = document.querySelector('.color');

let arrColor = [fontColor.appendChild(children[0])];
console.log(arrColor);
fontSize.addEventListener('click', (event) => { // обработчик клика
    const def = control.indexOf(event.target);// индекс элемента массива по которому был клик
    event.preventDefault(); // отключение обновления страницы после клика
    for (let i = 0; i < control.length; i++) { // пробегаемся циклом по индексам массива
        if (i !== def) control[i].classList.remove('font-size_active'); // удаляем активноый размер если он не равен индксу клика
        control[def].classList.add('font-size_active'); // назначаем активный шрифт равный элементу клика
        if (def === 0) { // переключение шрифта у объекта с текстом - book
            book.classList.add('font-size_small') // если индекс клика равен 0 то small
        } else if (def === 2) {
            book.classList.add('font-size_big') // если индекс клика равен 2 то big
        } else { // в ином случае удаляем изменения шрифта и ставим дефолтное значение
            book.classList.remove('font-size_small') // удаление селектора уменьшенного шрифта
            book.classList.remove('font-size_big') // удаление селектора увеличенного шрифта
        }
    }
});

fontColor.addEventListener('click', (event) => {
    // const def1 = arrColor.indexOf(event.target);
    // console.log(def1);
    event.preventDefault();
})

