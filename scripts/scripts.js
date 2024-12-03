// scripts/scripts.js

// Выполняем код, когда весь контент DOM загружен
document.addEventListener("DOMContentLoaded", () => {
  // Загрузка меню из файла navbar.html
  fetch("navbar.html")
    .then((response) => response.text()) // Получаем текстовый ответ
    .then((data) => {
      // Вставляем содержимое navbar.html в элемент с id="navbar"
      document.getElementById("navbar").innerHTML = data;
      const links = document.querySelectorAll(".nav-link");
      links.forEach((link) => {
        // Добавляем класс "active" для текущей активной ссылки
        if (link.href === window.location.href) {
          link.classList.add("active");
        }
      });
    });
});
