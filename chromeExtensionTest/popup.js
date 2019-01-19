function setupCam() {
  navigator.mediaDevices.getUserMedia({
    video: true
  }).then(mediaStream => {
    document.querySelector('#webcamVideo').srcObject = mediaStream;
    // recordCam(mediaStream)
  }).catch((error) => {
    console.warn(error);
  });
}

setupCam();

$(document).ready(function(){
	chrome.tabs.getSelected(null,function(tab) {
    var tablink = document.createElement('a');
    tablink.href = tab.url;
    $('#host').html("Host : " + tablink)
		})
console.log(tablink);
});