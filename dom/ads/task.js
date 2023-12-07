const rotator = Array.from(document.querySelectorAll('.rotator__case'));
let count = 1;

rotator[0].classList.remove('rotator__case_active');

const rotation = function () {
    rotator.forEach(function (elem, index) {
        elem.classList.toggle('rotator__case', count !== index);
    });

    count++;

    if (count >= rotator.length) {
        count = 0;
    }
}

setInterval(rotation, 1000);
