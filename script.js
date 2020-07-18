var modlBtn = document.getElementById('myModlBtn');
var modl = document.getElementById('myModl');

modlBtn.addEventListener('click', evt => {
    console.log('clicked on ModlBtn');
    modl.style.display = 'block';
});

window.addEventListener('click', evt => {
    console.log('clicked on window');
    if(evt.target == modl) {
        modl.style.display = 'none';
    }
})

var prev = document.getElementById('p1');
var next = document.getElementById('n1');
var dot1 = document.getElementById('dot1');
var dot2 = document.getElementById('dot2');
var dot3 = document.getElementById('dot3');

var idx = 1;

const displaySlideShow = (slideVal) => {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
    if (slideVal > slides.length) {idx = 1}
    if (slideVal < 1) {idx = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("   active", "");
    } 
    slides[idx-1].style.display = "block";
    dots[idx-1].className += " active";
  
}

const currentSlide = (slideVal) => {
    console.log('current');
    displaySlideShow(idx = slideVal);
}

const advanceSlide = (slideVal) => {
    console.log('advance');
    displaySlideShow(idx += slideVal);
}

prev.addEventListener('click', () => {
    advanceSlide(-1);
});

next.addEventListener('click', () => {
    advanceSlide(1);
});

dot1.addEventListener('click', () => {
    currentSlide(1);
});

dot2.addEventListener('click', () => {
    currentSlide(2);
});

dot3.addEventListener('click', () => {
    currentSlide(3);
});

displaySlideShow(idx);