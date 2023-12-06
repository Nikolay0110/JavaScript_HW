function isElementInViewport(element) {
  // Получение границ элемента
  const rect = element.getBoundingClientRect();

  // Проверка, пересекаются ли границы элемента с видимой областью окна
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


window.addEventListener('scroll', () => {
    const reveal = Array.from(document.querySelectorAll('.reveal'));
    if (isElementInViewport(reveal[0])) reveal[0].classList.add('reveal_active');
    if (isElementInViewport(reveal[1])) reveal[1].classList.add('reveal_active');
});
window.removeEventListener('scroll', () => {})
