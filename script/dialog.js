function showDialog(dialogId) {
    var dialog = document.getElementById(dialogId);
    if (dialog) {
      dialog.style.display = "block";
      updateScrollbar(dialog);
    }
  }
  
  function closeDialog(dialogId) {
    var dialog = document.getElementById(dialogId);
    if (dialog) {
      dialog.classList.add('fade-out');
      setTimeout(function() {
        dialog.style.display = "none";
        dialog.classList.remove('fade-out');
      }, 300);
    }
  }
  
  function updateScrollbar(dialog) {
    var scrollbar = dialog.querySelector('.scrollbar');
    var thumb = dialog.querySelector('.scrollbar-thumb');
    var scrollableContent = dialog.querySelector('.scrollable-content');
    
    scrollableContent.addEventListener('scroll', function() {
      var thumbTop = (scrollableContent.scrollTop / scrollableContent.scrollHeight) * 100;
      thumb.style.top = thumbTop + '%';
    });
  }
  