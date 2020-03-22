let dog = document.querySelector(".dog-img");

dog.addEventListener("mouseover", e => {
  e.target.setAttribute("src", "img/dog-cutout-speechbubble.png");
});

dog.addEventListener("mouseleave", e => {
  e.target.setAttribute("src", "img/dog-cutout.png");
});
