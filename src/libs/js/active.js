//button hamburger toggle
let toggle_btn  = document.getElementById("toggle");
let menu__hamburger = document.getElementById("toggle");

toggle_btn.addEventListener("click", function() {
  menu__hamburger.classList.toggle("menu__show");

});

let btn__open  = document.getElementById("toggle2");
let slides__open = document.getElementById("toggle2");

btn__open.addEventListener("click", function() {
  slides__open.classList.toggle("slides__closed");

});
//slider
let controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
  controls[i].style.display = 'inline-block';
}


let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;

function nextSlide(){
  goToSlide(currentSlide+1);
}

function previousSlide(){
  goToSlide(currentSlide-1);
}

function goToSlide(n){
  slides[currentSlide].className = 'slide';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slide showing';
}

let next = document.getElementById('next');
let previous = document.getElementById('previous');

next.onclick = function(){

  nextSlide();
};
previous.onclick = function(){

  previousSlide();
};
