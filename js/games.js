function spawnDivs(params) {
  for (let i = 0; i < 10; i++) {
    var div = document.createElement("div");

    // Create the text node for anchor element.
    var text = document.createTextNode(i);

    // Append the text node to anchor element.
    div.appendChild(text);

    // Set the title.
    div.classList.add("circle");

    // Append the anchor element to the body.

    div.style.top = Math.random() * 200 + "px";
    div.style.left = Math.random() * 200 + "px";
    circleGame = document.querySelector(".circle-game");
    circleGame.appendChild(div);
  }
  circleGame.addEventListener("click", e => {
    if (circleGame.children[0] === e.target) {
      e.target.remove();
    }
  });
}
spawnDivs();
