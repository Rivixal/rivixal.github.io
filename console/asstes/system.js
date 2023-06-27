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
    } else if (command.startsWith('execute')) {
      executeSubcommand(command);
    } else if (command === 'clear') {
      clearConsole();
    } else if (command === '--bio:maydilsiel') {
      showbio();
    } else if (command === 'graphic_-install') {
      installationGraphics();
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

  function executeSubcommand(command) {
    const subcommand = command.substring(8).trim();

    if (subcommand === '--help') {
      output.innerHTML += 'Доступные подкоманды:\n';
      output.innerHTML += '- execute --9 page=download_-version: Отображает информацию о доступных релизах.\n';
      output.innerHTML += '- execute --9 page=download_-4389trh7f8dscvre0: Отображает информацию о конкретном релизе.\n';
      output.innerHTML += '\n';
    } else if (subcommand === '--9 page=download_-version') {
      clearConsole();
      output.innerHTML += 'Выбор релиза\n';
      output.innerHTML += '==================================================\n';
      output.innerHTML += '\n';
      output.innerHTML += 'MayConsole 1.0 [Release code 4389trh7f8dscvre0] [date: 27/06/2023]\n';
    } else if (subcommand === '--9 page=download_-4389trh7f8dscvre0') {
      output.innerHTML += 'MayConsole 1.0 [Release code 4389trh7f8dscvre0] [date: 27/06/2023]\n';
      output.innerHTML += '===============================================================================\n';
      output.innerHTML += '\n';
      output.innerHTML += 'Сведение execute --i page=download_-4389trh7f8dscvre0\n';
    } else if (subcommand === '--i page=download_-4389trh7f8dscvre0') {
      clearConsole();
      output.innerHTML += 'MayConsole 1.0 [Release code 4389trh7f8dscvre0] [date: 27/06/2023]\n';
      output.innerHTML += '===============================================================================\n';
      output.innerHTML += '\n';
      output.innerHTML += 'Преимущества:\n';
      output.innerHTML += '- Простота использования: Консоль предоставляет удобный интерфейс для взаимодействия с пользователем через командную строку.\n';
      output.innerHTML += '- Гибкость: Вы можете добавлять свои собственные команды и логику обработки в функции `executeCommand` и `executeSubcommand`.\n';
      output.innerHTML += '- Возможность отображать результаты выполнения команд и подкоманд в консоли.\n';
      output.innerHTML += '- Интерактивность: Пользователь может вводить команды и получать ответы в режиме реального времени.\n';
      output.innerHTML += '\n';
      output.innerHTML += 'Недостатки:\n';
      output.innerHTML += '- Отсутствие встроенных механизмов безопасности: Консоль не имеет механизмов защиты от злонамеренных команд или ввода данных, поэтому необходимо самостоятельно обеспечить безопасность и валидацию вводимых команд.\n';
      output.innerHTML += '- Ограниченность функциональности: Консоль может выполнять только те команды, которые были предварительно определены в коде.\n';
      output.innerHTML += '\n';
      output.innerHTML += 'Инструкция по встраиванию:\n';
      output.innerHTML += '1. Редактирование CSS:\n';
      output.innerHTML += '   - Добавьте следующие стили для класса `.console`:\n';
      output.innerHTML += '     ```css\n';
      output.innerHTML += '     .console {\n';
      output.innerHTML += '       height: 300px; /* Высота консоли */\n';
      output.innerHTML += '       overflow-y: auto; /* Включение вертикальной прокрутки */\n';
      output.innerHTML += '       font-family: monospace; /* Шрифт для текста в консоли */\n';
      output.innerHTML += '     }\n';
      output.innerHTML += '     ```\n';
      output.innerHTML += '   - Добавьте следующие стили для класса `.console pre` (для отображения текста в консоли):\n';
      output.innerHTML += '     ```css\n';
      output.innerHTML += '     .console pre {\n';
      output.innerHTML += '       margin: 0;\n';
      output.innerHTML += '       white-space: pre-wrap; /* Обработка переносов строк */\n';
      output.innerHTML += '       word-break: break-all; /* Разбиение слов по слогам */\n';
      output.innerHTML += '     }\n';
      output.innerHTML += '     ```\n';
      output.innerHTML += '\n';
      output.innerHTML += '2. Добавление HTML-кода:\n';
      output.innerHTML += '   - Внутри `&lt;body&gt;` вашего HTML-файла добавьте следующий код:\n';
      output.innerHTML += '     ```html\n';
      output.innerHTML += '     &lt;div class="console"&gt;\n';
      output.innerHTML += '       &lt;pre id="output"&gt;&lt;/pre&gt;\n';
      output.innerHTML += '     &lt;/div&gt;\n';
      output.innerHTML += '     &lt;br&gt;\n';
      output.innerHTML += '     &lt;input type="text" id="input" placeholder="Введите команду, для полной подсказки воспользуйтесь командой hint" autofocus&gt;\n';
      output.innerHTML += '     ```\n';
      output.innerHTML += '\n';
      output.innerHTML += '3. Добавление скрипта:\n';
      output.innerHTML += '   - Добавьте скрипт в ваш HTML-файл внутри блока `&lt;script&gt;&lt;/script&gt;`:\n';
      output.innerHTML += '     ```javascript\n';
      output.innerHTML += '     &lt;script&gt;\n';
      output.innerHTML += '       // Вставьте здесь код, который был предоставлен ранее\n';
      output.innerHTML += '     &lt;/script&gt;\n';
      output.innerHTML += '     ```\n';
      output.innerHTML += '\n';
      output.innerHTML += 'После внедрения кода, вы сможете использовать любую команду для выполнения определенной логики в функции `executeSubcommand` в коде JavaScript. Вам необходимо добавить соответствующий блок кода в эту функцию, чтобы обрабатывать и выполнять эту команду соответствующим образом.\n';
      output.innerHTML += 'Для установки данного релиза нужно ввести эту команду с участием execute с ключом [-o]\n';
      
    } else if (subcommand === '-o page=download_-4389trh7f8dscvre0') {
      output.innerHTML += 'Установка релиза...........'
      window.location.href = '../asstes/release/4389trh7f8dscvre0.zip';

    } else {
      output.innerHTML += '<b style="color: red;">E:</b> Неизвестная подкоманда: ' + subcommand + '\n';
    }

    // Прокрутка командной строки вниз после выполнения подкоманды
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
    output.innerHTML += '- execute --help: Выводит доступные подкоманды для execute.\n';
    output.innerHTML += '- clear: Очищает консоль.\n';
    output.innerHTML += '- about-system: Выводит информацию о системе.\n';
    output.innerHTML += '- hint: Выводит список доступных команд.\n';
    output.innerHTML += '- changecolor <background-color> <text-color>: Изменяет цвет фона и текста в консоли.\n';
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

  function installationGraphics() {
    window.location.href = 'mayinstaller.html';
    output.innerHTML += 'Загрузка в графическую установку.................................\n';

    // Прокрутка командной строки вниз после изменения цвета
    consoleElement.scrollTop = consoleElement.scrollHeight;
  }

  function playSoundCloudTrack(trackUrl) {
    // Подставьте ваш Client ID вместо YOUR_CLIENT_ID
    SC.initialize({ client_id: 'YOUR_CLIENT_ID' });
  
    // Получение информации о треке с помощью API
    SC.resolve(trackUrl)
      .then(function (track) {
        var audio = document.getElementById('myAudio');
  
        // Установка пути трека в аудио элемент
        audio.src = track.stream_url + '?client_id=YOUR_CLIENT_ID';
  
        // Воспроизведение трека
        audio.play();
      })
      .catch(function (error) {
        console.error('Ошибка при загрузке трека:', error);
      });
  }

  function showbio() {
    clearConsole();
    output.innerHTML += 'БИОГРАФИЯ MAYDILSIEL\n';
    output.innerHTML += '=====================================================\n';
    output.innerHTML += 'Имя: Герман Рамзаев\n';
    output.innerHTML += 'Возраст: 17 (скоро 18)\n';
    output.innerHTML += 'Место жительства: Казахстан\n';
    output.innerHTML += 'Родной язык: Русский\n';
    output.innerHTML += 'Часовой пояс: UTC +06:00\n';
    output.innerHTML += 'Учится на программиста\n';
    output.innerHTML += 'Основной язык программирования: C#\n';
    output.innerHTML += 'Дополнительный язык программирования: Python + JavaScript\n';
    output.innerHTML += 'Изредка использует С++\n';
    output.innerHTML += 'Самостоятельное изучение языка C# важная часть развития для него\n';
    
  }


});