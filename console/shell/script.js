// Получаем ссылки на элементы DOM
const startButton = document.querySelector('.start-button');
const startMenu = document.querySelector('.start-menu-items');
const startMenuItems = document.querySelectorAll('.start-menu-item');
const taskbarButtons = document.querySelectorAll('.taskbar-button');
const windows = document.querySelectorAll('.window');

// Добавляем обработчик события для кнопки "Start"
startButton.addEventListener('click', () => {
  // Переключаем видимость стартового меню
  startMenu.classList.toggle('show');
});

// Закрываем стартовое меню при клике вне его
document.addEventListener('click', (event) => {
  if (!event.target.closest('.start-menu')) {
    startMenu.classList.remove('show');
  }
});

// Добавляем обработчики событий для элементов стартового меню
startMenuItems.forEach((menuItem, index) => {
  menuItem.addEventListener('click', () => {
    // Открываем окно приложения, связанное с выбранным элементом меню
    openWindow(index + 2); // Добавляем 2, чтобы начать с окна 2
  });
});

// Добавляем обработчики событий для кнопок запущенных приложений в таскбаре
taskbarButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Переключаем активное окно
    toggleWindow(index);
  });
});

// Функция для переключения активного окна
function toggleWindow(index) {
  windows.forEach((window, i) => {
    if (i === index) {
      // Показываем выбранное окно
      window.style.display = 'block';
    } else {
      // Скрываем остальные окна
      window.style.display = 'none';
    }
  });
}

// Функция для открытия нового окна приложения
function openWindow(index) {
  // Проверяем, есть ли уже открыто окно с таким индексом
  const existingWindow = document.querySelector(`.window[data-index="${index}"]`);
  if (existingWindow) {
    // Переключаемся на существующее окно
    toggleWindow(parseInt(existingWindow.dataset.index));
  } else {
    // Создаем новое окно с уникальным содержимым
    const newWindow = document.createElement('div');
    newWindow.className = 'window';
    newWindow.setAttribute('data-index', index);
    newWindow.innerHTML = `
      <h2>Окно ${index}</h2>
      <p>Содержимое окна ${index}.</p>
    `;
    document.querySelector('.desktop').appendChild(newWindow);

    // Переключаемся на новое окно
    toggleWindow(index);
  }
}
