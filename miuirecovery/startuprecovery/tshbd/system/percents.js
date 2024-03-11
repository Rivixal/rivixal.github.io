let percentage = 0;
let direction = 13;
const labelCycle = [
    "MIUI обновляется. Не выключайте устройство.",
    "Вы больше не сможете включить устройство, если попытаетесь перезагрузить его."
];
let labelIndex = 0;

function updateProgressBar() {
    const progressBar = document.getElementById('progress-fill');
    const percentElement = document.getElementById('percent');

    // Обновляем проценты и шкалу
    percentage += 0.01 * direction;
    if (percentage >= 100 || percentage <= 0) {
        direction *= 0;
        percentage += 0.00;
        window.location.href = 'booting.html';
    }

    progressBar.style.width = percentage + '%';
    percentElement.textContent = percentage.toFixed(2);
}

// Запускаем обновление каждые 50 миллисекунд (0.05 секунды)
setInterval(updateProgressBar, 50);

// Изменение текста каждые 10 секунд в цикле
function updateLabel() {
    const labelElement = document.getElementById('label');
    labelElement.innerHTML = labelCycle[labelIndex];
    labelIndex = (labelIndex + 1) % labelCycle.length;
}
setInterval(updateLabel, 10000);

document.addEventListener("DOMContentLoaded", function() {
    updateProgressBar();
    updateLabel();
});