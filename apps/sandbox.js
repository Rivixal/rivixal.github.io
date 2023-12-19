function updateSandbox() {
    var cssCode = document.getElementById('css-input').value;
    var htmlCode = document.getElementById('html-input').value;
  
    var iframe = document.createElement('iframe');
    iframe.src = 'about:blank';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
  
    var sandbox = document.getElementById('sandbox');
    sandbox.innerHTML = '';
    sandbox.appendChild(iframe);
  
    var doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(htmlCode);
    doc.close();
  
    var style = doc.createElement('style');
    style.innerHTML = cssCode;
    doc.head.appendChild(style);
  }