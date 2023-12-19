    // Функция для определения разницы между двумя датами
    function daysUntilDate(targetDate) {
        const today = new Date();
        const target = new Date(targetDate);
        const diff = target - today;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        return days;
      }
  
      // Задаем вашу дату рождения
      const yourBirthday = new Date('2024-01-01');
  
      // Получаем элемент для вывода сообщения
      const daysLeftMessage = document.getElementById('daysLeftMessage');
  
      // Получаем количество дней до вашего дня рождения
      const daysUntilBirthday = daysUntilDate(yourBirthday);
  
      if (daysUntilBirthday === 0) {
        daysLeftMessage.textContent = 'С ноыым годом!';
      } else if (daysUntilBirthday === 1) {
        daysLeftMessage.textContent = 'Завтра новый год';
      } else {
        daysLeftMessage.textContent = `Осталось дней до нового года: ${daysUntilBirthday} `;
      }