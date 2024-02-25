

let button = document.querySelectorAll("p");

document.body.addEventListener("keydown", function (event) {
  for (let i = 0; i < button.length; i++) {
    if (event.code == `Key${button[i].innerHTML}`) {
      button[i].classList.toggle("add");
    }
  }
});
document.body.addEventListener("keyup", function (event) {
  for (let i = 0; i < button.length; i++) {
    if (event.code == `Key${button[i].innerHTML}`) {
      button[i].classList.toggle("add");
    }
  }
});
