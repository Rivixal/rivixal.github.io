if (document.cookie.indexOf('visitorId=') === -1) {
  var visitorId = generateVisitorId();
  document.cookie = 'visitorId=' + visitorId + '; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
}

var visitCount = getVisitCount();
visitCount++; 
document.cookie = 'visitCount=' + visitCount + '; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';

function generateVisitorId() {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

function getVisitCount() {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf('visitCount=') === 0) {
      return parseInt(cookie.substring(11));
    }
  }
  return 0;
}

var counterElement = document.getElementById('counter');
counterElement.textContent = 'Количество посетителей: ' + visitCount;
document.write('<p>Количество посетителей: ' + visitCount + '</p>');
