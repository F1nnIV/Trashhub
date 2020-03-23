function spawnDivs(params) {
  for (let i = 0; i < 100; i++) {
    var div = document.createElement("div");
    var p = document.createElement("p");

    // Create the text node for anchor element.
    var text = document.createTextNode(i + 1);

    // Append the text node to anchor element.
    p.appendChild(text);
    div.appendChild(p);

    // Set the title.
    div.classList.add("circle");

    // Append the anchor element to the body.

    div.style.top = Math.random() * 40 + "vhs";
    div.style.left = Math.random() * 100 + "%";
    circleGame = document.querySelector(".circle-game");
    circleGame.appendChild(div);
  }
  circleGame.addEventListener("click", e => {
    if (circleGame.children[0] === e.target) {
      e.target.remove();
    }
    if (circleGame.children[0].children[0] === e.target) {
      e.target.parentNode.remove();
    }
  });
}
spawnDivs();
