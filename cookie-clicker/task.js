let speed = document.getElementById('clicker__speed');
let img = document.getElementById('cookie')
let counter = document.getElementById('clicker__counter');
img.onclick = () => {
    counter.textContent = Number(counter.textContent) + 1;
    const start = new Date()
    if (Number(counter.textContent) % 2 === 0) {
        cookie.width += 30;
    } else {
        cookie.width -= 30;
    }
    // const end = new Date();
    // speed.textContent = Number(counter.textContent) / (end - start);
}

/*ЗАДАЧА НА РАСЧЕТ СКОРОСТИ НЕ РЕШЕНА, ПРОШУ ПОДЛСКАЗКИ))))))))))))*/
/*
setTimeout( () => {
    const start = new Date()
    console.log('Конец:  ' + end.getTime())
    speed.textContent = (
        Number(counter.textContent) / (end.getTime() - start.getTime()))
    console.log('Скорость:  ' + speed.textContent)
    const end = new Date();
    }, 1000);
*/