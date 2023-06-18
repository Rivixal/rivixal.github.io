document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = 1;
  });

function downloadFile(url){
    var link = document.createElement('a');
    link.href = url;
    link.target="_blank";
    link.download='style/pictures/maybanner.zip';
    
    var event = document.createEvent("MouseEvents");
    event.initMouseEvent("click");
    link.dispatchEvent(event);
  }
  
  var but = document.getElementById('dbut')
  but.addEventListener('click', function(){
    downloadFile(but.getAttribute('data-path'));
  })

  window.onload = function() {
    // Плавная прокрутка до верхней части страницы
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const detailsElement = document.getElementById('myDetails');
  const summaryElement = detailsElement.querySelector('summary');
  
  summaryElement.addEventListener('click', () => {
    detailsElement.toggleAttribute('open');
  });
  