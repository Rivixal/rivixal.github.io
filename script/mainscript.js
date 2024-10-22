// Получаем анимируемые элементы
var leftAnimatedElement = document.querySelector('.left-animation');
var rightAnimatedElement = document.querySelector('.right-animation');
var topAnimatedElement = document.querySelector('.top-animation');
var bottomAnimatedElement = document.querySelector('.bottom-animation');
var opacityAnimatedElement = document.querySelector('.opacity-animation');

// Добавляем обработчики событий для начала и окончания анимации для каждого элемента
leftAnimatedElement.addEventListener('animationstart', function() {
  document.documentElement.classList.add('overflow-hidden');
});

leftAnimatedElement.addEventListener('animationend', function() {
  document.documentElement.classList.remove('overflow-hidden');
});

rightAnimatedElement.addEventListener('animationstart', function() {
  document.documentElement.classList.add('overflow-hidden');
});

rightAnimatedElement.addEventListener('animationend', function() {
  document.documentElement.classList.remove('overflow-hidden');
});

topAnimatedElement.addEventListener('animationstart', function() {
  document.documentElement.classList.add('overflow-hidden');
});

topAnimatedElement.addEventListener('animationend', function() {
  document.documentElement.classList.remove('overflow-hidden');
});

bottomAnimatedElement.addEventListener('animationstart', function() {
  document.documentElement.classList.add('overflow-hidden');
});

bottomAnimatedElement.addEventListener('animationend', function() {
  document.documentElement.classList.remove('overflow-hidden');
});

opacityAnimatedElement.addEventListener('animationstart', function() {
  document.documentElement.classList.add('overflow-hidden');
});

opacityAnimatedElement.addEventListener('animationend', function() {
  document.documentElement.classList.remove('overflow-hidden');
});
