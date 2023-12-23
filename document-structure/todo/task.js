document.addEventListener('DOMContentLoaded', function () {
    const text = document.getElementById('task__input');
    const task = document.getElementById('tasks__list');
    const taskAdd = document.getElementById('tasks__add');

    // Функция для создания новой задачи
    function createTask(taskText) {
        if (taskText.length !== 0) {
            const newTask = document.createElement('div');
            newTask.classList.add('task');
            newTask.innerHTML = `
                <div class="task_title">
                    ${taskText}
                </div>
                <a href="#" class="task__remove">&times;</a>
            `;
            task.appendChild(newTask);

            // Добавляем обработчик события на кнопку удаления задачи
            const taskRemove = newTask.querySelector('.task__remove');
            taskRemove.addEventListener('click', function () {
                newTask.remove();
            });
        }
    }

    // Обработчик события для добавления задачи по нажатию кнопки "Добавить"
    taskAdd.addEventListener('click', function (e) {
        e.preventDefault();
        if (text.value.trim() !== '') {
            createTask(text.value.trim());
            text.value = '';
        }
    });
});