// Получаем ссылки на элементы страницы
const deadCount = document.getElementById("dead");
const lostCount = document.getElementById("lost");
const holes = document.querySelectorAll(".hole");

let score = 0;
let misses = 0;

// Функция для обработки клика по ячейке
function handleClick() {
  if (this.classList.contains("hole_has-mole")) {
    // Если это ячейка с кротом, увеличиваем счетчик убитых кротов
    score++;
    deadCount.textContent = score;
    if (Number(deadCount.textContent >= 10)) {
      alert('Победа!');
      score = 0;
    }
  } else if (!this.classList.contains("hole_has-mole")){
    // Если это пустая ячейка, увеличиваем счетчик промахов
    misses++;
    lostCount.textContent = misses;
    if (Number(lostCount.textContent >= 5)) {
      alert('Проигрыш!');
      misses = 0;
    }
  }
}

// Добавляем обработчики клика для каждой ячейки
holes.forEach((hole) => {
  hole.addEventListener("click", handleClick);
  this.removeEventListener("click", handleClick);
});