const btns = document.querySelectorAll(".arrowQuestion");
const text = document.querySelectorAll(".text");
const title = document.querySelectorAll("h2");
const q = btns.length;

for (let i = 0; i < q; i++) {
  btns[i].addEventListener("click", () => {
    textStyle = window.getComputedStyle(text[i], null).display;
    btns[i].classList.toggle("showT");
    if (textStyle === "none") {
      for (let x = 0; x < q; x++) {
        x_text_file = window.getComputedStyle(text[x], null).display;
        if (x_text_file == "block") {
          text[x].style.display = "none";
          title[x].style.fontWeight = "400";
          btns[x].classList.toggle("showT");
          break;
        }
      }
      text[i].style.display = "block";
      title[i].style.fontWeight = "700";
    } else {
      text[i].style.display = "none";
      title[i].style.fontWeight = "400";
    }
  });
}
