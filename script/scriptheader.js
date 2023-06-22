// Функция, которая изменяет тему header'а и убирает размытие
function setHeaderTheme() {
    var header = document.getElementById("myHeader");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Проверяем, находится ли пользователь вверху страницы
    if (scrollTop === 0) {
      // Убираем размытие (blurring)
      header.style.backdropFilter = "none";
      header.style.webkitBackdropFilter = "none";

      // Применяем соответствующий класс стилей
      header.classList.add("hidecolor");
      header.classList.remove("showcolor");
      h1.header.classList.remove("showtext");
      h1.header.classList.add("hidetext")
    } else {
      // Возвращаем размытие (blurring)
      header.style.backdropFilter = "";
      header.style.webkitBackdropFilter = "";

      // Возвращаем цвета на место
      header.classList.add("showcolor");
      header.classList.remove("hidecolor");
    }
  }

  window.addEventListener("DOMContentLoaded", function() {
    setHeaderTheme(); // Вызываем функцию сразу после загрузки страницы
  });
  
  // Обработчик события прокрутки страницы
  window.addEventListener("scroll", setHeaderTheme);