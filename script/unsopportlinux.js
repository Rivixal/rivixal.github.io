var userDeviceArray = [
    {device: 'Не поддерживается на Android', platform: /Android/},
    {device: 'Не поддерживается на iPhone', platform: /iPhone/},
    {device: 'Не поддерживается на iPad', platform: /iPad/},
    {device: 'Не поддерживается на Symbian', platform: /Symbian/},
    {device: 'Не поддерживается на Windows Phone', platform: /Windows Phone/},
    {device: 'Не поддерживается на Tablet OS', platform: /Tablet OS/},
    {device: 'Linux', platform: /Linux/},
    {device: 'Не поддерживается на Windows 7', platform: /Windows NT 6.1/},
    {device: 'Не поддерживается на  Windows 8', platform: /Windows NT 6.2/},
    {device: 'Не поддерживается на  Windows 8.1', platform: /Windows NT 6.3/},
    {device: 'Не поддерживается на  Windows 10/11', platform: /Windows NT 10.0/},
    {device: 'Неподдерживаетсся на Macintosh', platform: /Macintosh/}
];

var platform = navigator.userAgent;

function getPlatform() {
    for (var i in userDeviceArray) {
        if (userDeviceArray[i].platform.test(platform)) {
            return userDeviceArray[i].device;
        }
    }
    return 'Неизвестная платформа!' + platform;
}
document.write('<p>Текущая операционная система: ' + getPlatform() + '</p>' );



