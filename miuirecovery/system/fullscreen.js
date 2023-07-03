function isFullscreen() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
  }

  function toggleFullscreen() {
    var elem = document.documentElement;

    if (!isFullscreen()) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
      document.getElementById('fullscreen-button').innerText = 'Отключить полноэкранный режим';
      localStorage.setItem('fullscreenMode', 'on');
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      document.getElementById('fullscreen-button').innerText = 'Перейти в полноэкранный режим';
      localStorage.setItem('fullscreenMode', 'off');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var fullscreenMode = localStorage.getItem('fullscreenMode');
    if (fullscreenMode === 'on') {
      toggleFullscreen();
    }
  });