const xhr = new XMLHttpRequest();
const form = document.forms.form;
const progressBar = document.getElementById('progress');
const content = document.querySelector('.content');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhr.upload.onprogress = (event) => {
        progressBar.value = event.loaded / event.total;
    }

    xhr.upload.onload = () => {
        console.log('Файл успешно загружен на сервер')
    }

    xhr.upload.onerror = () => {
        console.log('Ошибка загрузки файла на сервер')
    }

    const formData = new FormData(form);
    xhr.send(formData);

});
