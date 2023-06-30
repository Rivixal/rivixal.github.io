var months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];
  var daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

  // Определяем функцию для получения текущей даты
function getCurrentDate() {
    return new Date();
  }
  
  // Определяем функцию для создания календаря
  function createCalendar(month, year) {
    // Получаем контейнер для календаря
    var calendarContainer = document.getElementById("calendar");
  
    // Очищаем контейнер перед созданием нового календаря
    calendarContainer.innerHTML = "";
  
    // Создаем заголовок с выбранным месяцем и годом
    var header = document.createElement("h2");
    header.innerHTML = months[month] + " " + year;
    calendarContainer.appendChild(header);
  
    // Создаем таблицу для дней недели
    var table = document.createElement("table");
  
    // Создаем заголовок таблицы с днями недели
    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");
    for (var i = 0; i < daysOfWeek.length; i++) {
      var headerCell = document.createElement("th");
      headerCell.innerHTML = daysOfWeek[i];
      headerRow.appendChild(headerCell);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);
  
    // Создаем тело таблицы с днями месяца
    var tbody = document.createElement("tbody");
  
    // Определяем первый день месяца
    var firstDay = new Date(year, month, 1);
    var startingDay = firstDay.getDay();
  
    // Определяем количество дней в месяце
    var daysInMonth = new Date(year, month + 1, 0).getDate();
  
    // Создаем ячейки таблицы с днями месяца
    var day = 1;
    for (var i = 0; i < 6; i++) {
      var row = document.createElement("tr");
  
      // Заполняем строки таблицы ячейками дней
      for (var j = 0; j < 7; j++) {
        if (i === 0 && j < startingDay) {
          // Пустая ячейка до начала месяца
          var cell = document.createElement("td");
          row.appendChild(cell);
        } else if (day > daysInMonth) {
          // Пустая ячейка после окончания месяца
          break;
        } else {
          // Ячейка с днем месяца
          var cell = document.createElement("td");
          cell.innerHTML = day;
          row.appendChild(cell);
  
          // Отмечаем сегодняшнюю дату, если это текущий месяц и год
          if (
            month === getCurrentDate().getMonth() &&
            year === getCurrentDate().getFullYear() &&
            day === getCurrentDate().getDate()
          ) {
            cell.classList.add("today");
          }
  
          day++;
        }
      }
  
      tbody.appendChild(row);
    }
  
    table.appendChild(tbody);
    calendarContainer.appendChild(table);
  }
  
  // Вызываем функцию для создания календаря с текущим месяцем и годом
  var currentDate = getCurrentDate();
  createCalendar(currentDate.getMonth(), currentDate.getFullYear());

  // Определяем функцию для переключения на предыдущий месяц
function previousMonth() {
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();
    
    if (currentMonth === 0) {
      // Если текущий месяц январь, переключаемся на декабрь предыдущего года
      currentMonth = 11;
      currentYear--;
    } else {
      // В противном случае, переключаемся на предыдущий месяц текущего года
      currentMonth--;
    }
    
    // Обновляем currentDate с новыми значениями
    currentDate = new Date(currentYear, currentMonth);
    
    // Обновляем календарь с новыми значениями
    createCalendar(currentMonth, currentYear);
  }
  
  // Определяем функцию для переключения на следующий месяц
  function nextMonth() {
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();
    
    if (currentMonth === 11) {
      // Если текущий месяц декабрь, переключаемся на январь следующего года
      currentMonth = 0;
      currentYear++;
    } else {
      // В противном случае, переключаемся на следующий месяц текущего года
      currentMonth++;
    }
    
    // Обновляем currentDate с новыми значениями
    currentDate = new Date(currentYear, currentMonth);
    
    // Обновляем календарь с новыми значениями
    createCalendar(currentMonth, currentYear);
  }
  
  // Получаем кнопки переключения месяцами
  var previousButton = document.getElementById("previous-button");
  var nextButton = document.getElementById("next-button");
  
  // Назначаем обработчики событий на кнопки
  previousButton.addEventListener("click", previousMonth);
  nextButton.addEventListener("click", nextMonth);
  
  