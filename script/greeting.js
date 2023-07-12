
var currentTime = new Date().getHours();
var greeting;

if (currentTime >= 5 && currentTime < 12) {
    greeting = 'Доброе утро!';
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting = 'Добрый день!';
  } else if (currentTime >= 18 || currentTime < 5) {
    greeting = 'Добрый вечер!';
  } else {
    greeting = 'Доброй ночи!';
  }

document.write("<h2 class='textwelcome'>" + greeting + "</h2>");

