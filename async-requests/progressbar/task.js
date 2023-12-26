const url = 'https://students.netoservices.ru/nestjs-backend/upload';
const progressBar = document.getElementById('progress');

function updateProgress(loaded, total) {
    const progress = (loaded / total) * 100;
    progressBar.value = progress;
}

async function sendFile(formData) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
            onProgress: function (event) {
                if (event.lengthComputable) {
                    const loaded = event.loaded;
                    const total = event.total;
                    updateProgress(loaded, total);
                }
            }
        });

        if (response.ok) {
            console.log('Файл успешно загружен');
        } else {
            console.error('Ошибка загрузки файла:', response.statusText);
        }
    } catch (error) {
        console.error('Произошла ошибка при загрузке файла:', error);
    }
}

const formData = new FormData(form);
sendFile(formData);
