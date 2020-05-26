// JavaScript Document
var image = document.querySelector('.dog-image');

function fetchDog() {
	fetch('https://dog.ceo/api/breeds/image/random').then(res => { return res.json();})
	.then(jsonRes => {
		image.src = jsonRes.message;
	})
}