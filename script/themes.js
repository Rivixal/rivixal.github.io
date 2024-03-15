document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('themeToggle');
    const html = document.querySelector('html');
    const darkMode = localStorage.getItem('darkMode');
  
    // Проверяем сохраненное значение и устанавливаем тему соответственно
    if (darkMode === 'enabled') {
      html.classList.add('dark-mode');
      checkbox.checked = true;
    }
  
    // Обработчик изменения состояния переключателя
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        html.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        html.classList.remove('dark-mode');
        localStorage.setItem('darkMode', null);
      }
    });
  });
  