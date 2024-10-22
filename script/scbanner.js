document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('updateBanner');
    const closeBtn = document.getElementById('closeBanner');
    
    // Показать баннер через 1 секунду после загрузки страницы
    setTimeout(() => {
        banner.classList.add('show');
    }, 1000);
    
    // Закрытие баннера при нажатии на кнопку
    closeBtn.addEventListener('click', () => {
        // Убираем класс показа
        banner.classList.remove('show');
        // Добавляем класс скрытия, если нужно для анимации
        banner.classList.add('hide');
        
        // Удаляем баннер из DOM через небольшой таймаут
        setTimeout(() => {
            banner.remove();
        }, 300); // Здесь 300ms — это время, которое нужно для анимации, если она есть
    });
});
