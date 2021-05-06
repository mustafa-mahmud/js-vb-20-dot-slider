'use strict';

const images = document.querySelectorAll('img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const dotsContainer = document.querySelector('.dots-container');

let currentIndex = 0;

createDots();
slider(0);

function slider(currentIndex) {
  images.forEach((img, ind) => {
    img.style.transform = `translateX(${100 * (ind - currentIndex)}%)`;
  });

  activeCls(currentIndex);
}

function nextSlider() {
  if (currentIndex <= 0) {
    currentIndex = images.length - 1;
  } else {
    console.log(123);
    currentIndex--;
  }
  console.log(currentIndex);

  slider(currentIndex);
}

function prevSlider() {
  if (currentIndex >= images.length - 1) currentIndex = 0;
  else currentIndex++;

  slider(currentIndex);
}

function dotsSlide(e) {
  const dots = dotsContainer.querySelectorAll('.dot');

  //remove active class
  dots.forEach((dot) => dot.classList.remove('dot--active'));

  const target = e.target;

  if (target.classList.contains('dot')) {
    target.classList.add('dot--active');
    currentIndex = target.getAttribute('data-target');
    slider(currentIndex);
  }
}

//add active class to dots
function activeCls(currentIndex) {
  const dots = dotsContainer.querySelectorAll('.dot');

  dots.forEach((dot) => dot.classList.remove('dot--active'));

  dots.forEach((dot) => {
    const dataTarget = +dot.getAttribute('data-target');
    if (dataTarget === +currentIndex) {
      dot.classList.add('dot--active');
    }
  });
}

//create dots
function createDots() {
  images.forEach((img, ind) => {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<span class="dot" data-target="${ind}"></span>`
    );
  });
}

next.addEventListener('click', nextSlider);

prev.addEventListener('click', prevSlider);

dotsContainer.addEventListener('click', dotsSlide);
