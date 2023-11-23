// Получаем ссылки на элементы страницы
const deadCount = document.getElementById("dead");
const lostCount = document.getElementById("lost");
const holes = document.querySelectorAll(".hole");

let score = 0;
let misses = 0;

// Функция для обработки клика по лунке с кротом
function handleMoleClick() {
  // Увеличиваем счетчик убитых кротов
  score++;
  deadCount.textContent = score;

  // Удаляем обработчик клика, чтобы крот не мог быть убит дважды
  this.removeEventListener("click", handleMoleClick);
}

// Функция для обработки клика по пустой лунке
function handleMiss() {
  // Увеличиваем счетчик промахов
  misses++;
  lostCount.textContent = misses;
}

// Добавляем обработчики клика для каждой лунки
holes.forEach((hole) => {
  // Если лунка имеет класс "hole_has-mole", значит, это лунка с кротом
  if (hole.classList.contains("hole_has-mole")) {
    hole.addEventListener("click", handleMoleClick);
  } else {
    hole.addEventListener("click", handleMiss);
  }
});