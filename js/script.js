let container = document.getElementById("container");
for (let i = 50; i >= -50; i--) {
  let span = document.createElement("span");
  span.style.setProperty("--i", i);
  container.appendChild(span);
}
