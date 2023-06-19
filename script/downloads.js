var downloadCount = 0;

function incrementDownloadCount() {
  downloadCount++;
  document.getElementById("downloadButton").innerHTML = "Скачать (" + downloadCount + ")";
}

document.getElementById("downloadButton").addEventListener("click", incrementDownloadCount);