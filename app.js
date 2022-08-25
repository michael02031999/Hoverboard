let container = document.getElementById("container");

for (let i = 0; i < 500; i++) {
  let div = document.createElement("div");
  div.classList.add("square");
  container.append(div);

  div.addEventListener("mouseenter", hover);
  div.addEventListener("mouseleave", hoverGone);
}

function hover(e) {
  console.log("hoverOn");
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  e.path[0].style.backgroundColor = "#" + randomColor;
}

function hoverGone(e) {
  console.log("hoverOff");
  setTimeout(() => {
    e.path[0].style.transition = "all 1s";
    e.path[0].style.backgroundColor = "rgb(29, 29, 29)";
  }, 1000);
}
