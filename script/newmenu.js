document.write('<div class="tcontainer centermenu">');
document.write('<h1 class="menulabel">Меню</h1>');
document.write('<br>');

//Меню
document.write('<div class="container touch" onclick="document.location=\'gallerey.html\'">');
document.write('<h1><span class="material-symbols-outlined" style="font-size: 30px !important; vertical-align: -4px; margin-right: 5px;">image</span>Галерея</h1>');
document.write('</div>');


document.write('<div class="container touch" onclick="document.location=\'fun.html\'">');
document.write('<h1><span class="material-symbols-outlined" style="font-size: 30px !important; vertical-align: -4px; margin-right: 5px;">joystick</span>Приколюхи</h1>');
document.write('</div>');


document.write('<div class="container touch" onclick="document.location=\'about.html\'">');
document.write('<h1><span class="material-symbols-outlined" style="font-size: 30px !important; vertical-align: -4px; margin-right: 5px;">info</span>Инфо</h1>');
document.write('</div>');

document.write('<div class="container touch" onclick="closeDialog(\'dialog-header\')">');
document.write('<h1><span class="material-symbols-outlined" style="font-size: 30px !important; vertical-align: -4px; margin-right: 5px;">close</span>Закрыть</h1>');
document.write('</div>');

document.write('<br>');

document.write('<details>')
document.write('<summary>')
document.write('<h1 class="menulabel">Настройки</h1>');
document.write('<br>');
document.write('</summary>')
//Настройки
document.write('<div class="container touch" id="dark-theme-container" onclick="toggleTheme(\'dark\')">');
document.write('<h1><span class="material-symbols-outlined" style="font-size: 30px !important; vertical-align: -4px; margin-right: 5px;">dark_mode</span>Темная тема</h1>');
document.write('</div>');


document.write('<div class="container touch" id="light-theme-container" onclick="toggleTheme(\'light\')">');
document.write('<h1><span class="material-symbols-outlined" style="font-size: 30px !important; vertical-align: -4px; margin-right: 5px;">light_mode</span>Cветлая тема</h1>');
document.write('</div>');


document.write('<div class="container touch" id="light-theme-container" onclick="toggleTheme(\'snow\')">');
document.write('<h1><span class="material-symbols-outlined" style="font-size: 30px !important; vertical-align: -4px; margin-right: 5px;">ac_unit</span>Зимняя тема</h1>');
document.write('</div>');


document.write('<div class="container touch" id="auto-theme-container" onclick="autoTheme(\'auto\')">');
document.write('<h1><span class="material-symbols-outlined" style="font-size: 30px !important; vertical-align: -4px; margin-right: 5px;">light_mode</span>Авто<span class="material-symbols-outlined" style="font-size: 30px !important; vertical-align: -4px; margin-left: 5px;">dark_mode</span></h1>');
document.write('</div>');
document.write('</details>')


document.write('<div class="container">');
document.write('<script src="script/footer.js"></script>');
document.write('</div>');
document.write('</div>');