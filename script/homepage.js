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
  

  