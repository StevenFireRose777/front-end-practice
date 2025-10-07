
const images = ["images/Canelo.png", "images/Conspicious-Confidant.png", "images/cooked-times.png"];

function someFunction(){
  let index = Math.floor(Math.random() * 3);
  document.getElementById('my-img').src = images[index];
}


