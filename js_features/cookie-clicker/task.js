let speed = document.getElementById('clicker__speed');
let img = document.getElementById('cookie')
let counter = document.getElementById('clicker__counter');

setInterval( () => {
    img.onclick = () => {
    counter.textContent = Number(counter.textContent) + 1;
    if (Number(counter.textContent) % 2 === 0) {
        cookie.width += 30;
    } else {
        cookie.width -= 30;
    }
    }
    const start = new Date();
    // console.log('Старт: ' + start.getTime());
    speed.textContent = ((
        Number(counter.textContent) / (end.getTime() - start.getTime())) * -1000).toFixed(2);
    // console.log('Скорость:  ' + speed.textContent)
}, 1000);
const end = new Date();
// console.log('Конец:  ' + end.getTime());