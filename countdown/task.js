const remainder = document.getElementById("timer");
setInterval(() => {
 if (Number(remainder.textContent) > 0) {
  remainder.textContent = Number(remainder.textContent) - 1;
 } else if (Number(remainder.textContent) === 0) {
  alert("Вы победили! :)")
 }
 }, 1000);

