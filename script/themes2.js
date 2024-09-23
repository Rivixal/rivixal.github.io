function toggleTheme(theme) {
  const themeLink = document.querySelector("#theme-link");

  // Обновляем класс
  themeLink.classList.replace("light", theme);

  // Получаем все таблицы стилей на странице
  const styleSheets = document.styleSheets;

  // Ищем нужную таблицу стилей по href
  let targetStyleSheet = null;
  for (let i = 0; i < styleSheets.length; i++) {
    if (styleSheets[i].ownerNode === themeLink) {
      targetStyleSheet = styleSheets[i];
      break;
    }
  }

  // Если нашли таблицу стилей, отключаем её
  if (targetStyleSheet) {
    targetStyleSheet.disabled = true;

    // Обновляем атрибут href
    themeLink.href = `../styles/${theme}.css`;

    // Включаем таблицу стилей немедленно
    targetStyleSheet.disabled = false;
  }

  // Сохраняем выбранную тему в локальное хранилище
  localStorage.setItem("theme", theme);
}

function autoTheme() {
  const themeLink = document.querySelector("#theme-link");

  // Определяем предпочтения цветовой схемы пользователя
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Определяем тему в зависимости от предпочтений
  const theme = prefersDarkMode ? "dark" : "light";

  // Обновляем класс
  themeLink.classList.replace("light", theme);

  // Получаем все таблицы стилей на странице
  const styleSheets = document.styleSheets;

  // Ищем нужную таблицу стилей по href
  let targetStyleSheet = null;
  for (let i = 0; i < styleSheets.length; i++) {
    if (styleSheets[i].ownerNode === themeLink) {
      targetStyleSheet = styleSheets[i];
      break;
    }
  }

  // Если нашли таблицу стилей, отключаем её
  if (targetStyleSheet) {
    targetStyleSheet.disabled = true;

    // Обновляем атрибут href
    themeLink.href = `styles/${theme}.css`;

    // Включаем таблицу стилей немедленно
    targetStyleSheet.disabled = false;
  }

  // Сохраняем выбранную тему в локальное хранилище
  localStorage.setItem("theme", theme);
}

// Выбираем таблицу стилей
const themeLink = document.querySelector("#theme-link");

// Проверяем, есть ли сохраненная тема в локальном хранилище
const savedTheme = localStorage.getItem("theme");

// Если есть сохраненная тема, устанавливаем её сразу
if (savedTheme) {
  toggleTheme(savedTheme);
} else {
  // Если тема не сохранена, устанавливаем тему по умолчанию
  toggleTheme("light");
}
