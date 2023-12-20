document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('task__input');
  const tasksList = document.getElementById('tasks__list');

  // Функция для создания новой задачи
  function createTask(title) {
    const task = document.createElement('div');
    task.classList.add('task');

    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');
    taskTitle.textContent = title;

    const taskRemove = document.createElement('a');
    taskRemove.href = '#';
    taskRemove.classList.add('task__remove');
    taskRemove.textContent = '×';

    task.appendChild(taskTitle);
    task.appendChild(taskRemove);
    tasksList.appendChild(task);

    // Добавляем обработчик события на кнопку удаления задачи
    taskRemove.addEventListener('click', function() {
      task.remove();
    });
  }

  // Обработчик события для добавления задачи по нажатию клавиши Enter
  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && taskInput.value.trim() !== '') {
      createTask(taskInput.value.trim());
      taskInput.value = '';
    }
  });

  // Обработчик события для добавления задачи по нажатию кнопки "Добавить"
  document.getElementById('tasks__add').addEventListener('click', function(e) {
      e.preventDefault();
      if (taskInput.value.trim() !== '') {
      createTask(taskInput.value.trim());
      taskInput.value = '';
    }
  });
});
