let hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let colorParts = [];
for (let i = 0; i < 6; i++) {
  colorParts.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
}
let colorHtmTag = document.createElement("h1");
let colorHexText = document.createTextNode(`#${colorParts.join("")}`);
colorHtmTag.append(colorHexText);
document.body.prepend(colorHtmTag);

colorHtmTag.classList.add("color-hex");

let copyBtn = document.querySelector(".copy");
// copyBtn.style.backgroundColor = `#${colorParts.join("")}`;

document.body.style.backgroundColor = `#${colorParts.join("")}`;

// programming copy btn

let alertText = document.querySelector(".alert");

copyBtn.addEventListener("click", () => {
  let inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.value = `#${colorParts.join("")}`;
  document.body.appendChild(inputElement);
  inputElement.select();
  // document.execCommand("copy");
  document.body.removeChild(inputElement);
  // add class display block
  alertText.classList.add("db");

  setTimeout(() => {
    alertText.classList.remove("db");
  }, 2000);
});
