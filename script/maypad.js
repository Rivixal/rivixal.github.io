function selectImage(imageId, photoURL) {
    var images = document.getElementsByClassName('bannerchoice');
    var mainPhoto = document.getElementById('main-photo');
  
    // Удаляем класс "selected" у всех изображений
    for (var i = 0; i < images.length; i++) {
      images[i].classList.remove('selected');
    }
  
    // Добавляем класс "selected" к выбранному изображению
    var selectedImage = document.getElementById(imageId);
    selectedImage.classList.add('selected');
  
    // Изменяем основное фото
    mainPhoto.src = photoURL;
  }