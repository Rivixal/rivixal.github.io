var texts = [
    "Добро пожаловать на сайт Rivixal! Здесь вы найдете наши проекты.",
    "Если вы ищете решения для своих проблем, у нас также есть гайды, которые помогут вам.",
    "Если вам нужны утилиты, вы можете найти все необходимые программы, включая возможность перепрошивки Xiaomi / Redmi / Poco.",
    "В дополнение, в утилитах вы сможете найти ссылки на поддержку всех драйверов.",
    "На странице 'Инфо' вы также найдете информацию о наших социальных сетях и немного о самом сайте."
  ];
  
  var textElement = document.getElementById("podtextgreeting");
  var currentIndex = 0;
  var fading = false;
  
  function fadeOut() {
    if (fading) return;
    fading = true;
  
    var op = 1; // начальная непрозрачность (1 = полностью непрозрачный)
    var timer = setInterval(function () {
      if (op <= 0) {
        clearInterval(timer);
        fading = false;
        fadeIn();
      }
      textElement.style.opacity = op;
      textElement.style.filter = "alpha(opacity=" + op * 100 + ")";
      op -= 0.01;
    }, 10);
  }
  
  function fadeIn() {
    if (fading) return;
    fading = true;
  
    var op = 0; // начальная непрозрачность (0 = полностью прозрачный)
    textElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
  
    var timer = setInterval(function () {
      if (op >= 1) {
        clearInterval(timer);
        fading = false;
        setTimeout(fadeOut, 2000);
      }
      textElement.style.opacity = op;
      textElement.style.filter = "alpha(opacity=" + op * 100 + ")";
      op += 0.01;
    }, 10);
  }
  
  fadeIn();
  