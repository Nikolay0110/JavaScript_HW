const plus = document.getElementsByClassName('product__quantity-control product__quantity-control_inc')
const minus = document.getElementsByClassName('product__quantity-control product__quantity-control_dec')
const quantity = document.getElementsByClassName('product__quantity-value')
const add = document.getElementsByClassName('product__add')
const products = document.getElementsByClassName('product')
const images = document.getElementsByClassName('product__image')
const cart = document.querySelector('.cart__products')
let arrayId = []

for (let i = 0; i< plus.length; i++){
    plus[i].onclick = () => {
    quantity[i].textContent = Number(quantity[i].textContent)+1
    }
    minus[i].onclick = () => {
        if (quantity[i].textContent > 1){
            quantity[i].textContent = Number(quantity[i].textContent)-1
        }
    }
    add[i].onclick = () => {
        const cartCount = document.querySelectorAll('.cart__product-count')
        const productInCart = document.querySelectorAll('.cart__product')
        console.log(products[i].getAttribute('data-id'))
        
        if (arrayId.includes(products[i].getAttribute('data-id') ) ) {
            cartCount[i].textContent = Number(cartCount[i].textContent) + Number(quantity[i].textContent)
        }
        else {
        cart.innerHTML +=  
       `<div class="cart__product" data-id="${products[i].getAttribute('data-id')}">
           <img class="cart__product-image" src="${images[i].getAttribute('src')}">
           <div class="cart__product-count">${quantity[i].textContent}</div>
       </div>`
        }
        arrayId.push(products[i].getAttribute('data-id'))
    }
}













// // Объекты для поиска
// const values = Array.from(document.querySelectorAll('.product__quantity-value')); // количество товаров
// const more = Array.from(document.querySelectorAll('.product__quantity-control_inc')); // +
// const less = Array.from(document.querySelectorAll('.product__quantity-control_dec')); // -
// const button = Array.from(document.querySelectorAll('.product__add')); // кнопка добавить
// const carts = document.querySelector('.cart__products'); // Корзина
// const image = document.querySelectorAll('.product__image')
//
//
// // Элементы разметки
// const img = document.createElement('img');
// const div = document.createElement('div');
// const newDiv = document.createElement('div');
//
//
//
// // Логика
// button.forEach(element => { // Обработка клика по кнопке "Добавить" и получение индекса элементов
//     element.addEventListener('click', (event) => {
//     const getProduct = event.target.closest('.product'); // Получение родительского элемента с классом product
//     const id = Number(getProduct.getAttribute('data-id')); // id товара
//     const index = id - 1; // Индекс элемента массива
//
//     // Создание разметки Корзины
//     carts.appendChild(div).classList.add('cart__product');
//     div.setAttribute('data-id', id.toString());
//     div.appendChild(img).classList.add('cart__product-image');
//     const src = image[index].getAttribute('src');
//     img.setAttribute('alt', 'Ошибка загрузки фото товара...')
//     img.setAttribute('src', src);
//     div.appendChild(newDiv).classList.add('cart__product-count');
//     newDiv.textContent = parseInt(values[index].textContent);
//     values[index].textContent = 1;
//
//     const count = document.querySelectorAll('.cart__product-count');
//     let total = parseInt(count[index].textContent); // Количество в корзине
//     const unit = div.getAttribute('data-id'); // id товара в корзине
//     if (id === unit) {
//         event.preventDefault();
//         total += values[index].textContent;
//         console.log(total);
//     }
//     });
// });
//
//
// more.forEach(element => { // Увеличение товаров на добавление в корзину
//     element.addEventListener('click', (event) => {
//     const def = more.indexOf(event.target);
//     let value = parseInt(values[def].textContent, 10); // преобразование строки к числу в десятичной системе
//     values[def].textContent = ++value; // увеличение количества товаров
//     });
// });
//
//
// less.forEach(element => { // Уменьшение товаров на добавление в корзину
//     element.addEventListener('click', (event) => {
//     const def1 = less.indexOf(event.target);
//     let value = parseInt(values[def1].textContent, 10); // преобразование строки к числу в десятичной системе
//     if (value > 1) values[def1].textContent = --value; // уменьшение количества товаров
//     });
// });
