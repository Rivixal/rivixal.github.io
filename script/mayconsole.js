document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  const consoleElement = document.querySelector('.console');
  let canInputCommand = true;

  output.innerHTML += 'May Console 1.0\n';
  output.innerHTML += 'Languange: RU\n';
  output.innerHTML += 'Account: User\n';
  output.innerHTML += '\n';
  output.innerHTML += 'Введи слово hint, чтобы ознакомиться с командами.\n';

  input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const command = input.value;
      input.value = '';

      output.innerHTML += '> ' + command + '\n';

      if (canInputCommand) {
        executeCommand(command);
      } else {
        output.innerHTML += 'Подождите, идет выполнение предыдущей команды...\n';
      }

      // Прокрутка командной строки вниз после выполнения команды
      consoleElement.scrollTop = consoleElement.scrollHeight;
    }
  });

  function executeCommand(command) {
    if (command === 'hello') {
      output.innerHTML += 'Привет!\n';
    } else if (command === 'time') {
      const currentTime = new Date().toLocaleTimeString();
      output.innerHTML += 'Текущее время: ' + currentTime + '\n';

    } else if (command === 'checkversion') {
      checkScriptVersion();

    } else if (command === 'clear') {
      clearConsole();

    } else if (command === 'clear') {
      telegramchannel();

    } else if (command === 'about-system') {
      output.innerHTML += '\n';
      output.innerHTML += 'May Console 1.0\n';
      output.innerHTML += '=========================================\n';
      output.innerHTML += 'Последнее обновление: 27/06/2023 \n';
      output.innerHTML += 'Основан на: JavaScript\n';
      output.innerHTML += 'Работали над консолью Ramzayev German & Ivan Movchan\n';
      output.innerHTML += 'Исходный код проекта: Открыт.\n';
      output.innerHTML += '\n';

    } else if (command === 'hint') {
      showHint();

    } else if (command.startsWith('changecolor')) {
      const colors = command.substring(12).split(' ');
      const textColor = colors[1];
      const backgroundColor = colors[0];
      changeColor(textColor, backgroundColor);
    } else {
      if (canInputCommand) {
        output.innerHTML += '<b style="color: red;">E:</b> Неизвестная команда: ' + command + '\n';
      } else {
        output.innerHTML += 'Подождите, идет выполнение предыдущей команды...\n';
      }
    }
  
    // Прокрутка командной строки вниз после выполнения команды
    consoleElement.scrollTop = consoleElement.scrollHeight;
  }

  function clearConsole() {
    output.innerHTML = ''; // Очистка содержимого консоли

    // Прокрутка командной строки вниз после очистки
    consoleElement.scrollTop = consoleElement.scrollHeight;
  }

  function checkScriptVersion() {
    output.innerHTML += 'Проверка версии скрипта...\n';
    canInputCommand = false; // Запрет ввода новых команд

    // Здесь можно добавить логику проверки версии скрипта, например, с помощью AJAX-запроса или других методов
    // Для примера, использован фиктивный запрос к файлу с информацией о версии

    setTimeout(function() {
      output.innerHTML += 'Версия скрипта: 1.0\n';
      canInputCommand = true; // Разрешение ввода новых команд

      // Прокрутка командной строки вниз после проверки версии
      consoleElement.scrollTop = consoleElement.scrollHeight;
    }, 2000);
  }

  function showHint() {
    output.innerHTML += 'Доступные команды:\n';
    output.innerHTML += '- hello: Выводит приветствие.\n';
    output.innerHTML += '- time: Выводит текущее время.\n';
    output.innerHTML += '- checkversion: Проверяет версию скрипта.\n';
    output.innerHTML += '- clear: Очищает консоль.\n';
    output.innerHTML += '- about-system: Выводит информацию о системе.\n';
    output.innerHTML += '- hint: Выводит список доступных команд.\n';
    output.innerHTML += '- changecolor [background-color] [text-color]: Изменяет цвет фона и текста в консоли.\n';
    output.innerHTML += '- telegramchannel: Приглашает вас в телеграмм канал :) \n';
    output.innerHTML += '\n';

    // Прокрутка командной строки вниз после вывода подсказки
    consoleElement.scrollTop = consoleElement.scrollHeight;
  }

  function changeColor(textColor, backgroundColor) {
    const consoleStyle = consoleElement.style;
    consoleStyle.color = textColor;
    consoleStyle.backgroundColor = backgroundColor;

    output.innerHTML += 'Цвет фона и текста изменен.\n';

    // Прокрутка командной строки вниз после изменения цвета
    consoleElement.scrollTop = consoleElement.scrollHeight;
  }
});