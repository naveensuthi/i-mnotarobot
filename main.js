const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]");
const element = document.querySelectorAll(".element");
const selectColor = document.getElementById("SelectColor");

// disable checkbox
checkbox.disabled = true;
submitBtn.disabled = true;
console.log(selectColor);

// generate random color
function getRandomColor() {
  const letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}
console.log(getRandomColor());

// Assign color to elements

element.forEach(function (element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.innerHTML = color;
  selectColor.innerHTML = color;
});

// check for right color
element.forEach(function (element) {
  element.addEventListener("click", function () {
    if (element.innerHTML === selectColor.innerHTML) {
      checkbox.checked = true;
      alert("You are human!");
      submitBtn.disabled = false;
      submitBtn.classList.remove("btn-light");
      submitBtn.classList.add("btn-success");
    } else {
      alert("Please verify that you are human");
      location.reload(true);
    }
  });
});
