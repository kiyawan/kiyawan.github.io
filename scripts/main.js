/*
var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/cat001a.png') {
		myImage.setAttribute ('src','images/cat000a.jpg');
	} else {
		myImage.setAttribute ('src','images/cat001a.jpg');
	}
}
*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/cat001a.jpg') {
      myImage.setAttribute ('src','images/cat001a.jpg');
	} else {
	  myImage.setAttribute ('src','images/cat000a.jpg');
	}
}