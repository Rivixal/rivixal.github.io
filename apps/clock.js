function updateDigitalClock() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var time = hours + ':' + minutes + ':' + seconds;
  
    document.getElementById('clock').textContent = time;
  }
  
  function updateAnalogClock() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
  
    var hourAngle = (hour * 30) + (minute * 0.5);
    var minuteAngle = (minute * 6) + (second * 0.1);
    var secondAngle = second * 6;
  
    document.getElementById('hour-hand').style.transform = 'rotate(' + hourAngle + 'deg)';
    document.getElementById('minute-hand').style.transform = 'rotate(' + minuteAngle + 'deg)';
    document.getElementById('second-hand').style.transform = 'rotate(' + secondAngle + 'deg)';
  }
  
  setInterval(updateDigitalClock, 1000);
  setInterval(updateAnalogClock, 1000);