let offset = 0;
const slider_line = document.querySelector('#slider_line');
const slides = document.getElementsByClassName('slide_box');
let window_width = document.documentElement.clientWidth;

let i = 0;
let waitTime = 5000;

window.addEventListener("load", function (event) {
  window_width = document.documentElement.clientWidth;
  for (let s of slides) {
    s.style.width = window_width + "px";
  }
  slider_line.style.width = window_width * slides.length + "px";
  document.getElementById("slide_button1").className = "active_button";
  document.getElementById("slide_button2").className = "passive_button";

  document.getElementById("slide_button1").onclick = function () {
    i = 0;
    console.log(i);
    clearTimeout(timerId);
    slideMove(1);
  };
  document.getElementById("slide_button2").onclick = function () {
    i = 1;
    console.log(i);
    clearTimeout(timerId);
    slideMove(0);
  };
  slideMove(0);

});

window.addEventListener(`resize`, event => {
  window_width = document.documentElement.clientWidth;
  for (let s of slides) {
    s.style.width = window_width + "px";
  }
  slider_line.style.width = window_width * slides.length + "px";
}, false);

let timerId;
function slideMove(param) {

  if (i == 0) {
    if (param == 0) {
      slider_line.style.transition = "all 0s ease 0s";
    }
    else {
      slider_line.style.transition = "all ease 1s";
    }
    offset = window_width * i;
    slider_line.style.left = -offset + 'px';
    i++;
    document.getElementById("slide_button1").className = "active_button";
    document.getElementById("slide_button2").className = "passive_button";
    timerId = setTimeout(slideMove, waitTime / 2, 0)
  }
  else if (i == slides.length - 1) {
    offset = window_width * i;
    slider_line.style.left = -offset + 'px';
    i = 0;
    document.getElementById("slide_button1").className = "active_button";
    document.getElementById("slide_button2").className = "passive_button";
    timerId = setTimeout(slideMove, waitTime / 2, 0)

  } else {
    slider_line.style.transition = "all ease 1s";
    offset = window_width * i;
    slider_line.style.left = -offset + 'px';
    i++;
    document.getElementById("slide_button2").className = "active_button";
    document.getElementById("slide_button1").className = "passive_button";
    timerId = setTimeout(slideMove, waitTime, 0)
  }
}