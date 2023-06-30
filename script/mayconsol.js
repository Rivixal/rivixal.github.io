document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    const redirectMetaTag = document.getElementById('redirectMetaTag');
    let canInputCommand = true; // Флаг, разрешающий ввод команды

    input.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        const command = input.value;
        input.value = '';
  
        output.innerHTML += '> ' + command + '\n';
  
        // Выполнение команды, только если разрешен ввод
        if (canInputCommand) {
          executeCommand(command);
        } else {
          output.innerHTML += 'Подождите, идет выполнение предыдущей команды...\n';
        }
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

        } else if (command === 'vi --on2000tr') {
          output.innerHTML += 'Roma the pig))\n';

        } else if (command === 'update') {
          updateScript();

        } else if (command === 'update') {
          output.innerHTML += 'Пока-что нет API ключа для обновлений консоли'

        } else if (command === 'clear') {
            clearConsole();

          } else if (command === 'about-system') {
            output.innerHTML += '\n'
            output.innerHTML += 'May Console 1.0\n'
            output.innerHTML += '=========================================\n'
            output.innerHTML += 'Последнее обновлнеие: 01/01/1978 \n'
            output.innerHTML += 'Основан на: JavaScript\n'
            output.innerHTML += 'Работали над консолью Ramzayev German & Ivan Movchan\n'
            output.innerHTML += 'Исходный код проекта: Открыт.\n'
            output.innerHTML += 'Но перед тем как вносить правки, добавьте строку, кто модифицировал данную консоль, спасибо <3'
            output.innerHTML += '\n'

          } else if (command === 'hint') {
            output.innerHTML += '\n';
            output.innerHTML += 'Инструкционная команда для использования Mayconsole:\n';
            output.innerHTML += '\n';
            output.innerHTML += 'Включение консоли:\n\n';
            output.innerHTML += 'Для включения консоли Mayconsole в вашем HTML-документе добавьте следующий код:\n';
            output.innerHTML += '&lt;script src="mayconsole.js"&gt;&lt;/script&gt;\n\n';
            output.innerHTML += 'Для включения консоли Mayconsole в вашем HTML-документе выполните следующие шаги:\n';
            output.innerHTML += '1. Скачайте файл "mayconsole.js" по следующей ссылке: [ссылка на скачивание]\n';
            output.innerHTML += '2. Подключите скрипт к вашему HTML-документу с помощью следующего кода:\n';
            output.innerHTML += '&lt;input type="text" id="input" /&gt;\n';
            output.innerHTML += '&lt;pre id="output"&gt;&lt;/pre&gt;\n\n';
            output.innerHTML += 'Подключение скрипта:\n\n';
            output.innerHTML += 'Доступные команды:\n\n';
            output.innerHTML += '- help: Выводит список доступных команд и их описания.\n';
            output.innerHTML += '- clear: Очищает содержимое консоли.\n';
            output.innerHTML += '- time: Выводит текущее время.\n';
            output.innerHTML += '- date: Выводит текущую дату.\n';
            output.innerHTML += '- goto [URL]: Переходит на указанный URL.\n';
            output.innerHTML += '- search [запрос]: Выполняет поиск в Интернете с использованием указанного запроса.\n';
            output.innerHTML += '- calc [выражение]: Выполняет простые математические вычисления с использованием указанного выражения.\n\n';
            output.innerHTML += 'Редактирование скрипта:\n\n';
            output.innerHTML += 'Файл "mayconsole.js" содержит JavaScript-код, который можно изменять по своему усмотрению.\n';
            output.innerHTML += 'Вы можете добавлять новые команды или изменять поведение существующих команд, следуя существующей структуре скрипта.\n';
            output.innerHTML += 'Обратите внимание, что при редактировании скрипта сохраняйте имя "Mayconsole" в команде "about-system" для отображения информации о системе.\n';
                     
              } else if (command === 'date') {
                const currentDate = new Date().toLocaleDateString();
                output.innerHTML += 'Текущая дата: ' + currentDate + '\n';

              } else if (command.startsWith('goto ')) {
                const url = command.substring(5);
                window.location.href = 'https://' + url;

              } else if (command.startsWith('search ')) {
                const query = command.substring(7);
                const searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
                window.open(searchUrl, '_blank');

              } else if (command.startsWith('calc ')) {
                const expression = command.substring(5);
                try {
                  const result = eval(expression);
                  output.innerHTML += 'Результат: ' + result + '\n';
                } catch (error) {
                  output.innerHTML += 'Ошибка в выражении: ' + error + '\n';
                }
              
        } else {
          output.innerHTML += 'Неизвестная команда: ' + command + '\n';
        }

        function clearConsole() {
            output.innerHTML = ''; // Очистка содержимого консоли
          }

          function checkScriptVersion() {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'path/to/versionInfo.json', true); // Замените 'path/to/versionInfo.json' на путь к файлу с информацией о версии
            xhr.onload = function() {
              if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                var currentVersion = response.currentVersion;
                var newVersion = response.newVersion;
                
                if (compareVersions(newVersion, currentVersion) > 0) {
                  console.log('Доступна новая версия скрипта:', newVersion);
                } else {
                  console.log('У вас установлена последняя версия скрипта:', currentVersion);
                }
              } else {
                console.log('Ошибка при получении информации о версии скрипта');
              }
            };
            xhr.send();
          }
          
          function updateScript() {
            console.log('Выполняется обновление скрипта...');
            // Выполните необходимые действия для обновления скрипта
            console.log('Скрипт успешно обновлен');
          }
          
          function compareVersions(version1, version2) {
            var v1 = version1.split('.');
            var v2 = version2.split('.');
            
            for (var i = 0; i < v1.length; i++) {
              if (parseInt(v1[i]) > parseInt(v2[i])) {
                return 1;
              } else if (parseInt(v1[i]) < parseInt(v2[i])) {
                return -1;
              }
            }
                        return 0;
          }       
      }
    });
      