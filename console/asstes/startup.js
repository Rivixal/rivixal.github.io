var userDeviceArray = [
    { device: 'Android', platform: /Android/ },
    { device: 'iPhone', platform: /iPhone/ },
    { device: 'iPad', platform: /iPad/ },
    { device: 'Symbian', platform: /Symbian/ },
    { device: 'Windows Phone', platform: /Windows Phone/ },
    { device: 'Tablet OS', platform: /Tablet OS/ },
    { device: 'Linux', platform: /Linux/ },
    { device: 'Windows XP (or Server 2003) and older', platform: /Windows NT 5.1/ },
    { device: 'Windows Vista (or Server 2008)', platform: /Windows NT 6.0/ },
    { device: 'Windows 7 (or Server 2008 R2)', platform: /Windows NT 6.1/ },
    { device: 'Windows 8 (or Server 2012)', platform: /Windows NT 6.2/ },
    { device: 'Windows 8.1 (or Server 2012 R2)', platform: /Windows NT 6.3/ },
    { device: 'Windows 10/11 (or Server 2016/2019)', platform: /Windows NT 10.0/ },
    { device: 'Macintosh', platform: /Macintosh/ }
  ];
  
  var platform = navigator.userAgent;
  
  // Функция получения платформы ОС
  function getPlatform() {
    for (var i = 0; i < userDeviceArray.length; i++) {
      if (userDeviceArray[i].platform.test(platform)) {
        return userDeviceArray[i].device;
      }
    }
    return 'Unknown';
  }
  
  // Функция имитации запуска ПК
  function simulatePCStartup() {
    var output = document.getElementById('output');
  
    // Функция для добавления строки с задержкой
    function addOutputLine(line, delay) {
      setTimeout(function () {
        output.innerHTML += line + '\n';
      }, delay * 1000);
    }
  
    // Добавление строк с задержкой
    addOutputLine('[   0.00000000] Search shell command prompt', 0);
    addOutputLine('[   1.00000000] Your OS: ' + getPlatform(), 1);
    addOutputLine('[   2.00000000] Initialization shell prompt', 2);
    addOutputLine('[   3.00000000] Startup May Console', 3);
  
    // Перенаправление на страницу shell/index.html с задержкой
    setTimeout(function () {
      window.location.href = 'shell/index.html';
    }, 5000);
  }
  
  // Вызов функции имитации запуска ПК при загрузке страницы
  window.onload = function () {
    simulatePCStartup();
  };
  