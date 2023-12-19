
var currentTime = new Date().getHours();
var greeting;

if (currentTime >= 5 && currentTime < 12) {
  greeting = 'Солнце в окне, новый день.';
} else if (currentTime >= 12 && currentTime < 18) {
  greeting = 'Тепло, светло, время труда.';
} else if (currentTime >= 18 || currentTime < 22) {
  greeting = 'Закат красок, покой вечера.';
} else if (currentTime >= 22 || currentTime < 5){
  greeting = 'Луна мерцает, сны приглашают.';
}

document.write("<h3 class='textwelcome'>" + greeting + "</h3>");

