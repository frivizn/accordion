const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  let accordionBody = button.nextElementSibling;
  button.addEventListener("click", (event) => {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
      button.setAttribute("aria-expanded", false);
      accordionBody.style.maxHeight = null;
      accordionBody.setAttribute("aria-hidden", true);
    } else {
      button.classList.add("active");
      button.setAttribute("aria-expanded", true);
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
      accordionBody.setAttribute("aria-hidden", false);
    }
  });
});