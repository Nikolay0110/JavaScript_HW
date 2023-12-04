const arr1 = Array.from(document.querySelectorAll('.tab'));
const arr2 = Array.from(document.querySelectorAll('.tab__content'));
const scan = document.querySelector('.tab__navigation');

scan.addEventListener('click', (event) => {
    const def = arr1.indexOf(event.target);
    console.log(def);
    for (let i = 0; i < arr1.length; i++) {
        if (i !== def) {
            arr1[i].classList.remove('tab_active');
            arr2[i].classList.remove('tab__content_active');
        }
        arr1[def].classList.add('tab_active');
        arr2[def].classList.add('tab__content_active');
    }
});